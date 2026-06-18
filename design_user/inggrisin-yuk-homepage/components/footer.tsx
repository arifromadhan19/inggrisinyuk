export function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-12 text-slate-300 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <span className="text-lg font-bold text-white">Inggrisin Yuk</span>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-400">
              Belajar Bahasa Inggris yang Seru, Personal, dan Langsung Praktik dengan AI
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
            <a href="#beranda" className="text-slate-300 transition-colors hover:text-white">
              Beranda
            </a>
            <a href="#fitur" className="text-slate-300 transition-colors hover:text-white">
              Fitur
            </a>
            <a href="#cara-kerja" className="text-slate-300 transition-colors hover:text-white">
              Cara Kerja
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 Inggrisin Yuk. Developed by Arif Romadhan
        </div>
      </div>
    </footer>
  )
}
