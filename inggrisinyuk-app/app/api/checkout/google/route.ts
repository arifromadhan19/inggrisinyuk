import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { createInvoice } from "@/lib/xendit"
import { getAppUrl } from "@/lib/app-url"
import { generateOrderId } from "@/lib/order-id"

const PRICE_IDR = 99000

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const pendingSignupId = typeof body?.pendingSignupId === "string" ? body.pendingSignupId : ""
  const panggilan = typeof body?.nama === "string" ? body.nama.trim() : ""

  if (!pendingSignupId || !panggilan) {
    return NextResponse.json({ error: "pending_signup_id_and_nama_required" }, { status: 400 })
  }

  const pending = await db.pendingSignup.findUnique({ where: { id: pendingSignupId } })
  if (!pending || pending.status !== "pending" || pending.expiresAt < new Date()) {
    return NextResponse.json({ error: "pending_signup_not_found" }, { status: 404 })
  }

  const orderId = generateOrderId()
  const appUrl = getAppUrl()

  await db.transaction.create({
    data: {
      orderId,
      pendingSignupId: pending.id,
      email: pending.email,
      panggilan,
      flow: "google",
      amount: PRICE_IDR,
      status: "pending",
    },
  })

  try {
    const invoice = await createInvoice({
      externalId: orderId,
      amount: PRICE_IDR,
      payerEmail: pending.email,
      description: `Inggrisin Yuk — Lifetime Access (${panggilan})`,
      successRedirectURL: `${appUrl}/payment/success?orderId=${orderId}`,
      failureRedirectURL: `${appUrl}/beli?pending=${pending.id}`,
      metadata: { flow: "google", panggilan, email: pending.email },
    })

    await db.$transaction([
      db.transaction.update({ where: { orderId }, data: { xenditInvoiceId: invoice.id } }),
      db.pendingSignup.update({ where: { id: pending.id }, data: { xenditInvoiceId: invoice.id, name: panggilan } }),
    ])

    return NextResponse.json({ invoiceUrl: invoice.invoiceUrl, orderId })
  } catch (err) {
    await db.transaction.update({ where: { orderId }, data: { status: "failed" } })
    console.error("Xendit createInvoice failed (google flow)", err)
    return NextResponse.json({ error: "payment_gateway_error" }, { status: 502 })
  }
}
