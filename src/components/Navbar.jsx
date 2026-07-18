'use client';

import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-5 bg-[#070314]/80 backdrop-blur-md border-b border-emerald-500/20 shadow-[0_4px_30px_rgba(16,185,129,0.05)]">

      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* LOGO */}
        <div className="text-xl font-bold tracking-tight flex items-center gap-2">
          <span>
            <span className="text-slate-400 font-medium">Portofolio</span>{" "}
            <span className="text-white font-bold">Rafdi</span>
          </span>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-emerald-400 hover:text-white focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-6">

          <div className="flex gap-6 text-sm font-medium text-slate-300 mr-4">
            <a href="#" className="hover:text-emerald-400 transition duration-300">Beranda</a>
            <a href="#about" className="hover:text-emerald-400 transition duration-300">Tentang</a>
            <a href="#projects" className="hover:text-emerald-400 transition duration-300">Proyek</a>
            <a href="#skills" className="hover:text-emerald-400 transition duration-300">Keahlian</a>
            <a href="#certifications" className="hover:text-emerald-400 transition duration-300">Sertifikasi</a>
          </div>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition transform hover:scale-110" title="LinkedIn Profil">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="/CV-Rafdi Zul Qisthi.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-medium text-sm transition group">
              <span className="transition duration-300">CV</span>
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-full text-sm transition transform hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              Kontak
            </a>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-slate-300 text-sm font-medium bg-[#0a0518] p-5 rounded-xl border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <a onClick={() => setIsOpen(false)} href="#" className="hover:text-emerald-400">Beranda</a>
          <a onClick={() => setIsOpen(false)} href="#about" className="hover:text-emerald-400">Tentang</a>
          <a onClick={() => setIsOpen(false)} href="#projects" className="hover:text-emerald-400">Proyek</a>
          <a onClick={() => setIsOpen(false)} href="#skills" className="hover:text-emerald-400">Keahlian</a>
          <a onClick={() => setIsOpen(false)} href="#certifications" className="hover:text-emerald-400">Sertifikasi</a>
          <hr className="border-white/10" />
          <a href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            <span>LinkedIn</span>
          </a>
          <a href="/CV-Rafdi Zul Qisthi.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">Lihat CV</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-full text-center font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">Kontak</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;