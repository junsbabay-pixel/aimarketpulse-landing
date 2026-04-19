const stats = [
  { value: '50+', label: 'Data Sources Integrated' },
  { value: '3', label: 'Asset Classes Covered' },
  { value: '$19', label: 'Starting Price / Month' },
]

export default function TeamSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-indigo-500">
          Who We Are
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          A small team with a clear mission
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
          We&apos;re a small, independent team—not a big corporation. That means
          we move fast, listen closely, and build exactly what our users need
          instead of chasing enterprise sales quotas.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl border border-gray-200 p-8 transition-colors hover:border-indigo-300"
            >
              <span className="text-4xl font-bold text-indigo-500">
                {s.value}
              </span>
              <span className="mt-2 text-sm text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
