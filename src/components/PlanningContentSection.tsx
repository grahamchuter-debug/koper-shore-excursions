import Link from "next/link";
import { planningArticles } from "@/data/homepage";

export function PlanningContentSection() {
  return (
    <section className="section-padding bg-coastal-50" id="planning-guides">
      <div className="container-wide">
        <p className="section-eyebrow">Port day planning</p>
        <h2 className="section-title mt-2">Make the right call before you leave the ship</h2>
        <p className="section-subtitle">
          Hamburg is not always the answer. These guides help you choose between Kiel, Hamburg and Lübeck based on your actual port window — not brochure hype.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {planningArticles.map((article) => (
            <Link key={article.slug} href={article.href} className="nav-card group flex h-full flex-col">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{article.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{article.description}</p>
              <span className="mt-4 text-sm font-semibold text-maple-600">Read guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
