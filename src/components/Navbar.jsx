{/* MENU MOBILE OVERLAY */}
<div className={`fixed inset-0 bg-[#0a0c1b] transition-all duration-300 z-[105] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
    {/* Container Utama untuk Spacing */}
    <div className="flex flex-col h-full px-8 py-20">
        
        {/* List Menu Utama */}
        <div className="flex flex-col items-center gap-6 mt-10">
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-2xl font-semibold text-slate-200 hover:text-indigo-400 transition active:scale-95"
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </a>
            ))}
        </div>

        {/* Garis Pembatas & Menu Tambahan */}
        <div className="mt-auto mb-10 flex flex-col items-center gap-8">
            <div className="w-full h-[1px] bg-white/10"></div>
            
            <a href="/cv-rafdi.pdf" target="_blank" className="text-indigo-400 font-bold text-xl hover:text-white transition">
                Download CV
            </a>
            
            <div className="flex items-center gap-10">
                {/* LinkedIn Icon */}
                <a href="https://linkedin.com/in/rafdi-zul-qisthi-a617a8360/" target="_blank" className="text-slate-400 hover:text-white transform scale-[2] transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
            </div>

            <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="w-full max-w-xs text-center py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/20 active:bg-indigo-700"
            >
                Hubungi Saya
            </a>
        </div>
    </div>
</div>