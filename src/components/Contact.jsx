import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 w-full py-24 px-6 md:px-12 bg-transparent border-t border-emerald-500/20 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-3 block font-bold drop-shadow-md">
          // Terbuka Untuk Peluang Baru
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Mencari Talenta <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-600 drop-shadow-lg">
            Untuk Tim Anda?
          </span>
        </h2>

        <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Saya saat ini sangat terbuka untuk peluang karier purna waktu (Full-time). Jika perusahaan Anda sedang mencari pengembang yang menguasai web arsitektur modern dan AI, mari terhubung dan berdiskusi.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

          {/* EMAIL */}
          <a
            href="mailto:rafdizulqisthi07@gmail.com?subject=Peluang%20Karier%20/%20Lowongan%20Pekerjaan&body=Halo%20Rafdi,%0A%0ASaya%20mendapatkan%20kontak%20Anda%20dari%20website%20portofolio.%20Saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20peluang%20karier%20di%20perusahaan%20kami.%0A%0ATerima%20kasih."
            className="group flex items-center gap-4 px-8 py-4 bg-[#0a0518]/80 backdrop-blur-sm border border-white/10 rounded-full hover:border-emerald-500 hover:bg-emerald-500/10 transition duration-500 w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <span className="text-2xl text-emerald-400 group-hover:scale-110 group-hover:text-emerald-300 group-hover:-translate-y-1 transition duration-500 drop-shadow-md">
              📧
            </span>
            <div className="text-left">
              <p className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">
                Kirim Email
              </p>
              <p className="text-slate-200 font-bold group-hover:text-white transition">
                rafdizulqisthi07@gmail.com
              </p>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/6281235905493?text=Halo%20Rafdi,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20mengenai%20peluang%20karier/lowongan%20pekerjaan."
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 px-8 py-4 bg-[#0a0518]/80 backdrop-blur-sm border border-white/10 rounded-full hover:border-emerald-500 hover:bg-emerald-500/10 transition duration-500 w-full sm:w-auto justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <span className="text-2xl text-emerald-400 group-hover:scale-110 group-hover:text-emerald-300 group-hover:-translate-y-1 transition duration-500 drop-shadow-md">
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