# INTERVIEW.AI (SMK & SNBT Edition) 🚀

**INTERVIEW.AI** adalah platform optimalisasi portofolio CV dan simulasi wawancara interaktif berbasis suara menggunakan kecerdasan buatan (Gemini AI). Aplikasi ini dirancang khusus untuk mempermudah siswa SMK (target dunia kerja/industri) dan calon mahasiswa (target jalur SNBT/perguruan tinggi) dalam mempersiapkan karir akademis maupun profesional mereka.

---

## 🌟 Fitur Utama

- **Fase 1: Inisialisasi Database Ready**  
  Arsitektur database relasional MySQL yang siap menampung data user, transkrip wawancara, dan data portofolio menggunakan **Prisma ORM**.
- **Fase 2: Integrasi Backend API & Gemini SDK**  
  Endpoint API internal `/api/ai` yang terintegrasi secara asinkron dengan SDK Resmi `@google/genai` menggunakan model super cepat `gemini-2.5-flash`.
- **Fase 3: Struktur UI/UX & Routing Frontend**  
  Desain premium dengan *glassmorphism*, skema warna indigo-violet, navbar lengket, dan navigasi lintas halaman Next.js.
- **Fase 4: AI Portofolio & CV Builder**  
  Mengubah masukan kasual/pengalaman harian siswa menjadi resume berstandar industri dengan format **STAR (Situation, Task, Action, Result)** secara otomatis.
- **Fase 5: Simulasi Wawancara Berbasis Suara**  
  Simulasi wawancara interaktif menggunakan **Web Speech API** (`SpeechRecognition`) bahasa Indonesia (`id-ID`) lengkap dengan visualisasi gelombang suara.
- **Fase 6: Evaluasi Penilaian Otomatis (AI Score Card)**  
  Menilai rekaman wawancara secara otomatis untuk menghasilkan skor total numerik, indikator status kelolosan, daftar kekuatan utama, serta saran perbaikan.
- **Fase 7: Dashboard Guru BK / Pengawas**  
  Panel khusus pengawas untuk memantau nilai rata-rata simulasi, status portofolio, pencarian nama siswa, serta filter kompetensi keahlian dan target karir.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **ORM**: [Prisma ORM](https://www.prisma.io/)
- **Database**: MySQL
- **AI Engine**: [Google Gemini SDK](https://github.com/google/generative-ai-js) (`@google/genai` dengan model `gemini-2.5-flash`)
- **Web API**: Web Speech API (`webkitSpeechRecognition` / `SpeechRecognition`)

---

## 🚀 Panduan Instalasi Lokal

### Prerequisites
Pastikan perangkat Anda sudah terinstal:
- [Node.js](https://nodejs.org/) (versi 18+)
- Layanan database [MySQL](https://www.mysql.com/) aktif

### Langkah 1: Kloning Repositori & Instal Dependensi
Masuk ke direktori proyek dan jalankan perintah berikut:
```bash
npm install
```

### Langkah 2: Setup Environment Variables (`.env`)
Buat file `.env` di root folder proyek Anda (salin dari `.env.example`) dan sesuaikan nilainya:
```env
# Koneksi Database MySQL
DATABASE_URL="mysql://username:password@localhost:3306/interview_ai"

# Google Gemini API Key
GEMINI_API_KEY="AIzaSyYourGeminiApiKeyHere..."
```

### Langkah 3: Inisialisasi Database (Prisma Migration)
Jalankan sinkronisasi skema database relasional MySQL ke server lokal Anda menggunakan Prisma CLI:
```bash
npx prisma db push
```

---

## 💻 Cara Menjalankan Aplikasi

Jalankan dev server Next.js 15 dengan Turbopack untuk performa kompilasi yang instan:
```bash
npm run dev
```

Buka peramban browser Anda di:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📂 Struktur Dokumentasi Tambahan

Untuk mempelajari seluk-beluk teknis platform ini secara mendalam, silakan baca dokumentasi berikut:
1. [Arsitektur & Alur Data](docs/ARCHITECTURE.md) - Penjelasan struktur direktori Next.js dan diagram alur data.
2. [Spesifikasi Database](docs/DATABASE.md) - Dokumentasi skema relasional tabel dan relasi Prisma.
3. [Spesifikasi API AI](docs/API_SPECIFICATION.md) - Panduan endpoint `/api/ai` POST payload.
