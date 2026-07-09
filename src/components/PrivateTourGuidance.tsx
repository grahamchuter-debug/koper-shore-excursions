import Link from "next/link";

const PRIVATE_SUIT = [
  "Want flexibility over a fixed coach timetable",
  "Love photography and need time for the right light",
  "Have mobility considerations that group formats struggle with",
  "Travel with parents who need a gentler pace",
  "Prefer a quieter day without a bus full of strangers",
];

export function PrivateTourGuidance() {
  return (
    <section className="section-padding bg-white" id="private-tour-guidance">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl">
          <p className="section-eyebrow">The honest answer</p>
          <h2 className="section-title mt-2">Do you actually need a private day?</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="card-feature">
              <h3 className="font-display text-xl font-bold text-gray-900">A private day makes sense if you…</h3>
              <ul className="mt-5 space-y-3">
                {PRIVATE_SUIT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coastal-100 text-xs text-coastal-700" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-accent">
              <h3 className="font-display text-xl font-bold text-gray-900">But honestly…</h3>
              <p className="mt-5 text-sm leading-relaxed text-gray-700">
                Most first-time visitors don&apos;t need one. A morning in Koper&apos;s Old Town and an afternoon in Piran covers the essentials beautifully — without the cost of a private vehicle.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                We&apos;d rather tell you that now than sell you something you don&apos;t need. Private is brilliant when it&apos;s brilliant. Piran on a sunny afternoon is brilliant more often than people think.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/day-trips/relaxed-piran-koper-day" className="btn-secondary text-sm">
                  The gentle day we&apos;d choose
                </Link>
                <Link href="/day-trips/koper-old-town-walk" className="text-sm font-semibold text-maple-600 hover:text-maple-700">
                  Start with the Old Town →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
