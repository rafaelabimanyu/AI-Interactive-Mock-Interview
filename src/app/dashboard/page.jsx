'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BKDashboard() {
  const [hasMounted, setHasMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJurusan, setFilterJurusan] = useState('Semua');
  const [filterJalur, setFilterJalur] = useState('Semua');

  // Mock data siswa untuk visualisasi BK Dashboard
  const studentDataList = [
    { id: 1, name: 'Budi Santoso', jurusan: 'RPL', jalur: 'Kerja (SMK)', score: 85, status: 'Siap Industri' },
    { id: 2, name: 'Siti Rahma', jurusan: 'Akuntansi', jalur: 'Kuliah (SNBT)', score: 78, status: 'Siap Kuliah' },
    { id: 3, name: 'Adit Prasetyo', jurusan: 'TKJ', jalur: 'Kerja (SMK)', score: 64, status: 'Butuh Bimbingan' },
    { id: 4, name: 'Lani Lestari', jurusan: 'RPL', jalur: 'Kuliah (SNBT)', score: 92, status: 'Siap Kuliah' },
    { id: 5, name: 'Fajar Nugraha', jurusan: 'Multimedia', jalur: 'Kerja (SMK)', score: 71, status: 'Butuh Bimbingan' },
    { id: 6, name: 'Dewi Sartika', jurusan: 'Akuntansi', jalur: 'Kerja (SMK)', score: 80, status: 'Siap Industri' },
    { id: 7, name: 'Rian Hidayat', jurusan: 'TKJ', jalur: 'Kuliah (SNBT)', score: 58, status: 'Butuh Bimbingan' }
  ];

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Hitung stats berdasarkan data
  const totalStudents = studentDataList.length;
  const avgScore = (studentDataList.reduce((acc, curr) => acc + curr.score, 0) / totalStudents).toFixed(1);
  const totalPortfolios = 6; // Mock data portofolio sukses

  // Filter data siswa
  const filteredStudents = studentDataList.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesJurusan = filterJurusan === 'Semua' || student.jurusan === filterJurusan;
    const matchesJalur = filterJalur === 'Semua' || student.jalur.includes(filterJalur);
    return matchesSearch && matchesJurusan && matchesJalur;
  });

  if (!hasMounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-400 text-xs">
        Memuat panel pengawas...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-[family-name:var(--font-jakarta)]">
      
      {/* 1. SIDEBAR NAVIGATION (Left) */}
      <aside className="w-64 border-r border-white/5 bg-slate-950 flex flex-col justify-between flex-shrink-0 hidden md:flex">
        <div className="flex flex-col">
          {/* Logo Brand */}
          <div className="py-6 px-6 border-b border-white/5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                </svg>
              </div>
              <div>
                <h1 className="text-sm font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-violet-300 bg-clip-text text-transparent font-[family-name:var(--font-outfit)]">
                  INTERVIEW.AI
                </h1>
                <p className="text-[8px] tracking-wider text-indigo-400 font-bold uppercase">BK Panel</p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 flex flex-col gap-1">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Main Menu</span>
            <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-indigo-600/10 text-indigo-300 border border-indigo-500/10 px-3 py-2 text-xs font-semibold hover:bg-indigo-600/20 hover:text-white transition">
              📊 Pemantauan Siswa
            </Link>
            <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition">
              🏠 Halaman Utama
            </Link>
            <Link href="/portfolio" className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition">
              📁 Portofolio Builder
            </Link>
            <Link href="/interview" className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition">
              🎙️ Simulasi Wawancara
            </Link>
          </nav>
        </div>

        {/* User Account Info at Bottom */}
        <div className="p-4 border-t border-white/5 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white uppercase shadow-md">
              BK
            </div>
            <div className="min-w-0">
              <h5 className="text-xs font-bold text-white truncate">Drs. H. Mulyadi</h5>
              <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wide mt-0.5">Guru BK / Pengawas</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA (Right) */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 border-b border-white/5 bg-slate-950/60 backdrop-blur-md flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Logo Trigger */}
            <Link href="/" className="flex items-center gap-3 group md:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                </svg>
              </div>
              <h1 className="text-xs font-black text-white">INTERVIEW.AI</h1>
            </Link>
            <h2 className="text-sm font-bold text-white hidden md:block">Panel Pemantauan Karir Siswa</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span>Sesi Pengawasan Aktif</span>
            </span>
          </div>
        </header>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Dashboard Headings */}
          <div>
            <h3 className="text-2xl font-black text-white tracking-tight font-[family-name:var(--font-outfit)] mb-1">
              Dashboard Statistik BK
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Pantau kelulusan siswa, nilai rata-rata wawancara lisan, dan status perakitan portofolio STAR mereka.
            </p>
          </div>

          {/* 2. STATS CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            
            {/* Card 1 */}
            <div className="glass-panel p-5 border border-white/5 bg-slate-900/30 flex flex-col justify-between min-h-[110px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Siswa Terdaftar</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-white font-[family-name:var(--font-outfit)]">{totalStudents}</span>
                <span className="text-xs text-indigo-400 font-bold uppercase">Siswa Aktif</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-5 border border-white/5 bg-slate-900/30 flex flex-col justify-between min-h-[110px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rerata Skor Simulasi</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-white font-[family-name:var(--font-outfit)]">{avgScore}</span>
                <span className="text-xs text-slate-400 font-bold">/ 100</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-5 border border-white/5 bg-slate-900/30 flex flex-col justify-between min-h-[110px]">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Portofolio Terbuat</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-black text-white font-[family-name:var(--font-outfit)]">{totalPortfolios}</span>
                <span className="text-xs text-emerald-400 font-bold uppercase">CV Dioptimasi</span>
              </div>
            </div>

          </div>

          {/* 3. MONITORING TABLE & FILTERS */}
          <div className="glass-panel border border-white/5 bg-slate-900/20 w-full flex flex-col overflow-hidden">
            
            {/* Filters Bar */}
            <div className="p-5 border-b border-white/5 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-slate-900/40">
              <div className="w-full lg:max-w-xs">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari nama siswa..." 
                  className="glass-input text-xs w-full"
                />
              </div>

              <div className="flex flex-wrap gap-3 items-center w-full lg:w-auto">
                {/* Filter Jurusan */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Jurusan:</span>
                  <select 
                    value={filterJurusan}
                    onChange={(e) => setFilterJurusan(e.target.value)}
                    className="bg-slate-950 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Semua">Semua</option>
                    <option value="RPL">RPL</option>
                    <option value="Akuntansi">Akuntansi</option>
                    <option value="TKJ">TKJ</option>
                    <option value="Multimedia">Multimedia</option>
                  </select>
                </div>

                {/* Filter Jalur */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Jalur Target:</span>
                  <select 
                    value={filterJalur}
                    onChange={(e) => setFilterJalur(e.target.value)}
                    className="bg-slate-950 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Semua">Semua</option>
                    <option value="Kerja">Kerja (SMK)</option>
                    <option value="Kuliah">Kuliah (SNBT)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-slate-950/40 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Nama Siswa</th>
                    <th className="py-4 px-6">Jurusan</th>
                    <th className="py-4 px-6">Target Jalur</th>
                    <th className="py-4 px-6 text-center">Skor Terakhir</th>
                    <th className="py-4 px-6">Status Kelayakan</th>
                    <th className="py-4 px-6 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 font-bold text-white">{student.name}</td>
                        <td className="py-4 px-6 text-slate-300 font-semibold">{student.jurusan}</td>
                        <td className="py-4 px-6 text-slate-400">{student.jalur}</td>
                        <td className="py-4 px-6 text-center">
                          <span className={`inline-flex h-7 w-10 items-center justify-center rounded-md font-bold ${
                            student.score >= 75 
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            {student.score}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border ${
                            student.score >= 75
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : 'bg-red-500/10 text-red-400 border-red-500/20'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button 
                            onClick={() => alert(`Membuka berkas rekap evaluasi untuk siswa ${student.name}.`)}
                            className="inline-flex items-center justify-center rounded bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 transition border border-indigo-500/10 cursor-pointer"
                          >
                            Lihat Detail
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-12 text-center text-slate-500 italic">
                        Tidak ada data siswa yang cocok dengan filter pencarian.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer / Counter */}
            <div className="p-4 border-t border-white/5 bg-slate-950/20 text-[10px] text-slate-500 flex justify-between items-center">
              <span>Menampilkan {filteredStudents.length} dari {studentDataList.length} siswa terdaftar.</span>
              <Link href="/" className="text-indigo-400 hover:underline">Kembali ke Beranda &rarr;</Link>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
