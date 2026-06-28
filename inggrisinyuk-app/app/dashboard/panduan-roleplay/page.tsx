import { PanduanModul } from "@/components/panduan-modul"
import type { PanduanModulConfig } from "@/components/panduan-modul"

const config: PanduanModulConfig = {
  emoji: "🎭",
  name: "Roleplay Practice",
  tagline: "Simulasi percakapan nyata — latihan situasi sebelum menghadapinya langsung",
  moduleRoute: "/dashboard/roleplay",
  tips: [
    {
      title: "Masuk ke skenario sepenuhnya",
      desc: "Kak Ara akan memainkan peran sesuai skenario — barista, rekan kerja, teman baru, resepsionis hotel, dll. Kamu cukup balas seperti situasi nyata, bukan seperti sedang 'belajar'.",
    },
    {
      title: "Stay in character selama sesi berlangsung",
      desc: "Semakin natural kamu menjawab sesuai skenario, semakin besar manfaat latihannya. Kalau bingung harus bilang apa, coba tebak dulu sebelum minta bantuan.",
    },
    {
      title: "Minta feedback di akhir roleplay",
      desc: "Setelah skenario selesai, minta Kak Ara untuk me-review percakapanmu — apa yang sudah bagus, apa yang perlu diperbaiki, dan frasa alternatif yang lebih natural.",
    },
    {
      title: "Berani salah — itu bagian dari latihannya",
      desc: "Roleplay paling efektif justru saat kamu berani mencoba dan kadang salah. Lebih baik salah di sini bersama Kak Ara daripada canggung di situasi nyata.",
    },
  ],
  triggers: [
    { command: "start roleplay", desc: "Mulai skenario roleplay — Kak Ara langsung masuk ke karakter" },
    { command: "pause", desc: "Keluar sementara dari karakter untuk bertanya atau minta penjelasan" },
    { command: "feedback", desc: "Minta feedback dan review percakapan setelah roleplay selesai" },
    { command: "end", desc: "Akhiri sesi roleplay dan kembali ke mode biasa" },
  ],
}

export default function PanduanRoleplayPage() {
  return <PanduanModul config={config} />
}
