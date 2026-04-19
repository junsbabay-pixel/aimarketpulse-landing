'use client';

const FEATURES = [
  {
    title: 'Multi-Asset Coverage',
    desc: 'US & global stocks, crypto, futures, forex — over 10,000 tickers supported.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3h-8l-2 4h12z" />
      </svg>
    ),
  },
  {
    title: '50+ Cited Sources Per Report',
    desc: 'Every claim is backed by real data — SEC filings, analyst reports, on-chain metrics, and more.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Three-Scenario Forecasting',
    desc: 'Bull, base, and bear cases with probability ranges — so you know the upside and the risk.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Professional PDF Delivery',
    desc: 'Clean, branded PDF you can share with clients, partners, or your portfolio manager.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: 'Generated in Minutes',
    desc: 'From ticker to full report in under 5 minutes. No waiting for analyst queues.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Market Data',
    desc: 'Reports pull live pricing, volume, and order-book data — not yesterday\'s numbers.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-sm font-semibold tracking-wide text-[#6366F1] font-[DM_Sans]">
          Core Capabilities
        </p>
        <h2 className="mt-2 font-[Fraunces] text-4xl font-bold text-[#111827]">
          Built for people who actually read research
        </h2>
        <p className="mt-4 max-w-2xl text-base text-[#4B5563] font-[DM_Sans]">
          Not a chatbot. Not a dashboard widget. A proper report you&apos;d be comfortable sharing
          with your portfolio manager.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-[#E5E7EB] bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderRadius: 12, padding: 28 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#6366F1]">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-[#111827] font-[DM_Sans]">{f.title}</h3>
              <p className="mt-2 text-sm text-[#4B5563] font-[DM_Sans]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
