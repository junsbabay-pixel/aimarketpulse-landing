export default function ContactInfoSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-2xl font-bold text-gray-900 mb-8 text-center"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Other Ways to Reach Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Email
            </h3>
            <a
              href="mailto:hello@aimarketpulse.com"
              className="text-indigo-500 hover:underline"
            >
              hello@aimarketpulse.com
            </a>

            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mt-6 mb-3">
              Social
            </h3>
            <div className="flex gap-4">
              <a href="https://x.com/aimarketpulse" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                X
              </a>
              <a href="https://linkedin.com/company/aimarketpulse" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
              <a href="https://reddit.com/r/aimarketpulse" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                Reddit
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Response Time
            </h3>
            <p className="text-gray-500">
              We typically respond within 24 hours on business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
