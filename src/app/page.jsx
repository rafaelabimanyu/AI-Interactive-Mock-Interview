import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-violet-300 bg-clip-text text-transparent font-[family-name:var(--font-outfit)]">
                  INTERVIEW.AI
                </h1>
                <p className="text-[10px] tracking-wider text-indigo-400 font-bold uppercase">SMK & SNBT Edition</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Fase 1: Database Ready
              </span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/5 transition"
              >
                Dokumentasi API
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center md:text-left md:flex md:items-center md:justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 border border-violet-500/20 mb-6">
              🚀 Transformasi Portofolio & Karir Siswa
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight font-[family-name:var(--font-outfit)] mb-6">
              Mempersiapkan Siswa Menuju <br />
              <span className="gradient-text-accent">Dunia Industri & Perguruan Tinggi</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Bantu siswa SMK dan Calon Mahasiswa SNBT menyusun Portofolio berstandar STAR dan melatih kepercayaan diri melalui Simulasi Wawancara Interaktif berbasis kecerdasan buatan secara real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="glow-pill inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 hover:bg-violet-700 transition cursor-pointer">
                Mulai Simulasi Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10 transition cursor-pointer">
                Buat Portofolio STAR
              </button>
            </div>
          </div>

          <div className="hidden md:block relative w-96 h-96 float-animation">
            {/* Visual Glassmorphic Widget Mockups */}
            <div className="absolute top-4 left-4 w-80 p-6 glass-panel border border-white/10 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-semibold text-slate-300">Live Voice Analyzer</span>
                </div>
                <span className="text-[10px] text-indigo-400 font-bold">SPEECH API ACTIVE</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full"></div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-xs text-slate-400">
                <span>Confidence: 89%</span>
                <span>Clarity: Excellent</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 w-72 p-5 glass-panel border border-violet-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                  ⚡
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">AI Score Card</h4>
                  <p className="text-[9px] text-slate-400">SMK Kerja Target</p>
                </div>
              </div>
              <div className="text-2xl font-black text-white mb-1">85<span className="text-xs text-slate-400 font-normal">/100</span></div>
              <p className="text-[10px] text-emerald-400">✅ Lolos Kriteria Minimum Industri</p>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-outfit)]">Fitur Unggulan Utama</h3>
            <p className="text-slate-400 text-sm mt-2">Didesain khusus untuk memenuhi standar kompetensi Bimbingan Konseling dan kebutuhan HRD.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1: Portfolio/CV Builder */}
            <div className="glass-panel glass-card-interactive p-6 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">Portfolio/CV Builder</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mengubah input kasual teks menjadi format profesional formal (JSON/STAR) standar industri yang siap ekspor ke PDF.
                </p>
              </div>
              <span className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1 mt-4">
                Buka Builder <span>&rarr;</span>
              </span>
            </div>

            {/* Feature 2: Voice Mock-Interview */}
            <div className="glass-panel glass-card-interactive p-6 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">Voice Mock-Interview</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Latihan wawancara interaktif berbasis suara menggunakan Web Speech API browser secara real-time.
                </p>
              </div>
              <span className="text-xs text-violet-400 font-semibold inline-flex items-center gap-1 mt-4">
                Mulai Latihan <span>&rarr;</span>
              </span>
            </div>

            {/* Feature 3: AI Score Card */}
            <div className="glass-panel glass-card-interactive p-6 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">AI Score Card</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Evaluasi hasil simulasi otomatis berupa nilai kompetensi, analisis kekuatan, dan saran perbaikan.
                </p>
              </div>
              <span className="text-xs text-pink-400 font-semibold inline-flex items-center gap-1 mt-4">
                Lihat Hasil <span>&rarr;</span>
              </span>
            </div>

            {/* Feature 4: Dashboard Guru BK */}
            <div className="glass-panel glass-card-interactive p-6 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">Dashboard Guru BK</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Panel pemantauan performa dan perkembangan portofolio serta nilai simulasi wawancara siswa.
                </p>
              </div>
              <span className="text-xs text-amber-400 font-semibold inline-flex items-center gap-1 mt-4">
                Monitoring Panel <span>&rarr;</span>
              </span>
            </div>

          </div>
        </section>

        {/* Database & ORM Setup Status (Demonstration of Phase 1 Success) */}
        <section className="glass-panel p-8 mb-12 border border-indigo-500/10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl"></div>
          
          <h3 className="text-xl font-bold tracking-tight mb-4 font-[family-name:var(--font-outfit)] flex items-center gap-2">
            📂 Status Konfigurasi Database (Prisma ORM & MySQL)
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Database schema dan relasi entitas telah di-generate dengan sukses. Berikut adalah visualisasi skema relasi tabel yang telah dibuat dalam format modern:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-[family-name:var(--font-mono)]">
            
            {/* Table Users */}
            <div className="rounded-lg bg-white/5 p-4 border border-white/5">
              <div className="text-indigo-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center">
                <span>users (Table)</span>
                <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1 rounded">Primary</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>🔑 id: <span className="text-indigo-300">Int (AI)</span></li>
                <li>👤 name: <span className="text-indigo-300">String</span></li>
                <li>📧 email: <span className="text-indigo-300">String (Unique)</span></li>
                <li>🎭 role: <span className="text-amber-400">Enum (siswa, guru_bk)</span></li>
                <li>🎓 jurusan: <span className="text-indigo-300">String?</span></li>
                <li>🎯 target_jalur: <span className="text-amber-400">Enum</span></li>
              </ul>
            </div>

            {/* Table Portfolios */}
            <div className="rounded-lg bg-white/5 p-4 border border-white/5">
              <div className="text-blue-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center">
                <span>portfolios (Table)</span>
                <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1 rounded">1-to-1</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>🔑 id: <span className="text-blue-300">Int (AI)</span></li>
                <li>🔗 user_id: <span className="text-emerald-400">Int (FK &rarr; users)</span></li>
                <li>📄 raw_data: <span className="text-blue-300">Text</span></li>
                <li>⚙️ polished_json: <span className="text-blue-300">Text/JSON</span></li>
              </ul>
            </div>

            {/* Table Interview Sessions */}
            <div className="rounded-lg bg-white/5 p-4 border border-white/5">
              <div className="text-violet-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center">
                <span>interview_sessions</span>
                <span className="text-[9px] bg-violet-500/20 text-violet-300 px-1 rounded">1-to-N</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>🔑 id: <span className="text-violet-300">Int (AI)</span></li>
                <li>🔗 user_id: <span className="text-emerald-400">Int (FK &rarr; users)</span></li>
                <li>💼 bidang_posisi: <span className="text-violet-300">String</span></li>
                <li>🏆 score_total: <span className="text-violet-300">Int?</span></li>
                <li>💬 feedback_json: <span className="text-violet-300">Text</span></li>
              </ul>
            </div>

            {/* Table Interview Logs */}
            <div className="rounded-lg bg-white/5 p-4 border border-white/5">
              <div className="text-pink-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center">
                <span>interview_logs</span>
                <span className="text-[9px] bg-pink-500/20 text-pink-300 px-1 rounded">1-to-N</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                <li>🔑 id: <span className="text-pink-300">Int (AI)</span></li>
                <li>🔗 session_id: <span className="text-emerald-400">Int (FK &rarr; sessions)</span></li>
                <li>🎙️ speaker: <span className="text-amber-400">Enum (ai, siswa)</span></li>
                <li>📝 text_content: <span className="text-pink-300">Text</span></li>
                <li>🔢 sequence_order: <span className="text-pink-300">Int</span></li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 bg-slate-950/20 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 INTERVIEW.AI. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Powered by Next.js 15 & Prisma ORM</span>
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
            <span className="text-indigo-400">Ready for Gemini Integration</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
