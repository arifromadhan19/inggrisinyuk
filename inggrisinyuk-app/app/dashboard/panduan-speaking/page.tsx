import { PanduanModul } from "@/components/panduan-modul"
import type { PanduanModulConfig } from "@/components/panduan-modul"

const config: PanduanModulConfig = {
  emoji: "🎙️",
  name: "Speaking",
  tagline: "Latihan bicara langsung dengan AI coach — tanpa takut salah",
  moduleRoute: "/dashboard/speaking",
  tips: [
    {
      title: "Aktifkan Voice Mode di ChatGPT",
      desc: "Tap ikon headphone di sudut kanan bawah ChatGPT untuk bisa bicara langsung dengan Kak Ara. Ini pengalaman speaking paling natural — kamu berbicara, Kak Ara merespons dengan suara.",
    },
    {
      title: "Tidak perlu sempurna — yang penting berani",
      desc: "Kak Ara dirancang sabar dan positif. Salah ucap atau salah grammar tidak akan dipermalukan — justru dikoreksi dengan cara yang membangun. Kamu lebih baik salah di sini daripada di situasi nyata.",
    },
    {
      title: "Gunakan headphone atau earphone",
      desc: "Suara Kak Ara jadi lebih jelas dan kamu lebih fokus mendengar feedback. Ini juga mengurangi gangguan sekitar saat sesi speaking berlangsung.",
    },
    {
      title: "Rekam dirimu sesekali untuk ukur progress",
      desc: "Coba rekam satu percakapan per minggu dan dengarkan kembali. Kamu akan merasakan sendiri perkembangan cara bicaramu dari waktu ke waktu.",
    },
  ],
  triggers: [
    { command: "Let's start speaking!", desc: "Mulai sesi speaking aktif bersama Kak Ara" },
    { command: "How to say...", desc: "Tanya cara mengucapkan atau mengekspresikan sesuatu dalam Bahasa Inggris" },
    { command: "pause", desc: "Jeda sesi sementara untuk istirahat atau bertanya di luar karakter" },
    { command: "end", desc: "Akhiri sesi dan minta feedback keseluruhan dari Kak Ara" },
  ],
}

export default function PanduanSpeakingPage() {
  return <PanduanModul config={config} />
}
