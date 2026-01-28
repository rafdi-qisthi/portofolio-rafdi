import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0a0c1b] text-slate-300 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15]"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="relative z-10 py-8 text-center text-slate-600 text-sm border-t border-white/5">
        <p>&copy; 2026 Rafdi.Dev. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App