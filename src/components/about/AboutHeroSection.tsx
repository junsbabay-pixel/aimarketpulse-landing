'use client';

export default function AboutHeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[960px] px-6 pt-40 pb-0">
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-indigo-500">
          About Us
        </p>
        <h1
          className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
          style={{ animation: 'fadeUp 0.6s ease-out both' }}
        >
          We Turn Market Data Into Readable Research Reports
        </h1>
        <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-gray-500">
          We build tools that make professional-grade investment research
          accessible to everyone—not just hedge funds and institutional investors.
        </p>
      </div>
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
