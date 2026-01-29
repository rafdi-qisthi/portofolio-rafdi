'use client';

import { useState } from "react";

const Navbar = () => {

  // STATE UNTUK MENU MOBILE
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 bg-[#0a0c1b]/60 backdrop-blur-md border-b border-white/5">

      {/* WRAPPER */}
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <div className="text-xl font-bold tracking-tight text-white">
          Rafdi<span className="text-indigo-400">.Dev</span>
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
        <div className="hidden md:flex items-center gap-8">

          {/* Link Navigasi */}
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-indigo-400 transition">Beranda</a>
            <a href="#about" className="hover:text-indigo-400 transition">Tentang</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Proyek</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Keahlian</a>
            <a href="#certifications" className="hover:text-indigo-400 transition">Sertifikasi</a>
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              LinkedIn
            </a>

            {/* CV */}
            <a
              href="/cv-rafdi.pdf"
              target="_blank"
              className="text-slate-300 hover:text-white transition"
            >
              CV
            </a>

            {/* KONTAK */}
            <a
              href="#contact"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm transition"
            >
              Kontak
            </a>
          </div>
        </div>
      </div>

      {/* MENU MOBILE POPUP */}
      {isOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-4 text-slate-300 text-sm font-medium bg-white/5 p-5 rounded-xl border border-white/10">

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

          <a href="/cv-rafdi.pdf" target="_blank" className="hover:text-white">
            Lihat CV
          </a>

          <a
            href="#contact"
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
