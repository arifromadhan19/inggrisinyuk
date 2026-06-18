import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#beranda" className="text-lg font-bold text-primary sm:text-xl">
          Inggrisin Yuk
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" nativeButton={false} render={<a href="#login">Login</a>} />
          <Button nativeButton={false} render={<a href="#beli">Beli Sekarang</a>} />
        </div>
      </nav>
    </header>
  )
}
