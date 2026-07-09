import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { KoperCruisePlannerSection } from "@/components/KoperCruisePlannerSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/koper-cruise-planner";

export const metadata = buildMetadata({
  title: "Koper Cruise Planner — Match Your Ship to the Right Slovenia",
  description: "Tell us your ship, schedule and interests — we'll help you choose the right Slovenia day from Koper cruise port.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Cruise Planner", path },
];

export default function KoperCruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Koper Cruise Planner", description: SITE.description, path })]} />
      <PageHero title="Match your ship to the right Slovenia" subtitle="No upsell. No urgency. Just the day a trusted local would recommend." compact />
      <KoperCruisePlannerSection />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <PlanningLinks />
        </div>
      </section>
    </>
  );
}
