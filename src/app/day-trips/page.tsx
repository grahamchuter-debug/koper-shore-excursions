import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { FeaturedExcursionCard } from "@/components/FeaturedExcursionCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { excursionsHubImage } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Day Trips from Koper — Our Editorial Recommendations",
  description:
    "Practical day guides for Slovenia from Koper cruise port — Old Town, Piran, Lake Bled, Postojna and Istria. Who each suits, how long it needs, and our honest take.",
  path: "/day-trips",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: ["Slovenia day trips Koper", "Lake Bled cruise", "Piran from Koper", "Koper Old Town"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Day Trips", path: "/day-trips" },
];

export default function DayTripsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Day Trips from Koper", description: "Editorial day guides for Slovenia from Koper cruise port.", path: "/day-trips" })]} />
      <PhotoHeroBand
        image={excursionsHubImage}
        eyebrow="When you know the Slovenia you want"
        title="Practical days we'd recommend"
        subtitle="Each guide answers the question we'd ask ourselves: if this were our parents visiting for one day, what would we genuinely suggest?"
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mb-8 max-w-3xl text-gray-700 leading-relaxed">
            These pages exist to help you decide — not to rush you into booking. Read the editorial note on each, check the return-to-ship snapshot, and use our{" "}
            <Link href="/koper-old-town-vs-day-trips" className="font-medium text-coastal-700 hover:underline">Koper vs day trips guide</Link>{" "}
            if you&apos;re still weighing the big question.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => (
              <FeaturedExcursionCard key={e.slug} excursion={e} showEditorialNote />
            ))}
          </div>
          <EnquiryCTA />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
