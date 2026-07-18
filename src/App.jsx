import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (

    <div className="w-full min-h-screen bg-[#070314] text-slate-200 selection:bg-emerald-500/40 selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>
        {/* Cahaya Emerald di tengah */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/20 blur-[150px] rounded-full"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="relative z-10 py-8 text-center text-slate-500 text-sm border-t border-white/10">
        <p>&copy; 2026 Rafdi.Dev. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App