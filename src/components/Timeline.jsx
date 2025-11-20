import React from 'react'

function Timeline() {
  const steps = [
    { title: 'Order Placed', desc: 'Choose your flavors and check out', t: '0:00' },
    { title: 'Packed Cold', desc: 'Insulated, anti‑melt packaging', t: '0:05' },
    { title: 'FedEx Pickup', desc: 'Handed to a nearby courier', t: '0:12' },
    { title: 'At Your Door', desc: 'Still frosty, always on time', t: '0:30' },
  ]

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Fast by design</h2>
          <p className="text-slate-300 max-w-md text-sm">A 30‑minute timeline from tap to taste. Watch the progress glow across the line.</p>
        </div>

        <div className="relative mt-8">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-white/10 overflow-hidden rounded-full">
            <div className="h-full bg-gradient-to-r from-emerald-300 via-sky-300 to-fuchsia-300 animate-progress" />
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="pt-10 text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center text-white font-bold shadow-lg">{i + 1}</div>
                <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
                <p className="text-slate-300 text-sm">{s.desc}</p>
                <p className="mt-1 text-xs text-slate-400">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
