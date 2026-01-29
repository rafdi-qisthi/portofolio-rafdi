import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang", href: "#about" },
    { name: "Proyek", href: "#projects" },
    { name: "Keahlian", href: "#skills" },
    { name: "Sertifikasi", href: "#certifications" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-4 md:py-6 flex justify-between items-center bg-[#0a0c1b]/80 backdrop-blur-xl border-b border-white/5">
      
      {/* LOGO */}
      <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2 z-[110]">
        <span>Rafdi<span className="text-indigo-400">.Dev</span></span>
      </div>

      {/* MENU DESKTOP (Muncul di Laptop) */}
      <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-sm font-medium text-slate-400 mr-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-indigo-400 transition">{link.name}</a>
              ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="/cv-rafdi.pdf" target="_blank" className="text-slate-300 hover:text-white font-medium text-sm transition">CV</a>
            <a href="#contact" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-sm transition shadow-lg shadow-indigo-500/20">Kontak</a>
          </div>
      </div>

      {/* TOMBOL HAMBURGER (Mobile) */}
      <button 
        className="md:hidden text-white p-2 z-[110]" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

{/* MENU MOBILE OVERLAY - Dengan Background Abu-Abu Profesional */}
      <div className={`fixed inset-0 bg-[#111827] flex flex-col items-start justify-start pt-28 px-8 transition-all duration-300 z-[150] ${isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}>
          
          {/* Tombol Close */}
          <button className="absolute top-8 right-8 text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* List Menu */}
          <div className="flex flex-col gap-6 w-full">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-semibold text-slate-100 hover:text-indigo-400 border-b border-white/5 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Area Aksi Bawah */}
          <div className="mt-10 w-full flex flex-col gap-6">
            <div className="flex items-center gap-6">
                <a href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/" target="_blank" className="text-slate-400 hover:text-white transform scale-150 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="/cv-rafdi.pdf" target="_blank" className="text-indigo-400 font-bold text-xl underline underline-offset-8 decoration-indigo-500/50">
                   Download CV
                </a>
            </div>
            
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-500/20 text-lg">
              Hubungi Saya
            </a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;