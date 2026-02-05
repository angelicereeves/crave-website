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
        {/* Top Navbar */}
        <header className="sticky top-0 z-50 border-b border-purple-300/40 bg-purple-100/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            {/* Logo (Home) */}
            <Link href="/" className="flex items-center">
              <Image
                src="/cravelogo.png"
                alt="Crave Nutrition & Health Drink Cafe logo"
                width={84}
                height={84}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 text-base font-semibold text-purple-900 md:flex">
              <Link href="/" className="hover:text-emerald-600 transition">
                Home
              </Link>
              <Link href="/menu" className="hover:text-emerald-600 transition">
                Menu
              </Link>
              <Link href="/gallery" className="hover:text-emerald-600 transition">
              Gallery
              </Link>

              <Link href="/about" className="hover:text-emerald-600 transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-emerald-600 transition">
                Contact
              </Link>

              {/* Text to Order (placeholder number) */}
              <a
                href="sms:+15555555555?&body=Hi! I’d like to place an order."
                className="ml-2 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-purple-900 shadow-lg transition hover:bg-emerald-400"
              >
                Text to Order
              </a>
            </nav>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <details className="relative">
                <summary className="list-none cursor-pointer rounded-2xl border border-purple-200 bg-white px-4 py-2 text-sm font-semibold text-purple-900 shadow-sm">
                  ☰
                </summary>

                <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-purple-200 bg-white shadow-lg">
                  <nav className="flex flex-col text-sm font-semibold text-purple-900">
                    <Link href="/" className="px-4 py-3 hover:bg-purple-50">
                      Home
                    </Link>
                    <Link href="/menu" className="px-4 py-3 hover:bg-purple-50">
                      Menu
                    </Link>
                    <Link href="/gallery" className="px-4 py-3 hover:bg-purple-50">
                      Gallery
                    </Link>

                    <Link href="/about" className="px-4 py-3 hover:bg-purple-50">
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="px-4 py-3 hover:bg-purple-50"
                    >
                      Contact
                    </Link>

                    <div className="border-t border-slate-200" />

                    <a
                      href="sms:+15555555555?&body=Hi! I’d like to place an order."
                      className="px-4 py-3 text-emerald-700 hover:bg-emerald-50"
                    >
                      Text to Order
                    </a>
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </header>

        {/* Global background */}
        <main className="bg-gradient-to-b from-purple-50 via-white to-emerald-50">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-slate-50 px-6 py-10">
          <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Crave Nutrition & Health Drink Cafe · El
            Dorado Hills, CA
          </div>
        </footer>
      </body>
    </html>
  );
}
