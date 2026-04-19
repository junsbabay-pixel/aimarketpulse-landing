export default function NewsletterCTASection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-[720px] rounded-2xl bg-[#EEF2FF] py-12 px-10 text-center">
        <h2
          className="text-3xl font-bold text-gray-900 mb-3"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-500 mb-8">
          Free weekly market summary — read it in 3 minutes. Unsubscribe
          anytime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={process.env.NEXT_PUBLIC_SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500 text-white border-2 border-indigo-500 px-8 py-3 font-semibold hover:bg-indigo-600 hover:border-indigo-600 transition-colors"
          >
            Subscribe via Substack
          </a>
          <a
            href={process.env.NEXT_PUBLIC_BEEHIIV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white text-indigo-500 border-2 border-indigo-500 px-8 py-3 font-semibold hover:bg-indigo-50 transition-colors"
          >
            Subscribe via Beehiiv
          </a>
        </div>
        <p className="text-sm text-gray-400">
          Both platforms deliver the same content. Choose your preference.
        </p>
      </div>
    </section>
  );
}
