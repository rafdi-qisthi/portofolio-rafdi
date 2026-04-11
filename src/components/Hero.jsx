import React from 'react';

const Hero = () => {
  return (
    <header className="relative z-10 w-full min-h-screen flex items-center pt-28 md:pt-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Membangun Logika, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-600 drop-shadow-lg">
                  Menciptakan Solusi.
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg border-l-4 border-fuchsia-500 pl-5 font-light">
                Halo, saya <strong className="text-white">Rafdi</strong>. Calon Insinyur Informatika yang fokus pada pengembangan <span className="text-fuchsia-400 font-semibold">Aplikasi Web Modern</span> dan integrasi teknologi cerdas untuk memecahkan masalah nyata.
              </p>

              <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="px-6 md:px-8 py-3.5 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold rounded-full transition duration-300 shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] flex items-center justify-center text-sm md:text-base hover:-translate-y-1">
                      Lihat Project
                  </a>

                  <a 
                    href="https://wa.me/6281235905493?text=Halo%20Mas%20Rafdi,%20saya%20tertarik%20diskusi%20project." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 md:px-8 py-3.5 border border-fuchsia-500/50 text-slate-200 hover:bg-fuchsia-500/10 hover:text-white hover:border-fuchsia-400 font-medium rounded-full transition duration-300 flex items-center justify-center gap-2 text-sm md:text-base shadow-[0_0_10px_rgba(217,70,239,0.1)]"
                  >
                      <span>Diskusi Project</span>
                      <svg className="w-4 h-4 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
              </div>
          </div>

          <div className="relative block perspective-1000 mt-8 lg:mt-0">
              <div className="relative bg-[#0a0518]/90 backdrop-blur-md border border-fuchsia-500/30 rounded-2xl p-0 shadow-[0_0_40px_rgba(217,70,239,0.15)] overflow-hidden transform lg:rotate-2 hover:rotate-0 transition duration-500 hover:border-fuchsia-400">
                  <div className="bg-[#05020c] px-4 py-3 flex items-center justify-between border-b border-fuchsia-500/30">
                      <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                      </div>
                      <div className="text-xs text-fuchsia-300/60 font-mono tracking-widest uppercase">rafdi_dev.py</div>
                  </div>
                  
                  <div className="p-6 font-mono text-[12px] md:text-sm leading-8 text-slate-200 font-medium overflow-x-auto">
                      <div className="flex"><span className="text-slate-600 w-8 shrink-0">1</span><span><span className="text-pink-500">class</span> <span className="text-white font-bold">RafdiDev</span>:</span></div>
                      <div className="flex"><span className="text-slate-600 w-8 shrink-0">2</span><span className="pl-4">role = <span className="text-fuchsia-400">"Fullstack Engineer"</span></span></div>
                      <div className="flex"><span className="text-slate-600 w-8 shrink-0">3</span><span className="pl-4">thesis = <span className="text-fuchsia-400">"Chili Maturity Classification"</span></span></div>
                      <div className="flex"><span className="text-slate-600 w-8 shrink-0">4</span><span className="pl-4">tools = [<span className="text-fuchsia-400">"React"</span>, <span className="text-fuchsia-400">"Laravel"</span>, <span className="text-fuchsia-400">"TensorFlow"</span>]</span></div>
                      <div className="flex"><span className="text-slate-600 w-8 shrink-0">5</span></div>
                      <div className="flex"><span className="text-slate-600 w-8 shrink-0">6</span><span className="pl-4"><span className="text-pink-500">def</span> <span className="text-purple-300">build_future</span>(self):</span></div>
                      <div className="flex"><span className="text-slate-600 w-8 shrink-0">7</span><span className="pl-8"><span className="text-pink-500">return</span> <span className="text-white font-bold">True</span></span></div>
                  </div>
              </div>
          </div>

      </div>
    </header>
  );
};

export default Hero;