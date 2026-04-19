'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What exactly do I get in a report?',
    a: 'Each report is a 10-12 page PDF covering fundamental analysis, technical indicators, scenario modeling, and risk assessment. Reports include inline citations from 50+ data sources.',
  },
  {
    q: 'How long does a report take to generate?',
    a: 'Most reports generate in 3-8 minutes depending on the asset and market conditions.',
  },
  {
    q: 'What asset classes do you cover?',
    a: 'We currently cover US equities, major cryptocurrencies, and futures contracts.',
  },
  {
    q: 'Are the data sources real?',
    a: 'Absolutely. Every report includes 50+ inline citations linking directly to the source.',
  },
  {
    q: 'Is this financial advice?',
    a: 'No. Our reports are informational and educational tools for your own research.',
  },
  {
    q: 'Can I share reports with my team?',
    a: 'Yes — PDF reports can be freely shared. Pro and Max plans include team seats.',
  },
  {
    q: 'What if I\'m not satisfied?',
    a: 'Start with our 7-day free trial. No credit card required.',
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[680px] mx-auto">
        <p className="text-sm font-medium text-indigo-600 text-center mb-2">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12" style={{ fontFamily: 'Fraunces, serif' }}>
          Common questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 shrink-0 ml-3 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
