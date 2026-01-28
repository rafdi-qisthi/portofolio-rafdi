const Contact = () => {
  return (
    <section id="contact" className="relative z-10 w-full py-24 px-6 md:px-16 bg-[#0a0c1b] border-t border-white/5">
      
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 block">
            // Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Siap Membangun Solusi <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Bersama Anda?</span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Saya saat ini terbuka untuk peluang kerja (Full-time) atau proyek freelance. 
          Jika Anda tertarik dengan profil saya atau ingin diskusi tentang teknologi, mari mengobrol!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            {/* Tombol Email */}
            <a href="mailto:rafdizulqisthi07@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-[#0F1123] border border-white/10 rounded-xl hover:border-indigo-500 transition duration-300 w-full sm:w-auto justify-center">
                <span className="text-2xl group-hover:scale-110 transition">📧</span>
                <div className="text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Email Saya</p>
                    <p className="text-white font-bold">Kirim Pesan</p>
                </div>
            </a>

            {/* Tombol WhatsApp (Ganti nomornya nanti) */}
            <a href="https://wa.me/6281235905493" target="_blank" rel="noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-[#0F1123] border border-white/10 rounded-xl hover:border-green-500 transition duration-300 w-full sm:w-auto justify-center">
                <span className="text-2xl group-hover:scale-110 transition">💬</span>
                <div className="text-left">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-white font-bold">Chat Langsung</p>
                </div>
            </a>

        </div>
      </div>

    </section>
  )
}

export default Contact