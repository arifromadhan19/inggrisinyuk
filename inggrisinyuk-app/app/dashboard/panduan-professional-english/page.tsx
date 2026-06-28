import { PanduanModul } from "@/components/panduan-modul"
import type { PanduanModulConfig } from "@/components/panduan-modul"

const config: PanduanModulConfig = {
  emoji: "💼",
  name: "Professional English",
  tagline: "Bahasa Inggris dunia kerja — dari email harian hingga presentasi",
  moduleRoute: "/dashboard/professional",
  tips: [
    {
      title: "Langsung praktikkan ke pekerjaan nyata",
      desc: "Setiap topik bisa langsung diterapkan hari ini — setelah sesi Email, coba tulis email asli ke kolega kamu dalam Bahasa Inggris. Atau simulasikan meeting nyata bersama Kak Ara.",
    },
    {
      title: "Paste dokumen nyata untuk minta review",
      desc: "Copy email, pesan Slack, atau laporan kerja kamu ke ChatGPT dan minta Kak Ara memberikan feedback. Ini cara paling efektif karena belajar dari konteks pekerjaanmu sendiri.",
    },
    {
      title: "Perhatikan perbedaan tone formal dan informal",
      desc: "Kak Ara akan menunjukkan kapan harus formal, semi-formal, atau casual di konteks profesional. Ini salah satu skill paling penting di lingkungan kerja internasional.",
    },
    {
      title: "Catat template frasa profesional favoritmu",
      desc: "Frasa-frasa profesional yang diberikan Kak Ara bisa langsung disimpan sebagai template di notes atau Notion — kamu tidak perlu berpikir dari nol setiap kali menulis komunikasi profesional.",
    },
  ],
  triggers: [
    { command: "review this", desc: "Paste teks dan minta Kak Ara memberikan feedback dan saran perbaikan" },
    { command: "example", desc: "Minta contoh email, kalimat, atau frasa profesional untuk situasi tertentu" },
    { command: "formal version", desc: "Minta versi yang lebih formal dari kalimat atau pesan yang sudah kamu tulis" },
    { command: "end", desc: "Akhiri sesi dan minta rangkuman template frasa yang sudah dipelajari" },
  ],
}

export default function PanduanProfessionalEnglishPage() {
  return <PanduanModul config={config} />
}
