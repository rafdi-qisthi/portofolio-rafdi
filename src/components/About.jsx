const About = () => {
  return (
    <section id="about" className="relative z-10 w-full py-24 px-6 md:px-16 bg-[#0a0c1b]">
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* KOLOM KIRI: NARASI */}
        <div className="order-2 md:order-1">
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 block font-bold">
            // Who Am I?
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            Lebih dari sekadar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Baris Kode.</span>
          </h2>
          
          {/* UPDATE: Menggunakan text-slate-200 agar lebih terang dan jelas dibaca */}
          <div className="space-y-6 text-slate-200 text-lg leading-relaxed">
            <p>
              Halo! Saya <strong className="text-white">Rafdi</strong>. Perjalanan saya di dunia IT dimulai dari rasa penasaran bagaimana sebuah website bekerja, yang kini berkembang menjadi obsesi untuk menciptakan sistem cerdas.
            </p>
            <p>
              Saat ini saya adalah <strong className="text-white">Mahasiswa Teknik Informatika Tingkat Akhir</strong>. Saya tidak hanya belajar teori, tapi langsung terjun memecahkan masalah nyata - seperti Skripsi saya yang menggabungkan <strong className="text-indigo-300">AI (Computer Vision)</strong> dengan Web App untuk membantu petani.
            </p>
            <p>
              Saya percaya bahwa teknologi terbaik adalah yang <span className="text-indigo-300 font-bold">canggih di belakang layar</span>, namun <span className="text-indigo-300 font-bold">mudah digunakan</span> oleh manusianya.
            </p>
          </div>

          {/* AREA TOMBOL */}
          {/* PENTING: id="unduh-cv" ditambahkan agar tombol Navbar bisa scroll ke sini */}
          <div id="unduh-cv" className="flex flex-wrap gap-4 mt-8 scroll-mt-32">
            
            {/* TOMBOL LIHAT CV */}
            <a 
                href="/cv-rafdi.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full text-sm transition flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-1"
            >
                {/* Ikon Mata */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                Lihat CV
            </a>
            
            {/* TOMBOL LINKEDIN */}
            <a 
              href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-2 border border-slate-600 hover:border-indigo-500 text-slate-200 hover:text-white rounded-full text-sm transition hover:bg-white/5 flex items-center gap-2"
            >
              {/* Ikon LinkedIn */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>

          </div>
        </div>

        {/* KOLOM KANAN: CARD */}
        <div className="order-1 md:order-2 relative">
            
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            <div className="relative space-y-6">
                
                {/* Card 1 */}
                <div className="bg-[#0F1123]/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-indigo-500/50 transition duration-500 hover:shadow-xl hover:shadow-indigo-500/10 group">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                            🎓
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg group-hover:text-indigo-400 transition">Pendidikan</h4>
                            <p className="text-slate-200 text-base font-medium mt-1">Universitas Kahuripan Kediri</p>
                            <p className="text-slate-400 text-sm">Teknik Informatika (IPS Semester 7: 3.66)</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0F1123]/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-green-500/50 transition duration-500 hover:shadow-xl hover:shadow-green-500/10 group">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                            📍
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg group-hover:text-green-400 transition">Lokasi & Status</h4>
                            <p className="text-slate-200 text-base font-medium mt-1">Sidoarjo & Kediri, Indonesia</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <p className="text-green-400 text-xs font-bold uppercase tracking-wider">Open to Work</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-slate-400 italic text-sm border-r-2 border-indigo-500/30 pr-4">
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