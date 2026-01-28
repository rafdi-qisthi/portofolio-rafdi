const Skills = () => {
  return (
    <section id="skills" className="relative z-10 w-full py-24 px-6 md:px-16 bg-[#0a0c1b] border-t border-white/5">
      
      {/* HEADER BAGIAN SKILL */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 block">
            // Tech Stack & Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Senjata <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Andalan</span>
          </h2>
        </div>
        <p className="text-slate-400 max-w-sm text-right md:text-left">
          Daftar teknologi dan sertifikasi profesional yang saya kuasai dan gunakan dalam proyek.
        </p>
      </div>

      {/* GRID KEAHLIAN UTAMA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 1. FRONTEND */}
        <div className="bg-[#0F1123] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition duration-300 group">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-2xl mb-6 text-indigo-400 group-hover:scale-110 transition">
            🎨
          </div>
          <h3 className="text-xl font-bold text-white mb-6">Frontend Modern</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">React.js + Vite</span>
                <span className="text-indigo-400">Advanced</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Tailwind CSS</span>
                <span className="text-indigo-400">Expert</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BACKEND */}
        <div className="bg-[#0F1123] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition duration-300 group">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-2xl mb-6 text-blue-400 group-hover:scale-110 transition">
            ⚙️
          </div>
          <h3 className="text-xl font-bold text-white mb-6">Backend & DB</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Laravel (PHP)</span>
                <span className="text-blue-400">Advanced</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">MySQL / Database</span>
                <span className="text-blue-400">Advanced</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. AI & TOOLS */}
        <div className="bg-[#0F1123] p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition duration-300 group">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-2xl mb-6 text-purple-400 group-hover:scale-110 transition">
            🧠
          </div>
          <h3 className="text-xl font-bold text-white mb-6">AI Engineering</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Python (TensorFlow)</span>
                <span className="text-purple-400">Intermediate</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Google Colab / Jupyter</span>
                <span className="text-purple-400">Advanced</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
               <span className="text-xs text-slate-500">Other Tools:</span>
               <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300 border border-white/5">VS Code</span>
               <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300 border border-white/5">XAMPP</span>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION SERTIFIKASI (LAYOUT BARU YANG LEBIH RAPI) */}
      <div id="certifications" className="mt-16 pt-16 border-t border-white/5 scroll-mt-28">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Sertifikasi Profesional</h3>
        
        {/* Container Flexbox dengan Gap Konsisten */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            
            {/* --- KELOMPOK 1: SERTIFIKAT UTAMA (AI & Security) --- */}
            {/* Setting: Di Desktop lebar 30%, di Tablet lebar 45%, di HP lebar 100% */}
            
            {/* 1. Orbit Future Academy (AI) */}
            <a href="/sertifikat-orbit.pdf" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-4 bg-[#1a1d3d] rounded-xl border border-white/5 flex items-center gap-4 hover:border-purple-500 hover:bg-purple-500/10 transition duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
                  🤖
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm group-hover:text-purple-400 transition leading-tight mb-1">AI4JOBS (Artificial Intelligence)</h4>
                    <p className="text-slate-400 text-xs">Orbit Future Academy</p>
                </div>
            </a>

            {/* 2. Microsoft (Security) */}
            <a href="/sertifikat-microsoft.pdf" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-4 bg-[#1a1d3d] rounded-xl border border-white/5 flex items-center gap-4 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">
                  🛡️
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm group-hover:text-blue-400 transition leading-tight mb-1">Ready4AI & Security</h4>
                    <p className="text-slate-400 text-xs">Microsoft Implementation</p>
                </div>
            </a>

            {/* 3. Dicoding (Data Science) */}
            <a href="https://www.dicoding.com/certificates/07Z63DGOYZQR" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-4 bg-[#1a1d3d] rounded-xl border border-white/5 flex items-center gap-4 hover:border-green-500 hover:bg-green-500/10 transition duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xl">
                  📊
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm group-hover:text-green-400 transition leading-tight mb-1">Dasar Data Science</h4>
                    <p className="text-slate-400 text-xs">Dicoding Indonesia</p>
                </div>
            </a>

             {/* --- KELOMPOK 2: SERTIFIKAT DASAR (Di Baris Kedua, Rata Tengah) --- */}
             
             {/* 4. Dicoding (AI Dasar) */}
            <a href="https://www.dicoding.com/certificates/GRX53WLQRZ0M" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-4 bg-[#1a1d3d] rounded-xl border border-white/5 flex items-center gap-4 hover:border-pink-500 hover:bg-pink-500/10 transition duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-xl">
                  🧠
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm group-hover:text-pink-400 transition leading-tight mb-1">Belajar Dasar AI</h4>
                    <p className="text-slate-400 text-xs">Dicoding Indonesia</p>
                </div>
            </a>

             {/* 5. Dicoding (Web) */}
            <a href="https://www.dicoding.com/certificates/MRZME4D9LPYQ" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-4 bg-[#1a1d3d] rounded-xl border border-white/5 flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-500/10 transition duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
                  💻
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm group-hover:text-indigo-400 transition leading-tight mb-1">Dasar Pemrograman Web</h4>
                    <p className="text-slate-400 text-xs">Dicoding Indonesia</p>
                </div>
            </a>

        </div>
      </div>

    </section>
  )
}

export default Skills