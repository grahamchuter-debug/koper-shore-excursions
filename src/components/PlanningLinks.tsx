import Link from "next/link";

const LINKS = [
  { href: "/koper-old-town-vs-day-trips", label: "Plan Your Day" },
  { href: "/koper-cruise-port-guide", label: "Port Guide" },
  { href: "/lake-bled-from-koper", label: "Lake Bled" },
  { href: "/piran-from-koper", label: "Piran" },
  { href: "/koper-port-day-by-duration", label: "Port Day by Duration" },
  { href: "/faq", label: "FAQ" },
];

export function PlanningLinks({ heading = "Keep exploring Slovenia" }: { heading?: string }) {
  return (
    <section className="rounded-2xl border border-coastal-100 bg-coastal-50/60 p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-gray-900">{heading}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="pill hover:bg-coastal-100 transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
