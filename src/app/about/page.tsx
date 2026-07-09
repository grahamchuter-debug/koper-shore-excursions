import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About — Slovenia from Koper",
  description: "We're not building excursion websites anymore. We're building the internet's best guide to experiencing Slovenia from a cruise ship.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Slovenia from Koper", description: SITE.description, path })]} />
      <PageHero title="We're not building excursion websites anymore" subtitle="We're building the guide every cruiser wishes they'd read before the gangway opened." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} exists for one reason: to help you experience Slovenia properly from your cruise ship. Not to sell you the first tour that pays the highest commission. Not to fill a page with affiliate links. To answer the question we ask ourselves about every recommendation: if this were our parents visiting Slovenia for one day, what would we genuinely suggest?
            </p>
            <p>
              Think National Geographic, not Viator. Think Michelin Guide, not a marketplace. We write about experiences — Venetian old towns, Adriatic harbours, Alpine lakes, limestone caves — and only introduce practical day-trip guidance after we&apos;ve earned your trust. Every section should leave you thinking &ldquo;I can&apos;t wait to explore Slovenia&rdquo; — not &ldquo;I&apos;ve looked at some excursions.&rdquo;
            </p>
            <p>
              Koper or Piran? Lake Bled or Postojna? Organised or independent? We help you make the best decision for your cruise — with confidence, not urgency. We&apos;re not affiliated with any cruise line, tour operator or the Port of Koper. Just honest editorial guidance from people who think Slovenia is one of Europe&apos;s best-kept secrets, and wish more cruise passengers knew it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
