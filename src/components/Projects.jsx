const Projects = () => {
  return (
    <section id="projects" className="relative z-10 w-full py-24 px-6 md:px-16 border-t border-white/5">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 block">
            // Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Terpilih</span>
          </h2>
        </div>
        <p className="text-slate-300 max-w-sm text-right md:text-left">
          Gabungan antara riset akademis, pengalaman magang (PKL), dan eksplorasi teknologi modern.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* 1. SKRIPSI */}
        <div className="group relative bg-[#0F1123]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-2xl border border-indigo-500/20 group-hover:scale-110 transition duration-500">🌶️</div>
              <span className="bg-indigo-900/30 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/30">2026 (Thesis)</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">Klasifikasi Kematangan Cabai</h3>
            {/* UPDATE: text-slate-300 (Lebih Jelas) */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              Sistem berbasis <strong>Computer Vision (CNN)</strong> untuk mendeteksi tingkat kematangan cabai. Solusi IoT cerdas untuk membantu petani dalam penyortiran pasca-panen.
            </p>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              <span className="px-3 py-1 bg-[#1a1d3d] text-slate-300 text-xs rounded-md border border-white/5">Python Flask</span>
              <span className="px-3 py-1 bg-[#1a1d3d] text-slate-300 text-xs rounded-md border border-white/5">TensorFlow</span>
            </div>
          </div>
        </div>

        {/* 2. PKL */}
        <div className="group relative bg-[#0F1123]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-2xl border border-blue-500/20 group-hover:scale-110 transition duration-500">🏫</div>
              <span className="bg-blue-900/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">Internship (PKL)</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition">Sistem Informasi Akademik</h3>
            {/* UPDATE: text-slate-300 (Lebih Jelas) */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              Digitalisasi administrasi sekolah (data siswa, nilai, jadwal). Dashboard responsif menggunakan <strong>AdminLTE</strong> untuk kemudahan pengelolaan data.
            </p>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              <span className="px-3 py-1 bg-[#1a1d3d] text-slate-300 text-xs rounded-md border border-white/5">Laravel</span>
              <span className="px-3 py-1 bg-[#1a1d3d] text-slate-300 text-xs rounded-md border border-white/5">MySQL</span>
              <span className="px-3 py-1 bg-[#1a1d3d] text-slate-300 text-xs rounded-md border border-white/5">AdminLTE</span>
            </div>
          </div>
        </div>

        {/* 3. PORTFOLIO */}
        <div className="group relative bg-[#0F1123]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-2xl border border-purple-500/20 group-hover:scale-110 transition duration-500">🌐</div>
              <span className="bg-purple-900/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30">2025</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition">Rafdi.Dev Website</h3>
            {/* UPDATE: text-slate-300 (Lebih Jelas) */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
              Website portofolio personal yang dirancang dengan antarmuka futuristik dan performa tinggi.
            </p>
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              <span className="px-3 py-1 bg-[#1a1d3d] text-slate-300 text-xs rounded-md border border-white/5">React + Vite</span>
              <span className="px-3 py-1 bg-[#1a1d3d] text-slate-300 text-xs rounded-md border border-white/5">Tailwind</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects