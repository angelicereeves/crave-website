import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 px-6 py-24 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Big Logo */}
          <Image
            src="/cravelogo.png"
            alt="Crave Nutrition & Health Drink Cafe logo"
            width={250}
            height={250}
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
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg hover:bg-emerald-400"
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
    </main>
  );
}
