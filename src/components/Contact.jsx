const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 w-full py-24 px-6 md:px-16 bg-[#0a0c1b] border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Subtitle */}
        <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase mb-2 block">
          // Get In Touch
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Siap Membangun Solusi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Bersama Anda?
          </span>
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Saya saat ini terbuka untuk peluang kerja (Full-time) atau proyek freelance.
          Jika Anda tertarik dengan profil saya atau ingin diskusi tentang teknologi,
          mari mengobrol!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

          {/* EMAIL TEMPLATE */}
          <a
            href="mailto:rafdizulqisthi07@gmail.com?subject=Kerja%20Sama%20Project%20Dengan%20Rafdi&body=Halo%20Rafdi,%0A%0ASaya%20tertarik%20untuk%20bekerja%20sama%20dengan%20Anda.%0A%0ABoleh%20kita%20diskusi%20lebih%20lanjut%20mengenai%20project%20ini?%0A%0ATerima%20kasih."
            className="group flex items-center gap-3 px-8 py-4 bg-[#0F1123] border border-white/10 rounded-xl hover:border-indigo-500 transition duration-300 w-full sm:w-auto justify-center"
          >
            <span className="text-2xl group-hover:scale-110 transition">
              📧
            </span>

            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                Email Saya
              </p>
              <p className="text-white font-bold">
                Kirim Pesan
              </p>
            </div>
          </a>

          {/* WHATSAPP TEMPLATE */}
          <a
            href="https://wa.me/6281235905493?text=Halo%20Rafdi,%20saya%20tertarik%20untuk%20diskusi%20project%20atau%20kerja%20sama%20dengan%20Anda.%20Boleh%20kita%20bicarakan%20lebih%20lanjut?"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-[#0F1123] border border-white/10 rounded-xl hover:border-green-500 transition duration-300 w-full sm:w-auto justify-center"
          >
            <span className="text-2xl group-hover:scale-110 transition">
              💬
            </span>

            <div className="text-left">
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                WhatsApp
              </p>
              <p className="text-white font-bold">
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
