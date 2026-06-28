import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { normalizeWaNumber } from "@/lib/wa-number"
import { createInvoice } from "@/lib/xendit"
import { getAppUrl } from "@/lib/app-url"
import { generateOrderId } from "@/lib/order-id"

const PRICE_IDR = 99000

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const panggilan = typeof body?.nama === "string" ? body.nama.trim() : ""
  const waNumberRaw = typeof body?.waNumber === "string" ? body.waNumber : ""

  if (!panggilan || !waNumberRaw.trim()) {
    return NextResponse.json({ error: "nama_and_wa_number_required" }, { status: 400 })
  }

  const waNumber = normalizeWaNumber(waNumberRaw)

  const existingUser = await db.user.findUnique({ where: { waNumber } })
  if (existingUser) {
    return NextResponse.json({ error: "wa_number_taken" }, { status: 409 })
  }

  const orderId = generateOrderId()
  const appUrl = getAppUrl()

  await db.transaction.create({
    data: { orderId, waNumber, panggilan, flow: "wa", amount: PRICE_IDR, status: "pending" },
  })

  try {
    const invoice = await createInvoice({
      externalId: orderId,
      amount: PRICE_IDR,
      description: `Inggrisin Yuk — Lifetime Access (${panggilan})`,
      successRedirectURL: `${appUrl}/payment/success?orderId=${orderId}`,
      failureRedirectURL: `${appUrl}/beli`,
      metadata: { flow: "wa", panggilan, waNumber },
    })

    await db.transaction.update({
      where: { orderId },
      data: { xenditInvoiceId: invoice.id },
    })

    return NextResponse.json({ invoiceUrl: invoice.invoiceUrl, orderId })
  } catch (err) {
    await db.transaction.update({ where: { orderId }, data: { status: "failed" } })
    console.error("Xendit createInvoice failed (wa flow)", err)
    return NextResponse.json({ error: "payment_gateway_error" }, { status: 502 })
  }
}
