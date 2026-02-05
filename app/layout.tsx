import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crave | Nutrition & Health Drink Cafe",
  description:
    "Protein shakes, loaded teas, specialty teas, and protein treats in El Dorado Hills, CA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900 antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar (desktop) */}
          <aside className="hidden w-72 flex-col border-r border-purple-200 bg-purple-100/90 px-8 py-10 backdrop-blur md:flex">
            {/* Logo only */}
            <Link href="/" className="mb-14 flex justify-center">
              <Image
                src="/cravelogo.png"
                alt="Crave Nutrition & Health Drink Cafe logo"
                width={200}
                height={200}
                priority
              />
            </Link>

            {/* Nav Links */}
            <nav className="flex flex-col gap-6 text-lg font-semibold text-purple-900">
              <Link href="/" className="hover:text-emerald-600 transition">
                Home
              </Link>
              <Link href="/menu" className="hover:text-emerald-600 transition">
                Menu
              </Link>
              <Link href="/about" className="hover:text-emerald-600 transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-emerald-600 transition">
                Contact
              </Link>
            </nav>

            {/* Push CTA to bottom */}
            <div className="flex-1" />

            {/* Text to Order */}
            <a
              href="sms:+15555555555?&body=Hi! I’d like to place an order."
              className="mt-10 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 text-base font-bold text-purple-900 shadow-lg transition hover:bg-emerald-400"
            >
              Text to Order
            </a>
          </aside>

          {/* Main content area */}
          <div className="flex flex-1 flex-col">
            {/* Mobile top nav */}
            {/* Mobile top nav */}
<header className="sticky top-0 z-50 border-b border-purple-300/40 bg-purple-100/80 px-4 py-3 backdrop-blur md:hidden">
  <div className="flex items-center justify-between">
    <Link href="/" className="shrink-0">
      <Image
        src="/cravelogo.png"
        alt="Crave Nutrition & Health Drink Cafe logo"
        width={56}
        height={56}
        priority
      />
    </Link>

    <div className="flex items-center gap-3">
      {/* Text to Order (placeholder number for now) */}
      <a
        href="sms:+15555555555?&body=Hi! I’d like to place an order."
        className="rounded-xl bg-emerald-500 px-3 py-2 text-sm font-bold text-purple-900 shadow-sm transition hover:bg-emerald-400"
      >
        Text
      </a>

      {/* Mobile menu dropdown */}
      <details className="relative">
        <summary className="list-none cursor-pointer rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm font-semibold text-purple-900 shadow-sm">
          Menu
        </summary>

        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-lg">
          <nav className="flex flex-col text-sm font-semibold text-purple-900">
            <Link href="/" className="px-4 py-3 hover:bg-purple-50">
              Home
            </Link>
            <Link href="/menu" className="px-4 py-3 hover:bg-purple-50">
              Menu
            </Link>
            <Link href="/about" className="px-4 py-3 hover:bg-purple-50">
              About
            </Link>
            <Link href="/contact" className="px-4 py-3 hover:bg-purple-50">
              Contact
            </Link>
            {/* Only include if/when you actually add the page */}
            {/* <Link href="/gallery" className="px-4 py-3 hover:bg-purple-50">
              Gallery
            </Link> */}
          </nav>
        </div>
      </details>
    </div>
  </div>
</header>


            {/* Page background + content */}
            <main className="relative flex-1 bg-gradient-to-b from-purple-50 via-white to-emerald-50">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Crave Nutrition & Health Drink Cafe · El
              Dorado Hills, CA
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
