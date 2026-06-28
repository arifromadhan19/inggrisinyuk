import { PanduanModul } from "@/components/panduan-modul"
import type { PanduanModulConfig } from "@/components/panduan-modul"

const config: PanduanModulConfig = {
  emoji: "⭐",
  name: "Latihan Bebas",
  tagline: "3 sesi bebas bersama Kak Ara — latihan apa saja, kapan saja",
  moduleRoute: "/dashboard",
  tips: [
    {
      title: "Pilih topik yang benar-benar relevan denganmu",
      desc: "Tidak ada batasan topik — minta koreksi tulisanmu, latihan percakapan bebas, bahas topik yang sedang kamu hadapi di pekerjaan atau kehidupan sehari-hari. Semakin relevan, semakin efektif.",
    },
    {
      title: "Ceritakan tentang dirimu dalam Bahasa Inggris",
      desc: "Sesi ini paling bermanfaat saat kamu berbicara tentang hal yang benar-benar kamu alami. Kak Ara akan membantumu mengekspresikan pengalaman, pikiran, dan ceritamu dengan Bahasa Inggris yang natural.",
    },
    {
      title: "Sambungkan dengan modul yang sedang dipelajari",
      desc: "Sedang belajar Grammar topik passive voice? Atau baru selesai Vocabulary tentang bisnis? Gunakan Latihan Bebas untuk memperdalam dan mempraktikkan apa yang baru dipelajari di modul lain.",
    },
    {
      title: "Fokuskan pada kelemahanmu yang paling spesifik",
      desc: "Identifikasi 1 hal yang paling susah bagimu — entah itu pronunciation, grammar tertentu, atau rasa percaya diri bicara — lalu fokuskan 1 sesi Latihan Bebas khusus untuk hal itu.",
    },
  ],
  triggers: [
    { command: "Let's practice speaking", desc: "Mulai sesi percakapan bebas dengan topik pilihanmu" },
    { command: "Can you correct my writing?", desc: "Paste tulisanmu dan minta Kak Ara memberikan koreksi dan saran" },
    { command: "Teach me about...", desc: "Minta Kak Ara menjelaskan topik Bahasa Inggris apapun yang ingin kamu pelajari" },
    { command: "end", desc: "Akhiri sesi dan minta ringkasan apa yang sudah dilatih hari ini" },
  ],
}

export default function PanduanLatihanBebasPage() {
  return <PanduanModul config={config} />
}
