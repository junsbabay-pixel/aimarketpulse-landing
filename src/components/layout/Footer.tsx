import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-lg font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
              <span className="text-gray-900">AI </span>
              <span className="text-indigo-500">Market</span>
              <span className="text-gray-900"> Pulse</span>
            </span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Research reports for stocks, crypto, and futures — generated in minutes with 50+ cited sources.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm text-gray-500 hover:text-gray-900">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-gray-500 hover:text-gray-900">Disclaimer</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AI Market Pulse. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Disclaimer: AI Market Pulse provides research and analysis for informational purposes only. This is not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
