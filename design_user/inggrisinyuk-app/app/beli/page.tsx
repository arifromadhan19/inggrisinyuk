"use client"

import { useState } from "react"
import { CheckoutForm } from "@/components/checkout-form"
import { OrderSummary } from "@/components/order-summary"
import { PaymentSuccess } from "@/components/payment-success"

function generateOrderId() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  const seq = String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0")
  return `INY-${y}${m}${d}-${seq}`
}

export default function BeliPage() {
  const [success, setSuccess] = useState<{ name: string; orderId: string } | null>(null)

  const handleSuccess = (name: string) => {
    setSuccess({ name, orderId: generateOrderId() })
  }

  return (
    <main className="min-h-dvh bg-background px-4 py-8 sm:px-6 lg:py-12">
      {/* Back link */}
      <div className="mx-auto w-full max-w-5xl mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Kembali ke Beranda
        </a>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Order summary: first on mobile, right on desktop */}
          <div className="lg:order-2">
            <OrderSummary />
          </div>

          {/* Form / success: second on mobile, left on desktop */}
          <div className="lg:order-1">
            {success ? (
              <PaymentSuccess name={success.name} orderId={success.orderId} />
            ) : (
              <CheckoutForm onSuccess={handleSuccess} />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
