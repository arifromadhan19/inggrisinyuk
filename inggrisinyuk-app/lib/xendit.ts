const INVOICES_ENDPOINT = "https://api.xendit.co/v2/invoices"
const INVOICE_DURATION_SECONDS = 60 * 60 * 24 // 24 jam, sesuai PRD untuk semua metode (termasuk VA)

function getSecretKey() {
  const secretKey = process.env.XENDIT_SECRET_KEY
  if (!secretKey) throw new Error("XENDIT_SECRET_KEY is not set")
  return secretKey
}

function getAuthHeader() {
  return `Basic ${Buffer.from(`${getSecretKey()}:`).toString("base64")}`
}

export interface CreateInvoiceParams {
  externalId: string
  amount: number
  description: string
  payerEmail?: string
  successRedirectURL: string
  failureRedirectURL: string
  metadata?: Record<string, string>
}

export interface CreateInvoiceResult {
  id: string
  invoiceUrl: string
}

export async function createInvoice(params: CreateInvoiceParams): Promise<CreateInvoiceResult> {
  const res = await fetch(INVOICES_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: getAuthHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      external_id: params.externalId,
      amount: params.amount,
      description: params.description,
      payer_email: params.payerEmail,
      currency: "IDR",
      invoice_duration: INVOICE_DURATION_SECONDS,
      success_redirect_url: params.successRedirectURL,
      failure_redirect_url: params.failureRedirectURL,
      metadata: params.metadata,
    }),
  })

  if (!res.ok) {
    throw new Error(`Xendit create invoice failed: ${res.status} ${await res.text()}`)
  }

  const data = await res.json()
  return { id: data.id, invoiceUrl: data.invoice_url }
}

export function isValidWebhookToken(headerToken: string | null): boolean {
  const expected = process.env.XENDIT_WEBHOOK_TOKEN
  if (!expected) throw new Error("XENDIT_WEBHOOK_TOKEN is not set")
  return headerToken === expected
}
