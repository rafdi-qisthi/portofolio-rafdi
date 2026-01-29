import React from 'react';

const Hero = () => {
  return (
    <header className="relative z-10 w-full min-h-screen flex items-center pt-28 md:pt-20">
      <div className="w-full px-6 md:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* KOLOM KIRI: TEKS UTAMA */}
          <div className="max-w-2xl text-left">
              
              {/* Ukuran font adaptif: text-4xl di HP, text-7xl di Desktop */}
              <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6">
                Membangun Logika, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Menciptakan Solusi.
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg border-l-2 border-indigo-500/50 pl-5">
                Halo, saya <strong className="text-white">Rafdi</strong>. Calon Insinyur Informatika yang fokus pada pengembangan <span className="text-indigo-300 font-semibold">Aplikasi Web Modern</span> dan integrasi teknologi cerdas untuk memecahkan masalah nyata.
              </p>

              {/* AREA TOMBOL */}
              <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="px-6 md:px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition shadow-lg shadow-indigo-500/25 flex items-center justify-center text-sm md:text-base">
                      Lihat Project
                  </a>

                  <a 
                    href="https://wa.me/6281235905493?text=Halo%20Mas%20Rafdi,%20saya%20tertarik%20diskusi%20project." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 md:px-8 py-3 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:text-white hover:border-indigo-400 font-medium rounded-lg transition flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                      <span>Diskusi Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
              </div>
          </div>

          {/* KOLOM KANAN: CODE EDITOR (Sekarang muncul di Mobile di bawah teks) */}
          <div className="relative block perspective-1000 mt-8 lg:mt-0">
              <div className="relative bg-[#0F1123] border border-white/10 rounded-xl p-0 shadow-2xl overflow-hidden transform lg:rotate-1 hover:rotate-0 transition duration-500 hover:shadow-indigo-500/20">
                  <div className="bg-[#1a1d3d] px-4 py-3 flex items-center justify-between border-b border-white/5">
                      <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">rafdi_dev.py</div>
                  </div>
                  
                  <div className="p-6 font-mono text-[12px] md:text-sm leading-7 text-slate-300 font-medium overflow-x-auto">
                      <div className="flex"><span className="text-slate-500 w-8 shrink-0">1</span><span><span className="text-purple-400">class</span> <span className="text-yellow-300">RafdiDev</span>:</span></div>
                      <div className="flex"><span className="text-slate-500 w-8 shrink-0">2</span><span className="pl-4">role = <span className="text-green-400">"Fullstack Engineer"</span></span></div>
                      <div className="flex"><span className="text-slate-500 w-8 shrink-0">3</span><span className="pl-4">thesis = <span className="text-green-400">"Chili Maturity Classification"</span></span></div>
                      <div className="flex"><span className="text-slate-500 w-8 shrink-0">4</span><span className="pl-4">tools = [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Laravel"</span>, <span className="text-green-400">"TensorFlow"</span>]</span></div>
                      <div className="flex"><span className="text-slate-500 w-8 shrink-0">5</span></div>
                      <div className="flex"><span className="text-slate-500 w-8 shrink-0">6</span><span className="pl-4"><span className="text-indigo-400">def</span> <span className="text-blue-400">build_future</span>(self):</span></div>
                      <div className="flex"><span className="text-slate-500 w-8 shrink-0">7</span><span className="pl-8"><span className="text-purple-400">return</span> <span className="text-yellow-300">True</span></span></div>
                  </div>
              </div>
          </div>

      </div>
    </header>
  );
};

export default Hero;