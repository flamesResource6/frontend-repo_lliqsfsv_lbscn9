import React from 'react'

const flavors = [
  { name: 'Vanilla Sky', desc: 'Classic and clean with real vanilla.', emoji: '🍦', colors: 'from-sky-400 to-indigo-400' },
  { name: 'Berry Burst', desc: 'Strawberry & raspberry fusion.', emoji: '🍓', colors: 'from-fuchsia-400 to-pink-400' },
  { name: 'Mint Rocket', desc: 'Mint that lifts off with cocoa nibs.', emoji: '🌿', colors: 'from-emerald-400 to-teal-400' },
  { name: 'Cocoa Cloud', desc: 'Light chocolate, heavy on flavor.', emoji: '🍫', colors: 'from-amber-500 to-rose-400' },
  { name: 'Matcha Drift', desc: 'Umami green tea meets cream.', emoji: '🍵', colors: 'from-lime-400 to-emerald-500' },
  { name: 'Coconut Comet', desc: 'Tropical, to the door.', emoji: '🥥', colors: 'from-cyan-400 to-sky-500' },
]

function Flavors() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Flavors</h2>
          <p className="text-slate-300 max-w-md text-sm">Mini cups with macro-friendly macros. Hover to tilt. Tap to peek nutrition.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavors.map((f, i) => (
            <FlavorCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FlavorCard({ name, desc, emoji, colors }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition" />
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 overflow-hidden shadow-2xl">
        <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${colors} blur-2xl opacity-40`} />

        <div className="flex items-start gap-4">
          <div className="text-4xl drop-shadow-sm">{emoji}</div>
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-slate-300 text-sm">{desc}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-slate-100/90">
          <Pill>90 cal</Pill>
          <Pill>12g protein</Pill>
          <Pill>0g sugar</Pill>
        </div>

        <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center perspective-1000">
          <div className={`h-24 w-24 rounded-2xl bg-gradient-to-br ${colors} shadow-2xl border border-white/30 transform-gpu transition duration-300 group-hover:rotate-[8deg] group-hover:translate-y-[-4px] group-hover:scale-105 flex items-center justify-center text-3xl`}>🍨</div>
        </div>
      </div>
    </div>
  )
}

function Pill({ children }) {
  return <span className="bg-white/10 border border-white/15 px-3 py-1 rounded-full">{children}</span>
}

export default Flavors
