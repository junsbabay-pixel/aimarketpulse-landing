'use client';

const REPORT_STEPS = [
  'Executive Summary & Rating',
  'Price Action & Technical Analysis',
  'Fundamental Valuation',
  'Capital Flow & Institutional Activity',
  'Sentiment & Social Signals',
  'Macro & Sector Context',
  'Three-Scenario Forecast',
  'Risk Assessment & Volatility',
  'Conclusion & Actionable Insights',
];

export default function ReportSampleSection() {
  return (
    <section className="bg-white py-20" style={{ padding: '80px 0' }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-sm font-semibold tracking-wide text-[#6366F1] font-[DM_Sans]">
          What You Get
        </p>
        <h2 className="mt-2 font-[Fraunces] text-4xl font-bold text-[#111827]">
          A report that actually looks like research
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left: Report Structure */}
          <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-7">
            <h3 className="mb-5 text-sm font-semibold text-[#111827] font-[DM_Sans]">
              Report Structure
            </h3>
            <ol className="space-y-3">
              {REPORT_STEPS.map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6366F1] text-xs font-semibold text-white font-[DM_Sans]">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[#4B5563] font-[DM_Sans]">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: SVG Chart Mock */}
          <div className="rounded-xl border border-[#E5E7EB] bg-white p-7">
            <h3 className="mb-4 text-sm font-semibold text-[#111827] font-[DM_Sans]">
              Sample Chart — Price &amp; Levels
            </h3>
            <svg viewBox="0 0 400 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
              {/* Grid lines */}
              <line x1="0" y1="40" x2="400" y2="40" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="#F3F4F6" strokeWidth="1" />
              <line x1="0" y1="160" x2="400" y2="160" stroke="#F3F4F6" strokeWidth="1" />

              {/* Resistance level */}
              <line x1="0" y1="55" x2="400" y2="55" stroke="#EF4444" strokeWidth="1" strokeDasharray="6 4" />
              <text x="404" y="59" fill="#EF4444" fontSize="10" fontFamily="DM Sans">Resistance</text>

              {/* Support level */}
              <line x1="0" y1="150" x2="400" y2="150" stroke="#10B981" strokeWidth="1" strokeDasharray="6 4" />
              <text x="404" y="154" fill="#10B981" fontSize="10" fontFamily="DM Sans">Support</text>

              {/* Price line */}
              <polyline
                fill="none"
                stroke="#6366F1"
                strokeWidth="2"
                strokeLinejoin="round"
                points="20,140 60,130 100,120 140,100 180,110 220,85 260,90 300,70 340,75 380,60"
              />

              {/* Fill area */}
              <polygon
                fill="url(#grad)"
                points="20,140 60,130 100,120 140,100 180,110 220,85 260,90 300,70 340,75 380,60 380,200 20,200"
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Current price dot */}
              <circle cx="380" cy="60" r="4" fill="#6366F1" />
            </svg>
            <p className="mt-3 text-xs text-[#6B7280] font-[DM_Sans]">
              Technical analysis with annotated support/resistance levels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
