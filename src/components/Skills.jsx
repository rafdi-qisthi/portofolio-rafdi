const Skills = () => {
  return (
    <section id="skills" className="relative z-10 w-full py-24 px-6 md:px-12 bg-transparent border-t border-fuchsia-500/20">
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-fuchsia-500 font-mono text-sm tracking-widest uppercase mb-3 block font-bold drop-shadow-md">
              // Tech Stack & Certifications
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Senjata <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-600 drop-shadow-lg">Andalan</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-sm text-right md:text-left font-light">
            Daftar teknologi dan sertifikasi profesional yang saya kuasai dan gunakan dalam proyek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. FRONTEND */}
          <div className="bg-[#0a0518]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-fuchsia-500/50 transition duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] group">
            <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl mb-6 border border-fuchsia-500/30 group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition duration-500">
              🎨
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Frontend Modern</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-200">React.js + Vite</span>
                  <span className="text-fuchsia-400">Advanced</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-200">Tailwind CSS</span>
                  <span className="text-fuchsia-400">Expert</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. BACKEND */}
          <div className="bg-[#0a0518]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-fuchsia-500/50 transition duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] group">
            <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl mb-6 border border-fuchsia-500/30 group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition duration-500">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Backend & DB</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-200">Laravel (PHP)</span>
                  <span className="text-fuchsia-400">Advanced</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-200">MySQL / Database</span>
                  <span className="text-fuchsia-400">Advanced</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. AI & TOOLS */}
          <div className="bg-[#0a0518]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-fuchsia-500/50 transition duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] group">
            <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl mb-6 border border-fuchsia-500/30 group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition duration-500">
              🧠
            </div>
            <h3 className="text-xl font-bold text-white mb-6">AI Engineering</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-200">Python (TensorFlow)</span>
                  <span className="text-fuchsia-400">Intermediate</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-slate-200">Google Colab / Jupyter</span>
                  <span className="text-fuchsia-400">Advanced</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                 <span className="text-xs text-slate-400">Other Tools:</span>
                 <span className="text-[11px] bg-white/10 px-2 py-1 rounded text-slate-200">VS Code</span>
                 <span className="text-[11px] bg-white/10 px-2 py-1 rounded text-slate-200">XAMPP</span>
              </div>
            </div>
          </div>

        </div>

        <div id="certifications" className="mt-20 pt-16 border-t border-white/10 scroll-mt-28">
          <h3 className="text-3xl font-extrabold text-white mb-10 text-center drop-shadow-md">Sertifikasi Profesional</h3>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {/* 1. Orbit */}
              <a href="/sertifikat-orbit.pdf" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-5 bg-[#0a0518]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-xl group-hover:bg-fuchsia-500/30 transition duration-500">
                    🤖
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm transition leading-tight mb-1 group-hover:text-fuchsia-300">AI4JOBS (Artificial Intelligence)</h4>
                      <p className="text-slate-400 text-xs font-light">Orbit Future Academy</p>
                  </div>
              </a>

              {/* 2. Microsoft */}
              <a href="/sertifikat-microsoft.pdf" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-5 bg-[#0a0518]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-xl group-hover:bg-fuchsia-500/30 transition duration-500">
                    🛡️
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm transition leading-tight mb-1 group-hover:text-fuchsia-300">Ready4AI & Security</h4>
                      <p className="text-slate-400 text-xs font-light">Microsoft Implementation</p>
                  </div>
              </a>

              {/* 3. Dicoding (Data Science) */}
              <a href="https://www.dicoding.com/certificates/07Z63DGOYZQR" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-5 bg-[#0a0518]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-xl group-hover:bg-fuchsia-500/30 transition duration-500">
                    📊
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm transition leading-tight mb-1 group-hover:text-fuchsia-300">Dasar Data Science</h4>
                      <p className="text-slate-400 text-xs font-light">Dicoding Indonesia</p>
                  </div>
              </a>

              {/* 4. Dicoding (AI Dasar) */}
              <a href="https://www.dicoding.com/certificates/GRX53WLQRZ0M" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-5 bg-[#0a0518]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-xl group-hover:bg-fuchsia-500/30 transition duration-500">
                    🧠
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm transition leading-tight mb-1 group-hover:text-fuchsia-300">Belajar Dasar AI</h4>
                      <p className="text-slate-400 text-xs font-light">Dicoding Indonesia</p>
                  </div>
              </a>

              {/* 5. Dicoding (Web) */}
              <a href="https://www.dicoding.com/certificates/MRZME4D9LPYQ" target="_blank" rel="noopener noreferrer" className="w-full md:w-[45%] lg:w-[30%] group px-6 py-5 bg-[#0a0518]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-4 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-xl group-hover:bg-fuchsia-500/30 transition duration-500">
                    💻
                  </div>
                  <div>
                      <h4 className="text-white font-bold text-sm transition leading-tight mb-1 group-hover:text-fuchsia-300">Dasar Pemrograman Web</h4>
                      <p className="text-slate-400 text-xs font-light">Dicoding Indonesia</p>
                  </div>
              </a>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills