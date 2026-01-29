const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center bg-[#0a0c1b]/60 backdrop-blur-md border-b border-white/5">

      {/* LOGO */}
      <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
        <span>
          Rafdi<span className="text-indigo-400">.Dev</span>
        </span>
      </div>

      {/* MENU */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">

        {/* Link Navigasi */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium text-slate-400 text-center">
          <a href="#" className="hover:text-indigo-400 transition">
            Beranda
          </a>

          <a href="#about" className="hover:text-indigo-400 transition">
            Tentang
          </a>

          <a href="#projects" className="hover:text-indigo-400 transition">
            Proyek
          </a>

          <a href="#skills" className="hover:text-indigo-400 transition">
            Keahlian
          </a>

          <a href="#certifications" className="hover:text-indigo-400 transition">
            Sertifikasi
          </a>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:border-l border-white/10 md:pl-6 mt-4 md:mt-0">

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition transform hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* CV */}
          <a
            href="/cv-rafdi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-white font-medium text-sm transition group"
          >
            <span className="group-hover:underline decoration-indigo-500 underline-offset-4">
              CV
            </span>
          </a>

          {/* KONTAK */}
          <a
            href="#contact"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm transition shadow-lg shadow-indigo-500/20"
          >
            Kontak
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
