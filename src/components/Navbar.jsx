'use client';

import { useState } from "react";

const Navbar = () => {

  // STATE MENU MOBILE
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 bg-[#0a0c1b]/60 backdrop-blur-md border-b border-white/5">

      {/* WRAPPER */}
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>
            <span className="text-slate-400">Portofolio</span>{" "}
            <span className="text-white font-bold">Rafdi</span>
          </span>
        </div>

        {/* HAMBURGER BUTTON (MOBILE ONLY) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            // ICON X (CLOSE)
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // ICON GARIS 3 (OPEN)
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-6">

          {/* Link Navigasi */}
          <div className="flex gap-6 text-sm font-medium text-slate-400 mr-4">
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
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition transform hover:scale-110"
              title="LinkedIn Profil"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
      </div>

      {/* MENU MOBILE POPUP */}
      {isOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-4 text-slate-300 text-sm font-medium bg-white/5 p-5 rounded-xl border border-white/10">

          {/* NAV LINKS */}
          <a onClick={() => setIsOpen(false)} href="#" className="hover:text-indigo-400">
            Beranda
          </a>

          <a onClick={() => setIsOpen(false)} href="#about" className="hover:text-indigo-400">
            Tentang
          </a>

          <a onClick={() => setIsOpen(false)} href="#projects" className="hover:text-indigo-400">
            Proyek
          </a>

          <a onClick={() => setIsOpen(false)} href="#skills" className="hover:text-indigo-400">
            Keahlian
          </a>

          <a onClick={() => setIsOpen(false)} href="#certifications" className="hover:text-indigo-400">
            Sertifikasi
          </a>

          <hr className="border-white/10" />

          {/* LINKEDIN MOBILE */}
          <a
            href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>

            <span>LinkedIn</span>
          </a>

          {/* CV MOBILE */}
          <a
            href="/cv-rafdi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Lihat CV
          </a>

          {/* KONTAK MOBILE */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-center"
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
