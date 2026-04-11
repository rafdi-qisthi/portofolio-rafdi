const About = () => {
  return (
    <section id="about" className="relative z-10 w-full py-24 px-6 md:px-12 bg-transparent">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1">
          <span className="text-fuchsia-500 font-mono text-sm tracking-widest uppercase mb-3 block font-bold drop-shadow-md">
            // Who Am I?
          </span>
          <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
            Lebih dari sekadar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-600 drop-shadow-lg">Baris Kode.</span>
          </h2>
          
          <div className="space-y-6 text-slate-200 text-lg leading-relaxed font-light">
            <p>
              Halo! Saya <strong className="text-white font-bold">Rafdi</strong>. Perjalanan saya di dunia IT dimulai dari rasa penasaran bagaimana sebuah website bekerja, yang kini berkembang menjadi obsesi untuk menciptakan sistem cerdas.
            </p>
            <p>
              Saat ini saya adalah <strong className="text-white font-bold">Mahasiswa Teknik Informatika Tingkat Akhir</strong>. Saya tidak hanya belajar teori, tapi langsung terjun memecahkan masalah nyata - seperti Skripsi saya yang menggabungkan <strong className="text-fuchsia-400 font-medium">AI (Computer Vision)</strong> dengan Web App untuk membantu petani.
            </p>
            <p>
              Saya percaya bahwa teknologi terbaik adalah yang <span className="text-fuchsia-400 font-medium">canggih di belakang layar</span>, namun <span className="text-fuchsia-400 font-medium">mudah digunakan</span> oleh manusianya.
            </p>
          </div>

          <div id="unduh-cv" className="flex flex-wrap gap-4 mt-10 scroll-mt-32">
            <a 
                href="/cv-rafdi.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold rounded-full text-sm transition duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(217,70,239,0.4)] hover:shadow-[0_0_30px_rgba(217,70,239,0.7)] hover:-translate-y-1"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                Lihat CV
            </a>
            
            <a 
              href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-fuchsia-500/40 text-slate-200 hover:text-white rounded-full text-sm transition duration-300 hover:border-fuchsia-400 hover:bg-fuchsia-500/10 flex items-center gap-2 font-medium"
            >
              <svg className="w-4 h-4 text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-fuchsia-600/20 rounded-full blur-[120px] opacity-60"></div>
            <div className="relative space-y-6">
                
                {/* Card 1 */}
                <div className="bg-[#0a0518]/80 backdrop-blur-md border border-fuchsia-500/20 rounded-2xl p-6 hover:border-fuchsia-500/60 transition duration-500 shadow-[0_0_20px_rgba(217,70,239,0.05)] hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] group">
                    <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl border border-fuchsia-500/30 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition duration-500">
                            🎓
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg transition group-hover:text-fuchsia-400">Pendidikan</h4>
                            <p className="text-slate-200 text-sm font-medium mt-1">Universitas Kahuripan Kediri</p>
                            <p className="text-slate-400 text-sm font-light mt-0.5">Teknik Informatika (IPS Semester 7: 3.66)</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0a0518]/80 backdrop-blur-md border border-fuchsia-500/20 rounded-2xl p-6 hover:border-fuchsia-500/60 transition duration-500 shadow-[0_0_20px_rgba(217,70,239,0.05)] hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] group">
                    <div className="flex gap-5 items-start">
                        <div className="w-12 h-12 bg-fuchsia-500/10 rounded-full flex items-center justify-center text-2xl border border-fuchsia-500/30 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition duration-500">
                            📍
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg transition group-hover:text-fuchsia-400">Lokasi & Status</h4>
                            <p className="text-slate-200 text-sm font-medium mt-1">Sidoarjo & Kediri, Indonesia</p>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                                </span>
                                <p className="text-green-400 text-xs font-bold uppercase tracking-[0.1em] drop-shadow-md">Open to Work</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-slate-400 italic text-sm border-r-2 border-fuchsia-500/50 pr-4">
                        "Obsessed with clean code<br/>and smart solutions."
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default About