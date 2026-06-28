import { PanduanModul } from "@/components/panduan-modul"
import type { PanduanModulConfig } from "@/components/panduan-modul"

const config: PanduanModulConfig = {
  emoji: "✏️",
  name: "Grammar",
  tagline: "Kuasai tata bahasa lewat pattern — tanpa menghafal aturan",
  moduleRoute: "/dashboard/grammar",
  tips: [
    {
      title: "Rasakan polanya, jangan hafalkan definisinya",
      desc: "Kak Ara memperlihatkan pola kalimat yang berulang agar kamu merasakan cara kerjanya secara intuitif — sama seperti cara anak kecil belajar bahasa pertamanya.",
    },
    {
      title: "Satu topik = satu konsep fokus",
      desc: "Setiap sesi hanya membahas satu konsep grammar. Tidak ada campur aduk topik dalam satu hari — ini menghindari kebingungan dan membuat konsep lebih mudah menempel.",
    },
    {
      title: "Koreksi real-time tanpa ceramah panjang",
      desc: "Setiap kali kamu salah grammar saat latihan, Kak Ara langsung mengoreksi dengan penjelasan singkat dan padat — bukan ceramah panjang yang justru bikin pusing.",
    },
    {
      title: "Bebas ulang topik yang belum lancar",
      desc: "Kalau ada konsep yang masih terasa membingungkan, kembali ke Day itu kapan saja. Grammar butuh repetisi — wajar kalau satu kali sesi belum cukup.",
    },
  ],
  triggers: [
    { command: "example", desc: "Minta contoh kalimat tambahan untuk konsep yang sedang dipelajari" },
    { command: "quiz", desc: "Minta soal latihan untuk menguji pemahaman" },
    { command: "explain again", desc: "Minta penjelasan ulang dengan pendekatan atau analogi yang berbeda" },
    { command: "end", desc: "Akhiri sesi dan minta ringkasan konsep yang sudah dipelajari" },
  ],
}

export default function PanduanGrammarPage() {
  return <PanduanModul config={config} />
}
