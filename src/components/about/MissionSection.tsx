const painPoints = [
  {
    title: 'Prohibitively expensive',
    desc: 'A Bloomberg Terminal costs $24,000 per year—putting professional research tools out of reach for most individual investors.',
  },
  {
    title: 'Fragmented information',
    desc: 'Investors juggle 10+ websites, newsletters, and apps to piece together a complete picture of any single asset.',
  },
  {
    title: 'Single asset limitation',
    desc: 'Most affordable tools cover only one asset class—stocks or crypto, never both—forcing users into multiple subscriptions.',
  },
]

export default function MissionSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-indigo-500">
          Why We Built This
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Professional research shouldn&apos;t cost $24,000 a year
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
          The investment research industry is broken. Bloomberg is too expensive,
          free information is scattered across dozens of sites, and most tools
          only let you analyze one type of asset at a time. We set out to fix all
          three problems at once.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-gray-200 p-6 transition-colors hover:border-indigo-300"
            >
              <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-gray-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
