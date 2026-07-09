import type { EditorialBadge } from "@/data/types";

const BADGE_CONFIG: Record<
  EditorialBadge,
  { label: string; className: string }
> = {
  "editors-choice": {
    label: "Editor's Choice",
    className: "bg-maple-500 text-white",
  },
  "best-value": {
    label: "Best Value",
    className: "bg-emerald-600 text-white",
  },
  "best-first-time": {
    label: "Best for First-Time Visitors",
    className: "bg-coastal-700 text-white",
  },
  "best-families": {
    label: "Best for Families",
    className: "bg-violet-600 text-white",
  },
  "best-independent-day": {
    label: "Best Independent Day",
    className: "bg-coastal-600 text-white",
  },
  "best-history": {
    label: "Best History Tour",
    className: "bg-amber-700 text-white",
  },
  "best-scenic": {
    label: "Best Scenic Option",
    className: "bg-teal-600 text-white",
  },
  "best-relaxing": {
    label: "Most Relaxing",
    className: "bg-sky-600 text-white",
  },
  "our-favourite": {
    label: "Our Favourite",
    className: "bg-maple-600 text-white",
  },
  "best-photography": {
    label: "Best Photography",
    className: "bg-indigo-600 text-white",
  },
};

export function EditorialBadgePill({ badge }: { badge: EditorialBadge }) {
  const config = BADGE_CONFIG[badge];
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${config.className}`}>
      {config.label}
    </span>
  );
}

export function EditorialBadges({ badges }: { badges?: EditorialBadge[] }) {
  if (!badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((badge) => (
        <EditorialBadgePill key={badge} badge={badge} />
      ))}
    </div>
  );
}
