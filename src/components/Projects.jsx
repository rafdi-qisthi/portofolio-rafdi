const Projects = () => {
  return (
    <section id="projects" className="relative z-10 w-full py-24 px-6 md:px-12 border-t border-fuchsia-500/20 bg-transparent">
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-fuchsia-500 font-mono text-sm tracking-widest uppercase mb-3 block font-bold drop-shadow-md">
              // Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-600 drop-shadow-lg">Terpilih</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-sm text-right md:text-left font-light">
            Gabungan antara riset akademis, pengalaman magang (PKL), dan eksplorasi teknologi modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. SKRIPSI */}
          <div className="group relative bg-[#0a0518]/60 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl border border-fuchsia-500/30 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition duration-500">🍅</div>
                <span className="text-fuchsia-300 text-xs font-bold px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10">2026 (Thesis)</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition">Klasifikasi Tingkat Kematangan Tomat</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                Sistem berbasis <strong className="text-white font-bold">Computer Vision (CNN)</strong> untuk mendeteksi tingkat kematangan tomat. Solusi IoT cerdas untuk membantu petani dalam penyortiran pasca-panen.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">Python Flask</span>
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">TensorFlow</span>
              </div>
            </div>
          </div>

          {/* 2. PKL */}
          <div className="group relative bg-[#0a0518]/60 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl border border-fuchsia-500/30 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition duration-500">🏫</div>
                <span className="text-fuchsia-300 text-xs font-bold px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10">Internship (PKL) 2025</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition">Sistem Informasi Akademik</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                Digitalisasi administrasi sekolah (data siswa, nilai, jadwal). Dashboard responsif menggunakan <strong className="text-white font-bold">AdminLTE</strong> untuk kemudahan pengelolaan data.
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">Laravel</span>
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">MySQL</span>
                <span className="px-3 py-1 bg-white/5 text-slate-200 text-xs rounded border border-white/10">AdminLTE</span>
              </div>
            </div>
          </div>

          {/* 3. PORTFOLIO */}
          <div className="group relative bg-[#0a0518]/60 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-8 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl border border-fuchsia-500/30 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition duration-500">🌐</div>
                <span className="text-fuchsia-300 text-xs font-bold px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10">2026</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition">Rafdi.Dev Website</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                Website portofolio personal yang dirancang dengan antarmuka futuristik dan performa tinggi.
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

export default Projects