import Link from "next/link";
import { FeaturedExcursionCard } from "@/components/FeaturedExcursionCard";
import type { ExcursionPage } from "@/data/types";

export function FeaturedExcursionsSection({ excursions }: { excursions: ExcursionPage[] }) {
  return (
    <section className="section-padding bg-coastal-50/40" id="recommendations">
      <div className="container-wide">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">When you&apos;re ready for specifics</p>
            <h2 className="section-title mt-2">Practical days we&apos;d recommend</h2>
            <p className="section-subtitle">
              These aren&apos;t products we&apos;re selling. They&apos;re the days we&apos;d describe if you called us from the ship — who each suits, how long it needs, and whether it fits your port window.
            </p>
          </div>
          <Link href="/day-trips" className="btn-secondary shrink-0">
            Read all day guides
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((excursion) => (
            <FeaturedExcursionCard key={excursion.slug} excursion={excursion} showEditorialNote />
          ))}
        </div>
      </div>
    </section>
  );
}
