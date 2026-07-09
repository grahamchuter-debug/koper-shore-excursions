import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-coastal-800 to-coastal-900 text-white">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Slovenia is waiting. Take your time deciding.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
          There&apos;s no rush. No countdown timer. No &ldquo;book now&rdquo; pressure. When you&apos;ve found the Slovenia that fits your day, we&apos;ll help you make it happen.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/koper-old-town-vs-day-trips" className="btn-accent">
            Read our decision guide
          </Link>
          <Link
            href="/enquire"
            className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            Ask the editor
          </Link>
        </div>
      </div>
    </section>
  );
}
