import { PanduanModul } from "@/components/panduan-modul"
import type { PanduanModulConfig } from "@/components/panduan-modul"

const config: PanduanModulConfig = {
  emoji: "📖",
  name: "Vocabulary",
  tagline: "Kuasai kosakata fungsional lewat konteks nyata — bukan hafalan mati",
  moduleRoute: "/dashboard/vocabulary",
  tips: [
    {
      title: "Sistem BOW: 15 kata kurated per sesi",
      desc: "Kak Ara memberikan 15 kata yang dipilih dari konteks percakapan nyata — bukan kamus acak. Setiap kata muncul lengkap dengan contoh kalimat dan situasi pakainya.",
    },
    {
      title: "Pahami konteks, jangan hafalkan",
      desc: "Kata yang dipelajari lewat cerita dan situasi nyata jauh lebih mudah diingat daripada hafalan daftar. Fokus pada 'kapan dan bagaimana kata ini dipakai', bukan definisinya.",
    },
    {
      title: "Manfaatkan Frasa Siap Pakai",
      desc: "Di akhir setiap topik, Kak Ara memberikan frasa langsung pakai — kalimat yang bisa langsung kamu gunakan dalam percakapan hari ini tanpa perlu banyak modifikasi.",
    },
    {
      title: "Ulangi topik yang kata-katanya sering lupa",
      desc: "Tidak ada sistem lock — kamu bebas kembali ke Day manapun untuk mengulang. Repetisi spasi (spaced repetition) terjadi secara alami saat kamu kembali ke topik lama.",
    },
  ],
  triggers: [
    { command: "clue", desc: "Minta petunjuk jawaban saat latihan tanpa langsung diberi jawabannya" },
    { command: "translate", desc: "Minta terjemahan kata atau frasa yang belum dipahami" },
    { command: "example", desc: "Minta contoh kalimat tambahan menggunakan kata yang sedang dipelajari" },
    { command: "end", desc: "Akhiri sesi dan minta rangkuman kata-kata yang sudah dipelajari hari ini" },
  ],
}

export default function PanduanVocabPage() {
  return <PanduanModul config={config} />
}
