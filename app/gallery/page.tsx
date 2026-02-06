import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  // Swap these to your real images later (put files in /public/gallery)
  { src: "/gallery/crave1.png", alt: "Crave" },
  { src: "/gallery/crave2.jpeg", alt: "Crave" },
  { src: "/gallery/crave3.jpeg", alt: "Crave" },
  { src: "/gallery/crave4.jpeg", alt: "Crave" },
  { src: "/gallery/crave5.jpeg", alt: "Crave" },
  { src: "/gallery/crave6.jpeg", alt: "Crave" },
  { src: "/gallery/crave7.jpeg", alt: "Crave" },
  { src: "/gallery/crave8.jpeg", alt: "Crave" },
  { src: "/gallery/crave9.jpeg", alt: "Crave" },
  { src: "/gallery/crave10.jpeg", alt: "Crave" },
  { src: "/gallery/crave11.jpeg", alt: "Crave" },
  { src: "/gallery/crave12.jpeg", alt: "Crave" },
  { src: "/gallery/crave13.jpeg", alt: "Crave" },
  { src: "/gallery/crave14.jpeg", alt: "Crave" },
  { src: "/cravecover.jpeg", alt: "Crave" },
 
  
];

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen">
      {/* Ambient background blobs (subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute top-48 -left-24 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      {/* Smaller hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold tracking-wide text-emerald-300">
            Gallery
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            The Crave vibe.
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-purple-100">
            Drinks, treats, and behind-the-counter moments.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl border border-purple-200 bg-purple-50 p-8">
            <p className="text-sm font-semibold text-purple-900">
              Want to see more?
            </p>
            <p className="mt-2 text-slate-600">
              Follow us on Instagram for daily specials and new drops.
            </p>
            <a
              href="https://www.instagram.com/cravenutrition_edh/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-purple-900 shadow-lg hover:bg-emerald-400"
            >
              Open Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
