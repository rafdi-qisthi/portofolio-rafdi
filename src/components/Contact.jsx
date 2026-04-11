const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 w-full py-24 px-6 md:px-12 bg-transparent border-t border-fuchsia-500/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        <span className="text-fuchsia-500 font-mono text-sm tracking-widest uppercase mb-3 block font-bold drop-shadow-md">
          // Get In Touch
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Siap Membangun Solusi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-600 drop-shadow-lg">
            Bersama Anda?
          </span>
        </h2>

        <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto font-light">
          Saya saat ini terbuka untuk peluang kerja (Full-time) atau proyek freelance.
          Jika Anda tertarik dengan profil saya atau ingin diskusi tentang teknologi,
          mari mengobrol!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

          {/* EMAIL */}
          <a
            href="mailto:rafdizulqisthi07@gmail.com?subject=Kerja%20Sama%20Project%20Dengan%20Rafdi&body=Halo%20Rafdi,%0A%0ASaya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda.%0A%0ABoleh%20kita%20diskusi%20lebih%20lanjut%20mengenai%20project%20ini?%0A%0ATerima%20kasih."
            className="group flex items-center gap-4 px-8 py-4 bg-[#0a0518]/80 backdrop-blur-sm border border-white/10 rounded-full hover:border-fuchsia-500 hover:bg-fuchsia-500/10 transition duration-500 w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]"
          >
            <span className="text-2xl text-fuchsia-400 group-hover:scale-110 group-hover:text-fuchsia-300 group-hover:-translate-y-1 transition duration-500 drop-shadow-md">
              📧
            </span>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                Email Saya
              </p>
              <p className="text-slate-200 font-bold group-hover:text-white transition">
                Kirim Pesan
              </p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6281235905493?text=Halo%20Rafdi,%20saya%20tertarik%20untuk%20diskusi%20project%20atau%20kerja%20sama%20dengan%20Anda.%20Boleh%20kita%20bicarakan%20lebih%20lanjut?"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 px-8 py-4 bg-[#0a0518]/80 backdrop-blur-sm border border-white/10 rounded-full hover:border-fuchsia-500 hover:bg-fuchsia-500/10 transition duration-500 w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]"
          >
            <span className="text-2xl text-fuchsia-400 group-hover:scale-110 group-hover:text-fuchsia-300 group-hover:-translate-y-1 transition duration-500 drop-shadow-md">
              💬
            </span>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                WhatsApp
              </p>
              <p className="text-slate-200 font-bold group-hover:text-white transition">
                Chat Langsung
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;