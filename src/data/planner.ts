import { excursions } from "./excursions";

export type VisitorTypeId = "port-day" | "embarking" | "disembarking" | "staying";

export interface PlannerInput {
  visitorType: VisitorTypeId;
  timeframe: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  style: "guided" | "mix" | "diy";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "old-town", label: "Koper Old Town & Venetian architecture" },
  { id: "piran", label: "Piran & Adriatic coast" },
  { id: "bled", label: "Lake Bled & Julian Alps" },
  { id: "caves", label: "Postojna Cave & Predjama Castle" },
  { id: "wine", label: "Slovenian Istria wine & food" },
  { id: "relaxed", label: "Relaxed pace & harbour atmosphere" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  "old-town": ["koper-old-town-walk", "relaxed-piran-koper-day"],
  piran: ["piran-coastal-day", "relaxed-piran-koper-day"],
  bled: ["lake-bled-day-trip"],
  caves: ["postojna-predjama-day"],
  wine: ["slovenian-istria-wine-day"],
  relaxed: ["relaxed-piran-koper-day", "koper-old-town-walk", "piran-coastal-day"],
};

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/day-trips/${slug}`, why };
}

export function generateKoperPlan(input: PlannerInput): PlannerResult {
  const { visitorType, timeframe, adults, children, interests, mobility, style } = input;
  const hasKids = children > 0;

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  const activeInterests = interests.length ? interests : ["old-town", "piran"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }
  if (hasKids) pushSlug("relaxed-piran-koper-day");
  if (mobility === "limited") pushSlug("relaxed-piran-koper-day");
  if (style === "diy") pushSlug("koper-old-town-walk");

  const shortDay = visitorType === "port-day" && timeframe === "short";
  if (visitorType === "port-day") {
    if (shortDay) pushSlug("koper-old-town-walk");
    else if (timeframe === "long") pushSlug("lake-bled-day-trip");
    else pushSlug("piran-coastal-day");
  }

  const excursionLinks = excSlugs
    .slice(0, 4)
    .map((s) => excursionLink(s, "Matches your interests and port window"))
    .filter((x): x is PlannerLink => x !== null);

  return {
    headline: shortDay ? "Stay close — Koper and Piran" : "Slovenia from your gangway",
    summary: shortDay
      ? "On a short call, focus on Koper Old Town and possibly Piran. Skip Lake Bled — the transfer eats your day."
      : "You have enough time to reach Slovenia's headline sights. Start with our decision guide, then pick the experience that fits.",
    excursions: excursionLinks,
    transfers: [
      { label: "Koper Cruise Port Guide", href: "/koper-cruise-port-guide", why: "Terminal distances and practical logistics" },
    ],
    stay: [],
    logistics: [
      { label: "Port Day by Duration", href: "/koper-port-day-by-duration", why: "Match your day to your hours ashore" },
      { label: "Koper vs Day Trips", href: "/koper-old-town-vs-day-trips", why: "Stay local or venture into Slovenia" },
    ],
    dayPlan: shortDay
      ? [
          { time: "08:00", text: "Walk to Tito Square and explore Koper Old Town" },
          { time: "10:30", text: "Transfer to Piran if time allows" },
          { time: "12:30", text: "Harbour lunch in Piran" },
          { time: "14:00", text: "Return to ship with 30-minute margin" },
        ]
      : [
          { time: "07:30", text: "Early departure for Lake Bled or Postojna" },
          { time: "10:00", text: "Arrive at destination — explore" },
          { time: "14:00", text: "Begin return journey to Koper" },
          { time: "16:30", text: "Back at terminal with margin before all-aboard" },
        ],
  };
}
