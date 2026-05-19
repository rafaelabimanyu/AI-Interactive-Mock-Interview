'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PortfolioBuilder() {
  const [formData, setFormData] = useState({
    name: 'Budi Santoso',
    jurusan: 'Rekayasa Perangkat Lunak (RPL)',
    casualExperience: 'Saya pernah magang di bengkel komputer dekat sekolah selama 2 bulan. Di sana tugas saya membantu merakit PC pesanan pelanggan, menginstal Windows dan driver, serta melayani pelanggan yang ingin servis laptop. Kadang bapak pemilik bengkel sibuk, jadi saya yang mendiagnosis kerusakan sendiri. Saya senang karena dapat pujian dari pelanggan karena ramah dan servisnya cepat.',
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [cvData, setCvData] = useState({
    situation: 'Diberikan tanggung jawab di bengkel komputer untuk merakit pesanan PC pelanggan dan mengelola diagnosis awal kerusakan laptop saat pemilik bengkel berhalangan.',
    task: 'Meningkatkan efisiensi waktu servis laptop dan merakit PC dengan kualitas instalasi sistem operasi yang stabil sesuai pesanan pelanggan.',
    action: 'Melakukan diagnosis sistematis pada kerusakan perangkat keras laptop, menyusun urutan perakitan komponen PC secara efisien, serta menerapkan teknik komunikasi ramah saat melayani keluhan pelanggan.',
    result: 'Berhasil merakit 15+ unit PC tanpa kendala instalasi, mempercepat proses diagnosis awal laptop pelanggan, dan meraih kepuasan pelanggan sebesar 100%.',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptimize = (e) => {
    e.preventDefault();
    setIsOptimizing(true);
    // Mocking API call latency
    setTimeout(() => {
      setIsOptimizing(false);
      setCvData({
        situation: `Ditugaskan mengelola layanan perakitan PC dan penanganan awal diagnosis kerusakan laptop pelanggan di bawah naungan unit kerja/jurusan ${formData.jurusan || 'Siswa SMK'}.`,
        task: 'Mengoptimalkan alur pelayanan perakitan perangkat keras serta meminimalisir keterlambatan diagnosis unit laptop yang akan diservis.',
        action: 'Menerapkan standar operational procedure (SOP) perakitan PC, menginstal konfigurasi OS & driver secara bersih, serta memberikan pelayanan ramah secara langsung kepada klien.',
        result: 'Meningkatkan kecepatan perakitan PC, mempercepat waktu tunggu diagnosis pelanggan, serta membangun reputasi pelayanan prima yang berintegritas.',
      });
    }, 1200);
  };

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
              <Link href="/" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link href="/portfolio" className="text-xs font-semibold text-white hover:text-indigo-300 transition-colors">
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
                <span>Fase 1: Database Ready</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10">
        
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-[family-name:var(--font-outfit)] mb-2">
            AI Portofolio & CV Builder
          </h2>
          <p className="text-slate-400 text-sm">
            Tulis pengalaman Anda apa adanya secara santai. Biarkan AI merestrukturisasi kalimat Anda menjadi standar kompetensi STAR industri.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: Form Input */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <form onSubmit={handleOptimize} className="glass-panel p-6 flex flex-col gap-6 border border-white/5 bg-slate-900/30">
              <div>
                <h3 className="text-base font-bold text-white mb-1">Data Diri & Pengalaman</h3>
                <p className="text-xs text-slate-400">Lengkapi formulir untuk memulai optimalisasi otomatis.</p>
              </div>

              {/* Nama Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold text-slate-300">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass-input" 
                  placeholder="Contoh: Budi Santoso"
                  required
                />
              </div>

              {/* Jurusan Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="jurusan" className="text-xs font-bold text-slate-300">Jurusan / Kompetensi Keahlian</label>
                <input 
                  type="text" 
                  id="jurusan"
                  name="jurusan" 
                  value={formData.jurusan}
                  onChange={handleInputChange}
                  className="glass-input" 
                  placeholder="Contoh: RPL / Akuntansi"
                  required
                />
              </div>

              {/* Textarea Pengalaman Kasual */}
              <div className="flex flex-col gap-2">
                <label htmlFor="casualExperience" className="text-xs font-bold text-slate-300">
                  Ceritakan Pengalaman/Pencapaian Anda secara Santai
                </label>
                <textarea 
                  id="casualExperience"
                  name="casualExperience" 
                  value={formData.casualExperience}
                  onChange={handleInputChange}
                  className="glass-input h-48 resize-none text-xs leading-relaxed" 
                  placeholder="Tuliskan pengalaman Anda secara santai..."
                  required
                />
              </div>

              {/* Button Optimasi AI */}
              <button 
                type="submit"
                disabled={isOptimizing}
                className="glow-pill w-full inline-flex items-center justify-center rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isOptimizing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Merestrukturisasi Pengalaman...
                  </>
                ) : (
                  <>
                    Optimasi CV dengan AI
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Kolom Kanan: Live Preview CV (STAR Format) */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            <div className="glass-panel p-6 flex flex-col gap-6 border border-white/5 bg-slate-900/20 w-full min-h-[500px]">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-base font-bold text-white">Live Preview CV</h3>
                  <p className="text-xs text-slate-400">Restrukturisasi berbasis Standar Wawancara STAR</p>
                </div>
                <div className="flex items-center gap-1.5 rounded bg-indigo-500/10 px-2 py-0.5 text-[9px] font-bold text-indigo-400 border border-indigo-500/20 uppercase">
                  STAR Format
                </div>
              </div>

              {/* CV Sheet Mockup */}
              <div className="flex-1 rounded-xl bg-white p-6 sm:p-8 text-slate-800 shadow-xl border border-slate-200">
                {/* CV Name & Header */}
                <div className="text-center border-b-2 border-slate-200 pb-4 mb-6">
                  <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 uppercase">
                    {formData.name || 'NAMA LENGKAP'}
                  </h4>
                  <p className="text-xs font-bold text-indigo-600 tracking-wide uppercase mt-1">
                    {formData.jurusan || 'JURUSAN / KOMPETENSI'}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Siswa Portofolio Aktif &bull; SMK &amp; SNBT Target</p>
                </div>

                {/* CV Body */}
                <div className="space-y-6 text-left">
                  {/* Summary */}
                  <div>
                    <h5 className="text-[11px] font-extrabold text-indigo-600 tracking-wider uppercase mb-2 border-b border-slate-100 pb-0.5">
                      Ringkasan Profesional
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Lulusan/Siswa proaktif bidang {formData.jurusan || 'Keahlian Terkait'} dengan pengalaman praktis terukur. Terlatih merumuskan dan mengeksekusi penyelesaian masalah secara sistematis menggunakan kerangka kerja STAR di lingkungan kerja nyata.
                    </p>
                  </div>

                  {/* Portfolio STAR Section */}
                  <div>
                    <h5 className="text-[11px] font-extrabold text-indigo-600 tracking-wider uppercase mb-3 border-b border-slate-100 pb-0.5">
                      Pencapaian Kerja / Proyek (Metode STAR)
                    </h5>
                    <div className="space-y-4">
                      
                      {/* Situation */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 flex items-center justify-center h-5 w-10 rounded bg-amber-100 text-[10px] font-extrabold text-amber-700">
                          SIT
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            <span className="font-semibold text-slate-950">Situasi:</span> {cvData.situation}
                          </p>
                        </div>
                      </div>

                      {/* Task */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 flex items-center justify-center h-5 w-10 rounded bg-blue-100 text-[10px] font-extrabold text-blue-700">
                          TSK
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            <span className="font-semibold text-slate-950">Tugas:</span> {cvData.task}
                          </p>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 flex items-center justify-center h-5 w-10 rounded bg-purple-100 text-[10px] font-extrabold text-purple-700">
                          ACT
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            <span className="font-semibold text-slate-950">Tindakan:</span> {cvData.action}
                          </p>
                        </div>
                      </div>

                      {/* Result */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 flex items-center justify-center h-5 w-10 rounded bg-emerald-100 text-[10px] font-extrabold text-emerald-700">
                          RST
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-700 leading-relaxed">
                            <span className="font-semibold text-slate-950">Hasil:</span> {cvData.result}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Unduh Action */}
              <div className="flex justify-end mt-2">
                <button 
                  onClick={() => alert('Fitur unduh PDF akan terintegrasi setelah API AI terhubung penuh!')}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-indigo-500/10 px-5 py-3 text-xs font-bold text-indigo-400 hover:bg-indigo-500/20 transition cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                  Unduh Format PDF
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
