'use client';

import { useState } from 'react';

export function FinalCTASection() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 px-4 bg-white">
      <div className="bg-gray-50 border border-gray-200 rounded-2xl py-14 px-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
          Stay in the loop
        </h2>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
          Get monthly updates on new assets, features, and market insights.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-[420px] mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button type="submit" className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shrink-0">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
