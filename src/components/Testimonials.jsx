import React from 'react'

const quotes = [
  {
    text: 'I cannot believe this is sugar‑free. The mint is unreal and I still hit my protein goal.',
    author: 'Ari, Marathoner',
  },
  {
    text: 'Berry Burst is my late‑night savior. Fast delivery means the craving never wins.',
    author: 'Zoë, Designer',
  },
  {
    text: 'Portion size is perfect. I keep a box in the freezer for study breaks.',
    author: 'Dev, Grad Student',
  },
]

function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-10">What fans say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Quote key={i} {...q} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Quote({ text, author }) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl">
      <svg className="absolute -top-3 -left-3 h-10 w-10 text-white/20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 11c0-3.866 3.134-7 7-7v4c-1.657 0-3 1.343-3 3h3v7H7v-7z"/></svg>
      <p className="text-slate-100/95">{text}</p>
      <p className="mt-4 text-sm text-slate-300">— {author}</p>
    </div>
  )
}

export default Testimonials
