import { Button } from "@/components/ui/button"

export function BottomCta() {
  return (
    <section id="beli" className="bg-gradient-to-b from-blue-800 to-slate-900 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Siap Upgrade Bahasa Inggrismu?
        </h2>
        <div className="mt-8">
          <Button
            size="lg"
            nativeButton={false}
            className="h-14 rounded-xl bg-white px-8 text-base font-semibold text-blue-700 hover:bg-white/90 sm:text-lg"
            render={<a href="/beli">Beli Sekarang — Rp 99.900 Selamanya</a>}
          />
        </div>
        <p className="mt-4 text-pretty text-sm text-slate-300 sm:text-base">
          Sekali bayar, akses selamanya. Semua modul, semua level.
        </p>
      </div>
    </section>
  )
}
