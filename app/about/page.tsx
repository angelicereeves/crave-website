export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 px-6 py-8 text-white">


        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold tracking-wide text-emerald-300">
            About Crave
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            A feel-good café built for
            <span className="block text-emerald-400">real life.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-purple-100">
            We’re here for the busy mornings, the post-work reset, and the
            “I’m trying to be healthier but still want something delicious”
            moments.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-purple-800">
              Our story
            </h2>
            <p className="mt-5 text-lg leading-7 text-slate-600">
              Crave is a Nutrition & Health Drink Café in El Dorado Hills built
              around one simple idea: healthy choices should feel easy — and
              taste amazing.
            </p>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              From protein-packed shakes and energizing teas to feel-good treats,
              everything we serve is designed to support your goals without
              sacrificing flavor.
            </p>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Whether you’re stopping in after the gym, grabbing a quick pick-me-up,
              or treating yourself with friends, we want Crave to feel like your
              favorite spot — warm, welcoming, and uplifting.
            </p>
          </div>

          {/* Values Card */}
          <div className="rounded-3xl border border-purple-200 bg-purple-50 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-purple-900">What we’re about</h3>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>
                  <span className="font-semibold text-purple-900">Balance:</span>{" "}
                  options that fit your lifestyle — from lighter to indulgent.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>
                  <span className="font-semibold text-purple-900">Community:</span>{" "}
                  friendly faces, good vibes, and a place to recharge.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>
                  <span className="font-semibold text-purple-900">Quality:</span>{" "}
                  ingredients and recipes we’re proud to serve every day.
                </span>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-purple-800">
                Fan favorites
              </p>
              <p className="mt-2 text-slate-600">
                Protein shakes • Energizing teas • Protein coffees • Waffles •
                Bowls • Treats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-purple-800">
            What you’ll find at Crave
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-600">
                Protein-forward
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Fuel that tastes like a treat
              </h3>
              <p className="mt-3 text-slate-600">
                High-protein options that keep you full and satisfied — without
                feeling heavy.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-600">
                Energy + refresh
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Bright, refreshing sips
              </h3>
              <p className="mt-3 text-slate-600">
                Teas and refreshers that hit the spot — perfect for mornings,
                afternoons, and everything in between.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-600">
                Good vibes
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                A café that feels like a reset
              </h3>
              <p className="mt-3 text-slate-600">
                A welcoming space where you can come as you are and leave feeling
                a little better.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border border-purple-200 bg-purple-50 p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold text-purple-900">
                Ready to explore the menu?
              </h3>
              <p className="mt-2 text-slate-600">
                Find your next favorite shake, tea, or treat.
              </p>
            </div>

            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg hover:bg-emerald-400"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
