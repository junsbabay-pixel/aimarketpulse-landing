'use client';

const TICKERS = [
  'AAPL', 'TSLA', 'NVDA', 'BTC', 'ETH', 'SOL', 'Crude Oil', 'Gold', 'Soybeans',
];

export default function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-20">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h1
          className="font-[Fraunces] text-5xl md:text-6xl font-bold text-[#111827] leading-tight"
          style={{ animation: 'fadeUp 0.5s ease-out both' }}
        >
          Investment Research in Minutes, Not Hours
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#4B5563] font-[DM_Sans]">
          Pick any ticker — stocks, crypto, or futures. Get a 10-page PDF analysis report with
          technicals, fundamentals, capital flows, scenario forecasts, and 50+ cited sources.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#"
            className="inline-block rounded-lg bg-[#6366F1] px-7 py-3 text-sm font-semibold text-white font-[DM_Sans] transition hover:bg-[#4F46E5]"
          >
            Try Free for 7 Days
          </a>
          <a
            href="#how-it-works"
            className="inline-block rounded-lg border border-[#E5E7EB] px-7 py-3 text-sm font-semibold text-[#111827] font-[DM_Sans] transition hover:border-[#6366F1] hover:text-[#6366F1]"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {TICKERS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs text-[#6B7280] font-[DM_Sans]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
