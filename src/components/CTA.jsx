import React, { useMemo, useState, useEffect } from 'react'

function CTA() {
  const [eta, setEta] = useState(30)
  useEffect(() => {
    const i = setInterval(() => {
      setEta((e) => (e > 12 ? e - 1 : 30))
    }, 1200)
    return () => clearInterval(i)
  }, [])

  const shippingMsg = useMemo(() => `Order now — delivery in ~${eta} min`, [eta])

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur p-8 sm:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Ready to treat yourself?</h3>
          <p className="mt-3 text-slate-200">
            High‑protein, low‑calorie, and right to your door. The fastest dessert in town.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_14px_40px_rgba(255,255,255,0.3)] transition">
              Build your box
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <div className="text-emerald-200/90 text-sm font-medium bg-emerald-500/10 border border-emerald-400/20 rounded-full px-4 py-2">
              {shippingMsg}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
