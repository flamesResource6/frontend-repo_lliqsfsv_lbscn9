import React from 'react'
import Hero from './components/Hero'
import Flavors from './components/Flavors'
import Testimonials from './components/Testimonials'
import Timeline from './components/Timeline'
import CTA from './components/CTA'

function App() {
  const handleOrderClick = () => {
    const cta = document.getElementById('cta')
    if (cta) cta.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(244,114,182,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.08),transparent_40%)]"></div>

      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-sky-500 text-white font-black shadow-lg">F</span>
            <div className="leading-tight">
              <p className="font-bold">FedEx Ice Cream</p>
              <p className="text-xs text-slate-300">Guilt‑Free. High‑Protein. Fast.</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#flavors" className="hover:text-white">Flavors</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#timeline" className="hover:text-white">Speed</a>
            <a href="#cta" className="hover:text-white">Order</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onOrderClick={handleOrderClick} />

        <div id="flavors">
          <Flavors />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="timeline">
          <Timeline />
        </div>

        <div id="cta">
          <CTA />
        </div>
      </main>

      <footer className="py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} FedEx Ice Cream — Delivered in a Flash</p>
      </footer>

      <style>{`
        @keyframes floatY { 0%, 100% { transform: translateY(-6px); } 50% { transform: translateY(6px); } }
        @keyframes progress { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-progress { animation: progress 4s linear infinite; }
      `}</style>
    </div>
  )
}

export default App
