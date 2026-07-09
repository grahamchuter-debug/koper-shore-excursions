import Link from "next/link";
import { siteImages } from "@/lib/images";

export function HomeHero() {
  return (
    <section className="home-hero min-h-[85vh] flex items-center">
      <img
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.06),transparent_60%)]" aria-hidden="true" />
      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <p className="section-eyebrow mb-3 text-coastal-100/90">Koper cruise port · Slovenia</p>
        <h1 className="home-hero-heading">
          I can&apos;t wait to explore Slovenia
        </h1>
        <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-snug text-white/95 sm:text-2xl">
          That&apos;s the feeling we want you to leave with. Not a brochure. Not a booking page. A genuine sense of what awaits beyond your gangway.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Venetian old towns pressed against the Adriatic. Emerald lakes beneath the Julian Alps. Limestone cathedrals underground. Slovenia packs more into two hours of driving than countries ten times its size — and your ship is already here.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="#discover-slovenia" className="btn-accent">
            Discover Slovenia
          </Link>
          <Link
            href="#experience-paths"
            className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            What kind of day suits you?
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
