import Link from "next/link";
import { getExcursionImage } from "@/lib/images";

const RECOMMENDED_SLUG = "koper-old-town-walk";

export function EditorsRecommendation() {
  const image = getExcursionImage(RECOMMENDED_SLUG);

  return (
    <section className="section-padding bg-coastal-50/40" id="editors-recommendation">
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-coastal-900/10 lg:bg-gradient-to-t lg:from-coastal-900/40 lg:to-transparent" aria-hidden="true" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="section-eyebrow">If this were our parents visiting for one day</p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
                This is what we&apos;d genuinely recommend
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  Espresso in Tito Square while the Old Town is still quiet. Praetorian Palace, the bell tower, terracotta roofs falling toward the Adriatic — ten minutes from the ship, and most passengers walk straight past it on the coach to Bled.
                </p>
                <p>
                  If we had five hours, we&apos;d add Piran — harbour lunch, town walls, the Adriatic at the pace it deserves. If we had eight, we&apos;d consider Bled. But we&apos;d never skip Koper entirely. That would be like visiting Venice and only seeing the airport.
                </p>
                <p>
                  This isn&apos;t a sales pitch. It&apos;s the rhythm we&apos;d want someone we love to follow on their first morning in Slovenia — unhurried, curious, and entirely free from checklist anxiety.
                </p>
              </div>
              <div className="mt-8 rounded-xl border border-maple-200/60 bg-maple-50/50 p-5">
                <p className="text-sm font-medium text-gray-900">
                  When you&apos;re ready to make it happen
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  We&apos;ve written practical guides for each of these days — who they suit, how long they need, and what to expect on the ground.
                </p>
                <Link
                  href="/koper-old-town-vs-day-trips"
                  className="btn-accent mt-4 inline-flex"
                >
                  Read our decision guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
