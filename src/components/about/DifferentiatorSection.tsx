const items = [
  {
    num: '01',
    title: 'Multi-Asset Coverage',
    desc: 'The only platform that covers US stocks, cryptocurrencies, and futures in a single, unified report.',
    tag: 'Stocks · Crypto · Futures',
  },
  {
    num: '02',
    title: '50+ Verifiable Data Sources',
    desc: 'Every claim links back to primary sources so you can verify the research yourself.',
    tag: 'Transparency · Trust',
  },
  {
    num: '03',
    title: 'Three-Scenario Analysis',
    desc: 'Bull, Base, and Bear cases with probability weights—so you see the full range of outcomes.',
    tag: 'Risk Analysis',
  },
  {
    num: '04',
    title: '$19/Month vs $24,000/Year',
    desc: "1/1000 the cost of Bloomberg Terminal. Professional-grade research shouldn't require a corporate budget.",
    tag: 'Affordable · Accessible',
  },
]

export default function DifferentiatorSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-indigo-500">
          How We Work
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          What sets us apart
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.num}
              className="rounded-xl border border-gray-200 p-6 transition-colors hover:border-indigo-300"
            >
              <span className="text-xs font-semibold text-indigo-500">
                {item.num}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {item.desc}
              </p>
              <p className="mt-4 text-xs text-gray-400">{item.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
