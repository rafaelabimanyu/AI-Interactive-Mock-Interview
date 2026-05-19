'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MockInterview() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [interviewLogs, setInterviewLogs] = useState([]);
  const [customAnswer, setCustomAnswer] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  // States untuk Evaluasi Akhir
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const recognitionRef = useRef(null);

  const interviewQuestions = [
    {
      id: 1,
      section: 'Kerja Sama Tim',
      text: 'Bagaimana cara Anda menyikapi perbedaan pendapat saat bekerja dalam tim di sekolah atau tempat magang? Berikan contoh situasi nyata yang pernah Anda hadapi.'
    },
    {
      id: 2,
      section: 'Penyelesaian Masalah',
      text: 'Bisa Anda ceritakan masalah tersulit yang pernah Anda hadapi selama merancang proyek sekolah atau saat magang, dan langkah konkret apa yang Anda ambil untuk menyelesaikannya?'
    },
    {
      id: 3,
      section: 'Motivasi & Kontribusi',
      text: 'Apa motivasi terbesar Anda untuk melamar di posisi ini, dan bagaimana kompetensi jurusan Anda di sekolah dapat berkontribusi nyata pada produktivitas tim kami?'
    }
  ];

  // Inisialisasi Web Speech API di Client
  useEffect(() => {
    setHasMounted(true);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'id-ID';

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        setTranscript(finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech Recognition Error:', event.error);
      if (event.error === 'not-allowed') {
        alert('Akses mikrofon ditolak. Harap izinkan akses mikrofon di browser Anda.');
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      try {
        setTranscript('');
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        setIsListening(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSubmitAnswer = async () => {
    if (isListening) {
      stopListening();
    }

    const finalAnswerText = showManualInput ? customAnswer : transcript;

    if (!finalAnswerText.trim()) {
      alert('Tolong berikan jawaban Anda terlebih dahulu melalui suara atau ketikan manual.');
      return;
    }

    const questionText = interviewQuestions[currentQuestionIndex].text;
    const newLogs = [
      ...interviewLogs,
      { role: 'ai', text: questionText },
      { role: 'siswa', text: finalAnswerText }
    ];

    setInterviewLogs(newLogs);
    setTranscript('');
    setCustomAnswer('');

    if (currentQuestionIndex < interviewQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Sesi Wawancara Selesai -> Panggil Evaluasi AI
      setIsEvaluating(true);
      setErrorMsg('');
      try {
        const systemInstruction = 
          "Kamu adalah seorang HRD professional dan penguji simulasi wawancara kerja. Analisis riwayat pertanyaan dan jawaban wawancara siswa berikut. Berikan penilaian objektif dalam format JSON murni dengan key: 'score_total' (integer 1-100), 'status' (string: Lolos / Belum Lolos), 'kekuatan' (array of strings), dan 'saran_perbaikan' (array of strings). Jangan berikan teks markdown selain JSON.";

        const promptText = `Riwayat Tanya Jawab Wawancara:\n${newLogs.map(l => `${l.role === 'ai' ? 'Pewawancara' : 'Siswa'}: ${l.text}`).join('\n')}`;

        const res = await fetch('/api/ai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: promptText,
            systemInstruction,
            responseMimeType: 'application/json',
            temperature: 0.3,
          }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.error || 'Gagal menghubungi server penilaian AI.');
        }

        const parsedScore = JSON.parse(data.text);
        setEvaluationResult({
          score_total: parsedScore.score_total || 0,
          status: parsedScore.status || 'Belum Lolos',
          kekuatan: Array.isArray(parsedScore.kekuatan) ? parsedScore.kekuatan : [],
          saran_perbaikan: Array.isArray(parsedScore.saran_perbaikan) ? parsedScore.saran_perbaikan : [],
        });
      } catch (err) {
        console.error(err);
        setErrorMsg(err.message || 'Terjadi kesalahan saat memproses evaluasi wawancara.');
      } finally {
        setIsEvaluating(false);
      }
    }
  };

  const handleResetSimulation = () => {
    setCurrentQuestionIndex(0);
    setTranscript('');
    setInterviewLogs([]);
    setCustomAnswer('');
    setEvaluationResult(null);
    setErrorMsg('');
    setIsListening(false);
  };

  if (!hasMounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-400 text-xs">
        Memuat antarmuka simulasi...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
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
              <Link href="/portfolio" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                Portofolio Builder
              </Link>
              <Link href="/interview" className="text-xs font-semibold text-white hover:text-indigo-300 transition-colors">
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
                <span>Fase 6: Evaluasi Aktif</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-10">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-[family-name:var(--font-outfit)] mb-2">
            Simulasi Wawancara Kerja & Beasiswa
          </h2>
          <p className="text-slate-400 text-sm">
            Latih kelancaran berbicara Anda dengan simulator interaktif. Jawab pertanyaan pewawancara AI secara lisan.
          </p>
        </div>

        {/* Cek jika hasil evaluasi sudah keluar */}
        {evaluationResult ? (
          /* AI Score Card Component */
          <div className="glass-panel p-8 border border-white/10 bg-slate-900/40 rounded-2xl w-full max-w-4xl mx-auto shadow-2xl flex flex-col gap-8 animate-fadeIn">
            
            {/* Header Score Card */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-outfit)]">AI Evaluation Score Card</h3>
                <p className="text-xs text-slate-400">Analisis kompetensi objektif berbasis pemrosesan bahasa alami AI.</p>
              </div>
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider border ${
                evaluationResult.score_total >= 75 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              }`}>
                {evaluationResult.status}
              </span>
            </div>

            {/* Score Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Circular Score display */}
              <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                <div className={`relative flex h-36 w-36 items-center justify-center rounded-full border-4 shadow-xl ${
                  evaluationResult.score_total >= 75 
                    ? 'border-emerald-500 shadow-emerald-500/10 bg-emerald-500/5' 
                    : 'border-amber-500 shadow-amber-500/10 bg-amber-500/5'
                }`}>
                  <div className="text-center">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                      {evaluationResult.score_total}
                    </span>
                    <span className="text-slate-400 text-xs block font-bold mt-1">Skor Total</span>
                  </div>
                </div>
              </div>

              {/* Strengths & Improvements */}
              <div className="md:col-span-8 flex flex-col gap-6">
                {/* Kekuatan */}
                <div>
                  <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Kekuatan Utama Anda
                  </h4>
                  <ul className="space-y-2">
                    {evaluationResult.kekuatan.map((k, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-500 font-bold flex-shrink-0">&bull;</span>
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Saran Perbaikan */}
                <div>
                  <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                      <line x1="9" x2="15" y1="18" y2="18"/>
                      <line x1="10" x2="14" y1="22" y2="22"/>
                    </svg>
                    Saran Perbaikan Penampilan
                  </h4>
                  <ul className="space-y-2">
                    {evaluationResult.saran_perbaikan.map((s, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-amber-500 font-bold flex-shrink-0">&bull;</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end border-t border-white/5 pt-6 mt-2">
              <button 
                onClick={() => alert('Hasil evaluasi berhasil disimpan ke Dashboard BK!')}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-indigo-500/10 px-5 py-3 text-xs font-bold text-indigo-400 hover:bg-indigo-500/20 transition cursor-pointer"
              >
                Simpan Hasil Evaluasi
              </button>
              <button 
                onClick={handleResetSimulation}
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-xs font-bold text-white hover:bg-indigo-700 transition cursor-pointer"
              >
                Coba Simulasi Lagi
              </button>
            </div>

          </div>
        ) : (
          /* Interview Arena & Controls Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Kolom Kiri: Conference Arena (lg:col-span-8) */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              {/* Zoom-like Mock Screen or Loading screen */}
              {isEvaluating ? (
                /* Evaluation Loading State */
                <div className="glass-panel border border-white/10 bg-slate-950/80 relative aspect-video flex flex-col items-center justify-center rounded-2xl w-full shadow-2xl animate-pulse">
                  <div className="flex flex-col items-center gap-4 text-center max-w-sm px-6">
                    <svg className="animate-spin h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Menganalisis Jawaban Anda...</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Kecerdasan buatan sedang melakukan ekstraksi transkrip dan memetakan nilai kompetensi STAR Anda.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Conference Room Screen */
                <div className="glass-panel overflow-hidden border border-white/10 bg-slate-950/80 relative aspect-video flex flex-col items-center justify-center rounded-2xl w-full shadow-2xl">
                  
                  {/* Badges Overlays */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-red-600/90 text-[10px] font-black text-white px-2 py-0.5 rounded border border-red-500/30 uppercase tracking-widest">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                      AI Interviewer (Online)
                    </span>
                    <span className="inline-flex items-center gap-1 bg-slate-900/80 text-[10px] font-semibold text-slate-300 px-2 py-0.5 rounded border border-white/5">
                      🎥 720p HD
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-slate-900/80 text-[10px] font-bold text-slate-300 px-2.5 py-1 rounded border border-white/5 font-mono">
                      🔴 LIVE RECORDING
                    </span>
                  </div>

                  {/* AI Interviewer Avatar Feed */}
                  <div className="flex flex-col items-center justify-center gap-4 text-center mt-6">
                    <div className="relative">
                      {/* Glowing Rings on Voice Listening */}
                      <div className={`absolute inset-0 rounded-full bg-indigo-500/30 blur-md transition-all duration-700 ${isListening ? 'scale-125 opacity-100 animate-pulse' : 'scale-95 opacity-50'}`} />
                      <div className={`relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-violet-600 to-pink-500 text-white shadow-xl transition-all duration-350 ${isListening ? 'scale-105 ring-4 ring-indigo-500/20' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isListening ? 'animate-bounce' : 'animate-pulse'}>
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">Pewawancara Utama (AI)</h4>
                      <p className="text-[10px] text-indigo-400 uppercase tracking-wider font-bold">
                        {isListening ? 'Sedang mendengarkan jawaban Anda...' : 'Gemini 2.5 Flash Engine'}
                      </p>
                    </div>
                  </div>

                  {/* Pulse waves at bottom */}
                  {isListening && (
                    <div className="absolute bottom-6 flex gap-1 items-end justify-center h-4 w-full z-10">
                      <span className="w-1.5 h-3 bg-indigo-500 rounded-full animate-pulse" />
                      <span className="w-1.5 h-5 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1.5 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      <span className="w-1.5 h-6 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                      <span className="w-1.5 h-4 bg-violet-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                    </div>
                  )}
                </div>
              )}

              {/* Active Question Box */}
              {!isEvaluating && (
                <div className="glass-panel p-6 border border-indigo-500/20 bg-indigo-950/10">
                  <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-2">
                    Pertanyaan {currentQuestionIndex + 1} dari {interviewQuestions.length} &bull; {interviewQuestions[currentQuestionIndex].section}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-semibold">
                    "{interviewQuestions[currentQuestionIndex].text}"
                  </p>
                </div>
              )}
            </div>

            {/* Kolom Kanan: Progression & Controls (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-6 w-full">
              
              {/* Progression Card */}
              <div className="glass-panel p-5 border border-white/5 bg-slate-900/30">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Kemajuan Sesi Wawancara</h3>
                <div className="space-y-4">
                  {interviewQuestions.map((q, idx) => {
                    const isActive = idx === currentQuestionIndex;
                    const isCompleted = idx < currentQuestionIndex;
                    
                    return (
                      <div key={q.id} className="flex items-center gap-3 text-xs">
                        <div className={`flex h-5 w-5 items-center justify-center rounded-full font-bold border ${
                          isActive ? 'bg-indigo-600 border-indigo-500 text-white' :
                          isCompleted ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' :
                          'bg-white/5 border-white/5 text-slate-500'
                        }`}>
                          {isCompleted ? '✓' : q.id}
                        </div>
                        <span className={`font-semibold ${
                          isActive ? 'text-white font-bold' :
                          isCompleted ? 'text-slate-400' :
                          'text-slate-500'
                        }`}>
                          {q.section}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Transcript Card */}
              <div className="glass-panel p-5 border border-white/5 bg-slate-900/30">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {showManualInput ? 'Tuliskan Jawaban Anda' : 'Hasil Transkrip Suara (Live)'}
                  </h3>
                  {isSupported && !isEvaluating && (
                    <button 
                      onClick={() => {
                        stopListening();
                        setShowManualInput(!showManualInput);
                      }}
                      className="text-[10px] text-indigo-400 hover:text-indigo-300 font-bold transition underline"
                    >
                      {showManualInput ? 'Gunakan Suara' : 'Ketik Manual'}
                    </button>
                  )}
                </div>
                
                {showManualInput ? (
                  <textarea
                    value={customAnswer}
                    onChange={(e) => setCustomAnswer(e.target.value)}
                    disabled={isEvaluating}
                    className="w-full h-32 rounded-lg border border-white/10 bg-slate-950 p-3 text-xs text-white resize-none leading-relaxed focus:border-indigo-500 focus:outline-none disabled:opacity-50"
                    placeholder="Ketik jawaban Anda di sini secara terstruktur..."
                  />
                ) : (
                  <div className="glass-panel p-4 bg-black/30 border border-white/5 min-h-[120px] text-xs leading-relaxed max-h-40 overflow-y-auto">
                    {transcript ? (
                      <p className="text-slate-200">{transcript}</p>
                    ) : (
                      <p className="text-slate-500 italic">
                        {!isSupported 
                          ? 'SpeechRecognition tidak didukung di browser ini. Silakan gunakan opsi Ketik Manual di kanan atas.'
                          : isEvaluating ? 'Proses evaluasi sedang berjalan...' : 'Mikrofon mati. Klik tombol mikrofon di bawah untuk mulai berbicara...'}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Error Banner */}
              {errorMsg && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3.5 text-xs text-red-400 animate-fadeIn">
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Large Controls Toggle */}
              {!isEvaluating && (
                <div className="flex flex-col gap-3">
                  {!showManualInput && isSupported && (
                    <button 
                      onClick={handleMicClick}
                      className={`glow-pill w-full flex items-center justify-center gap-3 rounded-xl py-4 text-sm font-bold text-white shadow-xl transition cursor-pointer ${
                        isListening 
                          ? 'bg-gradient-to-r from-red-600 to-pink-600 shadow-red-500/10 hover:from-red-500 hover:to-pink-500' 
                          : 'bg-gradient-to-r from-indigo-600 to-violet-700 shadow-indigo-500/10 hover:from-indigo-500 hover:to-violet-600'
                      }`}
                    >
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-white/20 ${isListening ? 'animate-pulse' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M12 2c1.66 0 3 1.34 3 3v7c0 1.66-1.34 3-3 3s-3-1.34-3-3V5c0-1.66 1.34-3 3-3zM19 10v2a7 7 0 0 1-14 0v-2"/>
                        </svg>
                      </div>
                      {isListening ? 'Hentikan Rekaman Suara' : 'Mulai Bicara / Aktifkan Mic'}
                    </button>
                  )}

                  {/* Kirim Jawaban Button */}
                  {((!showManualInput && transcript) || (showManualInput && customAnswer)) && (
                    <button 
                      onClick={handleSubmitAnswer}
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
                    >
                      Kirim Jawaban &amp; Lanjut
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                    </button>
                  )}
                </div>
              )}

            </div>

          </div>
        )}
      </main>
    </div>
  );
}
