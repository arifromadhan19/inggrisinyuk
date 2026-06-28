import { PanduanModul } from "@/components/panduan-modul"
import type { PanduanModulConfig } from "@/components/panduan-modul"

const config: PanduanModulConfig = {
  emoji: "🎧",
  name: "Listening",
  tagline: "Latih telinga untuk Bahasa Inggris alami — dengarkan, pahami, tirukan",
  moduleRoute: "/dashboard/listening",
  tips: [
    {
      title: "Aktifkan Voice Mode agar Kak Ara bisa bersuara",
      desc: "Tap ikon headphone di ChatGPT untuk mengaktifkan Voice Mode — Kak Ara akan membacakan teks dengan suara natural. Jauh lebih efektif daripada hanya membaca teks di layar.",
    },
    {
      title: "Gunakan headphone untuk kualitas audio terbaik",
      desc: "Headphone atau earphone membuat setiap kata terdengar lebih jelas dan kamu lebih fokus menangkap detail audio — terutama untuk aksen dan intonasi.",
    },
    {
      title: "Teknik shadowing: dengarkan dulu, baru tirukan",
      desc: "Dengarkan seluruh audio sekali tanpa menghentikan. Baru di ulangan kedua, coba tirukan kata per kata mengikuti ritme dan intonasinya. Ini cara paling efektif melatih listening sekaligus speaking.",
    },
    {
      title: "Tidak perlu menangkap setiap kata",
      desc: "Kemampuan listening dibangun bertahap. Yang terpenting adalah menangkap ide utama dan kata kunci — detail akan mengikuti seiring latihan rutin.",
    },
  ],
  triggers: [
    { command: "repeat", desc: "Minta Kak Ara mengulang bacaan atau audio dari awal" },
    { command: "slower", desc: "Minta Kak Ara membacakan lebih pelan untuk bagian yang susah ditangkap" },
    { command: "translate", desc: "Minta terjemahan bagian yang tidak dipahami" },
    { command: "end", desc: "Akhiri sesi dan minta rangkuman poin penting dari audio hari ini" },
  ],
}

export default function PanduanListeningPage() {
  return <PanduanModul config={config} />
}
