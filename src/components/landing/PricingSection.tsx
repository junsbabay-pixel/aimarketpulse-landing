'use client';

export function PricingSection() {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: '/ 7 days',
      badge: 'Free Trial',
      badgeColor: 'bg-gray-100 text-gray-600',
      assets: '1 asset',
      emails: '1 email',
      features: [
        '1 full report',
        'PDF download',
        'All report sections',
      ],
    },
    {
      name: 'Basic',
      price: '$19',
      period: '/mo',
      badge: 'Best Value',
      badgeColor: 'bg-gray-100 text-gray-600',
      assets: '5 assets',
      emails: '1 email',
      features: [
        '5 reports/month',
        'PDF + online reader',
        'All asset classes',
        '50+ sources',
      ],
    },
    {
      name: 'Plus',
      price: '$39',
      period: '/mo',
      badge: '⭐ Most Popular',
      badgeColor: 'bg-indigo-50 text-indigo-700',
      highlighted: true,
      assets: '20 assets',
      emails: '1 email',
      features: [
        '20 reports/month',
        'PDF + online reader',
        'Priority generation',
        'All report sections',
      ],
    },
    {
      name: 'Pro',
      price: '$59',
      period: '/mo',
      badge: 'Pro',
      badgeColor: 'bg-gray-100 text-gray-600',
      assets: '50 assets',
      emails: '3 emails',
      features: [
        '50 reports/month',
        '3 team seats',
        'Priority generation',
        'Export to CSV',
      ],
    },
    {
      name: 'Max',
      price: '$99',
      period: '/mo',
      badge: 'Max',
      badgeColor: 'bg-gray-100 text-gray-600',
      assets: '200 assets',
      emails: '5 emails',
      features: [
        '200 reports/month',
        '5 team seats',
        'API access',
        'Dedicated support',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium text-indigo-600 text-center mb-2">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
          Simple, transparent pricing
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
          Start free, upgrade when you need more. No hidden fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl bg-white border p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                plan.highlighted ? 'border-indigo-500 shadow-md' : 'border-gray-200'
              }`}
            >
              <span className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${plan.badgeColor}`}>
                {plan.badge}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-500 mb-1">{plan.assets}</p>
              <p className="text-sm text-gray-500 mb-6">{plan.emails}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {plan.name === 'Free Trial' ? 'Start Free Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
