import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 w-full py-24 px-6 md:px-12 border-t border-emerald-500/20 bg-transparent">
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3 block font-bold drop-shadow-md">
              // Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 drop-shadow-lg">Terpilih</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-sm text-right md:text-left font-light">
            Gabungan antara riset akademis berbasis AI, pengalaman industri, dan eksplorasi teknologi web modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. RISET AKADEMIS (SKRIPSI) */}
          <div className="group relative bg-[#0a0518]/60 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-2xl border border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-500/20 transition duration-500">🍅</div>
                <span className="text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">Riset Akademis (2026)</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition leading-tight">Klasifikasi & Estimasi Masa Simpan Tomat</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                Implementasi <strong className="text-white font-bold">Convolutional Neural Network (CNN)</strong> berbasis web untuk mendeteksi kematangan dan memprediksi masa simpan. Solusi cerdas ini diterapkan di <strong className="text-white">Pasar Tradisional Krian, Sidoarjo</strong> guna mengoptimalkan kontrol kualitas produk.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">Python Flask</span>
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">TensorFlow</span>
              </div>
            </div>
          </div>

          {/* 2. PKL */}
          <div className="group relative bg-[#0a0518]/60 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-2xl border border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-500/20 transition duration-500">🏫</div>
                <span className="text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">Pengalaman Industri (2025)</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition leading-tight">Sistem Informasi Akademik</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                Digitalisasi administrasi pendidikan untuk memanajemen data siswa, nilai, dan jadwal akademik secara terpusat. Mengedepankan efisiensi operasional dengan antarmuka <strong className="text-white font-bold">AdminLTE</strong> yang responsif.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">Laravel</span>
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">MySQL</span>
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">AdminLTE</span>
              </div>
            </div>
          </div>

          {/* 3. PORTFOLIO */}
          <div className="group relative bg-[#0a0518]/60 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-2xl border border-emerald-500/30 group-hover:scale-110 group-hover:bg-emerald-500/20 transition duration-500">🌐</div>
                <span className="text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">Portofolio (2026)</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition leading-tight">Arsitektur Portofolio Web</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                Pengembangan platform identitas digital yang dirancang dengan antarmuka futuristik, menitikberatkan pada <em className="text-slate-400">user experience (UX)</em>, animasi interaktif yang mulus, dan performa <strong className="text-white font-bold">Rendering</strong> tinggi.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">React + Vite</span>
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">Tailwind</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects;