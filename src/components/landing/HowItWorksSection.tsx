'use client';

const STEPS = [
  {
    num: '01',
    title: 'Pick Your Asset',
    desc: 'Enter any ticker — stocks, crypto, or futures. We cover 10,000+ global assets.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'AI Generates Your Report',
    desc: 'Our engine analyzes technicals, fundamentals, capital flows, and sentiment — then assembles a structured 10-page report.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Download or Read Online',
    desc: 'Get a professional PDF you can share, or read the full report with interactive charts in your browser.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#F9FAFB]" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-sm font-semibold tracking-wide text-[#6366F1] font-[DM_Sans]">
          How It Works
        </p>
        <h2 className="mt-2 font-[Fraunces] text-4xl font-bold text-[#111827]">
          Three steps. That&apos;s it.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="rounded-xl border border-[#E5E7EB] bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderRadius: 12, padding: 28 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#6366F1]">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-[#6366F1] font-[DM_Sans]">{s.num}</span>
              <h3 className="mt-1 text-lg font-semibold text-[#111827] font-[DM_Sans]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#4B5563] font-[DM_Sans]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
