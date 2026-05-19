import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative z-10">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex items-center justify-between w-full py-4 px-6 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-violet-300 bg-clip-text text-transparent font-[family-name:var(--font-outfit)] truncate">
                  INTERVIEW.AI
                </h1>
                <p className="text-[9px] sm:text-[10px] tracking-wider text-indigo-400 font-bold uppercase truncate">SMK & SNBT Edition</p>
              </div>
            </Link>

            {/* Menu Navigasi */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-xs font-semibold text-white hover:text-indigo-300 transition-colors">
                Beranda
              </Link>
              <Link href="/portfolio" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                Portofolio Builder
              </Link>
              <Link href="/interview" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                Simulasi Wawancara
              </Link>
              <span className="text-xs font-semibold text-slate-600 cursor-not-allowed flex items-center gap-1.5">
                Dashboard BK
                <span className="text-[8px] bg-slate-800 text-slate-400 px-1 rounded font-bold uppercase">Locked</span>
              </span>
            </nav>

            {/* Status Badge */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Fase 1: Database Ready</span>
                <span className="inline sm:hidden">Fase 1</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full py-12 flex flex-col gap-16">
        
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-6 pt-12 pb-6 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="flex flex-col gap-6 max-w-2xl w-full">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 border border-violet-500/20 mb-6">
                🚀 Transformasi Portofolio & Karir Siswa
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-[family-name:var(--font-outfit)] text-white">
                Mempersiapkan Siswa Menuju <br />
                <span className="gradient-text-accent">Dunia Industri & Perguruan Tinggi</span>
              </h2>
            </div>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Bantu siswa SMK dan Calon Mahasiswa SNBT menyusun Portofolio berstandar STAR dan melatih kepercayaan diri melalui Simulasi Wawancara Interaktif berbasis kecerdasan buatan secara real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/portfolio" className="glow-pill inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 hover:bg-violet-700 transition cursor-pointer">
                Buat Portofolio STAR
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
              </Link>
              <Link href="/interview" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10 transition cursor-pointer">
                Mulai Simulasi Wawancara
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Visual Widgets for Desktop */}
          <div className="hidden lg:block relative w-96 h-96 float-animation flex-shrink-0">
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
              <p className="text-[10px] text-emerald-400">✅ Lolos Writeria Minimum Industri</p>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="w-full max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-12 flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight font-[family-name:var(--font-outfit)] text-white">
              Fitur Unggulan Utama
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Didesain khusus untuk memenuhi standar kompetensi Bimbingan Konseling dan kebutuhan HRD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Feature 1 */}
            <div className="glass-panel glass-card-interactive p-6 flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5 flex-shrink-0">
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
              <Link href="/portfolio" className="text-xs text-blue-400 font-semibold inline-flex items-center gap-1 mt-4 hover:underline">
                Buka Builder <span>&rarr;</span>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel glass-card-interactive p-6 flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5 flex-shrink-0">
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
              <Link href="/interview" className="text-xs text-violet-400 font-semibold inline-flex items-center gap-1 mt-4 hover:underline">
                Mulai Latihan <span>&rarr;</span>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-6 flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">AI Score Card</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Evaluasi hasil simulasi otomatis berupa nilai kompetensi, analisis kekuatan, dan saran perbaikan langsung dari AI.
                </p>
              </div>
              <span className="text-xs text-slate-500 font-semibold inline-flex items-center gap-1 mt-4">
                Terintegrasi di Simulasi
              </span>
            </div>

            {/* Feature 4 */}
            <div className="glass-panel p-6 flex flex-col justify-between h-[280px]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-2">Dashboard Guru BK</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Panel khusus bagi guru Bimbingan Konseling untuk memantau kemajuan portofolio dan skor simulasi siswa.
                </p>
              </div>
              <span className="text-xs text-slate-500 font-semibold inline-flex items-center gap-1 mt-4">
                Fase Selanjutnya
              </span>
            </div>
          </div>
        </section>

        {/* Database & ORM Setup Status */}
        <section className="w-full max-w-7xl mx-auto mt-6 p-6 rounded-2xl border border-white/10 bg-black/40 overflow-x-auto">
          <div className="min-w-[800px] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 mb-2">
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                📂 Status Konfigurasi Database (Prisma ORM & MySQL)
              </h3>
              <p className="text-slate-400 text-xs">
                Database schema dan relasi entitas telah di-generate dengan sukses. Skema relasi tabel berbaris rapi secara horizontal dan dapat di-scroll:
              </p>
            </div>

            <div className="flex flex-row gap-6 items-start justify-between w-full">
              {/* Table Users */}
              <div className="flex-1 rounded-xl bg-white/5 p-4 border border-white/5 min-w-[200px]">
                <div className="text-indigo-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center text-xs">
                  <span>users</span>
                  <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1 rounded">Primary</span>
                </div>
                <ul className="space-y-1 text-slate-300 text-[11px] font-[family-name:var(--font-mono)]">
                  <li className="py-1">🔑 id: <span className="text-indigo-300">Int (AI)</span></li>
                  <li className="py-1">👤 name: <span className="text-indigo-300">String</span></li>
                  <li className="py-1">📧 email: <span className="text-indigo-300">String (Unique)</span></li>
                  <li className="py-1">🎭 role: <span className="text-amber-400">Enum (siswa, guru_bk)</span></li>
                  <li className="py-1">🎓 jurusan: <span className="text-indigo-300">String?</span></li>
                  <li className="py-1">🎯 target_jalur: <span className="text-amber-400">Enum</span></li>
                </ul>
              </div>

              {/* Table Portfolios */}
              <div className="flex-1 rounded-xl bg-white/5 p-4 border border-white/5 min-w-[200px]">
                <div className="text-blue-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center text-xs">
                  <span>portfolios</span>
                  <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1 rounded">1-to-1</span>
                </div>
                <ul className="space-y-1 text-slate-300 text-[11px] font-[family-name:var(--font-mono)]">
                  <li className="py-1">🔑 id: <span className="text-blue-300">Int (AI)</span></li>
                  <li className="py-1">🔗 user_id: <span className="text-emerald-400">Int (FK &rarr; users)</span></li>
                  <li className="py-1">📄 raw_data: <span className="text-blue-300">Text</span></li>
                  <li className="py-1">⚙️ polished_json: <span className="text-blue-300">Text/JSON</span></li>
                </ul>
              </div>

              {/* Table Interview Sessions */}
              <div className="flex-1 rounded-xl bg-white/5 p-4 border border-white/5 min-w-[200px]">
                <div className="text-violet-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center text-xs">
                  <span>interview_sessions</span>
                  <span className="text-[9px] bg-violet-500/20 text-violet-300 px-1 rounded">1-to-N</span>
                </div>
                <ul className="space-y-1 text-slate-300 text-[11px] font-[family-name:var(--font-mono)]">
                  <li className="py-1">🔑 id: <span className="text-violet-300">Int (AI)</span></li>
                  <li className="py-1">🔗 user_id: <span className="text-emerald-400">Int (FK &rarr; users)</span></li>
                  <li className="py-1">💼 bidang_posisi: <span className="text-violet-300">String</span></li>
                  <li className="py-1">🏆 score_total: <span className="text-violet-300">Int?</span></li>
                  <li className="py-1">💬 feedback_json: <span className="text-violet-300">Text</span></li>
                </ul>
              </div>

              {/* Table Interview Logs */}
              <div className="flex-1 rounded-xl bg-white/5 p-4 border border-white/5 min-w-[200px]">
                <div className="text-pink-400 font-bold border-b border-white/10 pb-2 mb-2 flex justify-between items-center text-xs">
                  <span>interview_logs</span>
                  <span className="text-[9px] bg-pink-500/20 text-pink-300 px-1 rounded">1-to-N</span>
                </div>
                <ul className="space-y-1 text-slate-300 text-[11px] font-[family-name:var(--font-mono)]">
                  <li className="py-1">🔑 id: <span className="text-pink-300">Int (AI)</span></li>
                  <li className="py-1">🔗 session_id: <span className="text-emerald-400">Int (FK &rarr; sessions)</span></li>
                  <li className="py-1">🎙️ speaker: <span className="text-amber-400">Enum (ai, siswa)</span></li>
                  <li className="py-1">📝 text_content: <span className="text-pink-300">Text</span></li>
                  <li className="py-1">🔢 sequence_order: <span className="text-pink-300">Int</span></li>
                </ul>
              </div>
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
