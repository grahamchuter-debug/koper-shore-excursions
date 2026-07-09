import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/enquire";

export const metadata = buildMetadata({
  title: "Ask the Editor",
  description: "Ask us anything about your Slovenia day from Koper — ship schedule, Lake Bled vs Piran, walking, independence. No sales pitch, just honest advice.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Ask the Editor", path },
];

export default function EnquirePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Ask the Editor", description: "Get honest Slovenia cruise port advice.", path })]} />
      <PageHero title="Ask the editor" subtitle="Stuck between Lake Bled and Piran? Not sure if your port window is long enough? Ask us — we're here to help you decide, not sell you something." compact />
      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <Breadcrumbs items={breadcrumbs} />
          <form className="card-feature space-y-4" action={`mailto:${SITE.email}`} method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="ship" className="block text-sm font-medium text-gray-700 mb-1">Ship &amp; sailing date</label>
              <input id="ship" name="ship" type="text" placeholder="e.g. MSC Euribia — 15 July 2026" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What are you trying to decide?</label>
              <textarea id="message" rows={5} placeholder="Tell us your port window, what you're weighing up, and any mobility or family considerations." className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <button type="submit" className="btn-primary">Send message</button>
          </form>
          <p className="mt-4 text-sm text-gray-600">Or email us directly at <a href={`mailto:${SITE.email}`} className="text-coastal-700 hover:underline">{SITE.email}</a></p>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
