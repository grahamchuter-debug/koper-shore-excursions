import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/HomeHero";
import { SloveniaRevealSection } from "@/components/SloveniaRevealSection";
import { TrustValueStrip } from "@/components/TrustValueStrip";
import { ExperiencePathSelector } from "@/components/ExperiencePathSelector";
import { EditorsRecommendation } from "@/components/EditorsRecommendation";
import { PlanningGuideEditorial } from "@/components/PlanningGuideEditorial";
import { ExcursionComparisonTable } from "@/components/ExcursionComparisonTable";
import { PrivateTourGuidance } from "@/components/PrivateTourGuidance";
import { KoperCruisePlannerSection } from "@/components/KoperCruisePlannerSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturedExcursionsSection } from "@/components/FeaturedExcursionsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { getHomepageFaqs } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "The Essential Guide to Experiencing Slovenia from Koper",
  description: SITE.description,
  path: "/",
  keywords: [
    "Slovenia cruise port guide",
    "Koper cruise port",
    "Lake Bled from Koper",
    "Piran Slovenia",
    "Slovenia day trips cruise",
  ],
});

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "The Essential Guide to Experiencing Slovenia from Koper",
            description: SITE.tagline,
            path: "/",
          }),
        ]}
      />

      <HomeHero />
      <SloveniaRevealSection />
      <TrustValueStrip />
      <ExperiencePathSelector />
      <EditorsRecommendation />
      <PlanningGuideEditorial />
      <ExcursionComparisonTable />
      <PrivateTourGuidance />
      <KoperCruisePlannerSection />
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Questions fellow cruisers actually ask" />
        </div>
      </section>
      <FeaturedExcursionsSection excursions={featured} />
      <FinalCTA />
    </>
  );
}
