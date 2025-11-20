import React from 'react'

function Hero({ onOrderClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-sky-500/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-emerald-500/30 to-indigo-500/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-3 py-1 backdrop-blur">
              <span className="text-xs">New</span>
              <span className="h-1 w-1 rounded-full bg-white/60"></span>
              <span className="text-xs">Sugar‑Free • High‑Protein • Mini‑Sized</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              FedEx Ice Cream
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-fuchsia-200 to-emerald-200">Guilt‑Free Indulgence</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200/90 max-w-xl">
              Mini delights with max satisfaction. Low‑calorie, protein‑packed, and delivered to your door in 30 minutes. Always cold. Always on time.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button onClick={onOrderClick} className="group relative inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_40px_rgba(255,255,255,0.25)] transition">
                Order now
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </button>
              <div className="flex items-center gap-2 text-slate-200/90">
                <TruckIcon className="h-5 w-5 text-emerald-300" />
                <span>Delivered in 30 minutes—guaranteed</span>
              </div>
            </div>

            <ul className="grid grid-cols-3 gap-4 pt-6 text-sm text-slate-200/90">
              <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur">
                <span className="block font-bold text-white">0g</span>
                <span className="text-xs">Added Sugar</span>
              </li>
              <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur">
                <span className="block font-bold text-white">12g</span>
                <span className="text-xs">Protein per cup</span>
              </li>
              <li className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 backdrop-blur">
                <span className="block font-bold text-white">90</span>
                <span className="text-xs">Calories</span>
              </li>
            </ul>
          </div>

          {/* Product visual */}
          <div className="relative">
            <div className="relative mx-auto h-[26rem] w-[26rem] sm:h-[30rem] sm:w-[30rem] perspective-1000">
              {/* 3D styled card stack */}
              <ProductCard className="rotate-[-10deg] -translate-x-8 -translate-y-6" label="Vanilla Sky" colorFrom="from-sky-400" colorTo="to-indigo-400" emoji="🍦" />
              <ProductCard className="rotate-[8deg] translate-x-10 translate-y-4" label="Berry Burst" colorFrom="from-fuchsia-400" colorTo="to-pink-400" emoji="🍓" delay={120} />
              <ProductCard className="rotate-[2deg] -translate-y-2" label="Mint Rocket" colorFrom="from-emerald-400" colorTo="to-teal-400" emoji="🌿" delay={220} />

              {/* Delivery badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-slate-900 rounded-2xl px-4 py-2 shadow-xl border border-white/40 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <FlashIcon className="h-4 w-4 text-amber-500" /> 30‑min delivery by FedEx
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ label, colorFrom, colorTo, emoji, className = '', delay = 0 }) {
  return (
    <div
      className={`absolute inset-0 select-none transform-gpu transition duration-500 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-44 sm:h-64 sm:w-52 rounded-3xl shadow-2xl border border-white/20 bg-gradient-to-br ${colorFrom} ${colorTo} text-white hover:rotate-[2deg] hover:scale-[1.03] transition-transform`}
        style={{
          animation: `floatY 6s ease-in-out ${delay}ms infinite`,
        }}
      >
        <div className="absolute -inset-[1px] rounded-3xl bg-white/10" />
        <div className="relative h-full w-full p-5 flex flex-col items-center justify-between">
          <div className="text-5xl drop-shadow">{emoji}</div>
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-white/90">Mini Cup</p>
            <p className="text-lg font-bold">{label}</p>
          </div>
          <div className="text-[10px] bg-white/20 px-2 py-1 rounded-full">90 cal • 12g protein</div>
        </div>
      </div>
    </div>
  )
}

function TruckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3H3v13h13V3z" />
      <path d="M16 8h5l-1.5-3H16" />
      <circle cx="6.5" cy="18.5" r="2" />
      <circle cx="17.5" cy="18.5" r="2" />
    </svg>
  )
}

function FlashIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2l10 0 -6 8 6 0 -10 12 4 -10 -6 0z" />
    </svg>
  )
}

export default Hero
