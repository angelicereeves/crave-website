import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-white">
        {/* Background Image */}
        <Image
          src="/cravecover.jpeg"
          alt="Crave Nutrition & Health Drink Cafe background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-950/75" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Big Logo */}
          <Image
            src="/cravelogo.png"
            alt="Crave Nutrition & Health Drink Cafe logo"
            width={300}
            height={300}
            priority
            className="mb-8 drop-shadow-xl"
          />

          <p className="text-sm font-semibold tracking-wide text-emerald-300">
            Nutrition & Health Drink Cafe
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Healthy habits
            <span className="block text-emerald-400">start here.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-7 text-purple-100">
            Protein shakes, energizing teas, and feel-good treats crafted to
            fuel your day — without sacrificing flavor.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg transition hover:bg-emerald-400"
            >
              View Menu
            </a>

            <a
              href="sms:+19165382378?&body=Hi! I’d like to place an order."
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg transition hover:bg-emerald-400"
            >
              Text to Order
            </a>
          </div>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-purple-900">
            Hours of Operation
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-6 shadow-sm">
              <p className="text-lg font-semibold text-purple-900">
                Monday – Friday
              </p>
              <p className="mt-2 text-xl font-bold text-emerald-600">
                7:00 AM – 5:00 PM
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6 shadow-sm">
              <p className="text-lg font-semibold text-purple-900">
                Saturday – Sunday
              </p>
              <p className="mt-2 text-xl font-bold text-emerald-600">
                8:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
