export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 px-6 py-8 text-white">


        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold tracking-wide text-emerald-300">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Let’s get you
            <span className="block text-emerald-400">taken care of.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-purple-100">
            The easiest way to reach us is on Instagram. Follow us for updates,
            specials, and to send us a message.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          {/* Instagram Card */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-purple-800">
              Get in touch
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Questions, orders, or just want to say hi? Instagram is the best
              way to connect with us.
            </p>

            <div className="mt-8 rounded-3xl border border-purple-200 bg-purple-50 p-8 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">
                Instagram
              </p>
              <h3 className="mt-2 text-2xl font-bold text-purple-900">
                @CRAVENUTRITION_EDH
              </h3>
              <p className="mt-3 text-slate-700">
                Send us a DM anytime — we’re happy to help with questions,
                orders, or catering inquiries.
              </p>

              <a
                href="https://www.instagram.com/cravenutrition_edh/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg hover:bg-emerald-400"
              >
                Open Instagram
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-purple-900">Visit Crave</h3>
            <p className="mt-2 text-slate-600">
              3941 Park Dr Ste 60, El Dorado Hills, CA 95762
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl border border-purple-200 bg-white shadow-sm">
              <iframe
                title="Crave Nutrition EDH Location"
                src="https://www.google.com/maps?q=3941+Park+Dr+Ste+60+El+Dorado+Hills+CA+95762&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/3941+Park+Dr+Ste+60,+El+Dorado+Hills,+CA+95762"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg hover:bg-emerald-400"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
