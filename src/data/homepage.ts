import type { ExperiencePath, FAQ } from "./types";

export const experiencePaths: ExperiencePath[] = [
  {
    id: "editors-choice",
    label: "Not sure where to start?",
    shortLabel: "Start here",
    description:
      "If this were our parents' first day in Slovenia, we'd begin in Koper's Venetian Old Town — Tito Square, the Praetorian Palace, bell tower views over terracotta roofs. It's walkable from the ship, unhurried, and genuinely beautiful. No coach required.",
    suits: "First visit · Unsure · Want one confident recommendation",
    scrollTo: "#editors-recommendation",
  },
  {
    id: "coastal-piran",
    label: "Piran & the Adriatic",
    shortLabel: "Coast",
    description:
      "Thirty minutes from Koper, Piran is one of the Adriatic's finest harbour towns — Venetian architecture pressed against the sea, fresh seafood at harbour tables, and light that painters have chased for centuries. The coast Slovenia deserves to be known for.",
    suits: "Coastal charm · Photography · Seafood lunch — needs 4–5 hours minimum",
    scrollTo: "#day-piran-coastal-day",
  },
  {
    id: "lake-bled",
    label: "Lake Bled & the Julian Alps",
    shortLabel: "Lake Bled",
    description:
      "Emerald water, a church on an island, a castle on a cliff — Lake Bled is the postcard Slovenia. It needs a full port day and roughly two hours each way from Koper, but passengers who make the journey rarely regret it.",
    suits: "Iconic scenery · Alpine landscapes — needs 7+ hours ashore",
    scrollTo: "#day-lake-bled-day-trip",
  },
  {
    id: "caves-castles",
    label: "Caves & Castles",
    shortLabel: "Caves",
    description:
      "Postojna Cave is one of Europe's great underground cathedrals — a train ride into the earth, then chambers of stalactites that took millennia to form. Pair it with Predjama Castle, built into a cliff face, for a day unlike anything else on your cruise.",
    suits: "Geology · Wonder · Rainy-day insurance — needs 6+ hours",
    scrollTo: "#day-postojna-predjama-day",
  },
  {
    id: "istria-wine",
    label: "Slovenian Istria",
    shortLabel: "Wine country",
    description:
      "Hill towns, olive groves and family wineries in the gentle countryside between Koper and the Italian border. Grožnjan's artists' colony, truffle season in the Motovun forest, and white wine on a terrace with a view. Slovenia at its most Mediterranean.",
    suits: "Food & wine · Slow travel · Culture — needs 5–6 hours",
    scrollTo: "#day-slovenian-istria-wine-day",
  },
  {
    id: "relaxed-day",
    label: "A Gentle Day Ashore",
    shortLabel: "Relaxed",
    description:
      "Espresso in Koper's Old Town, a harbour stroll, then Piran for a long lunch by the water. No checklist, no coach timetable — just the Adriatic at the pace it was meant to be experienced. The day we'd choose if we wanted to breathe.",
    suits: "Coffee · Harbour · Unhurried exploration — the gentlest option",
    scrollTo: "#day-relaxed-piran-koper-day",
  },
];

export interface ComparisonRow {
  situation: string;
  recommendation: string;
  excursionSlug: string;
  reason: string;
}

export const excursionComparison: ComparisonRow[] = [
  {
    situation: "First visit to Slovenia",
    recommendation: "Koper Old Town walk",
    excursionSlug: "koper-old-town-walk",
    reason: "Venetian architecture at your gangway — no transfer risk, high return confidence, genuine beauty.",
  },
  {
    situation: "Only 4–5 hours ashore",
    recommendation: "Piran coastal day",
    excursionSlug: "piran-coastal-day",
    reason: "The Adriatic's finest harbour town is 30 minutes away — achievable without gambling your return time.",
  },
  {
    situation: "Full port day (7+ hours)",
    recommendation: "Lake Bled day trip",
    excursionSlug: "lake-bled-day-trip",
    reason: "Slovenia's iconic Alpine lake needs time, but on a long call it's the experience that defines the country.",
  },
  {
    situation: "Rain forecast or cave enthusiast",
    recommendation: "Postojna & Predjama",
    excursionSlug: "postojna-predjama-day",
    reason: "Underground wonder that doesn't depend on weather — one of Europe's most remarkable geological sites.",
  },
  {
    situation: "Food and wine lover",
    recommendation: "Slovenian Istria",
    excursionSlug: "slovenian-istria-wine-day",
    reason: "Hill towns, olive oil and family cellars — Mediterranean Slovenia at its most delicious.",
  },
  {
    situation: "Travelling with parents or limited mobility",
    recommendation: "Relaxed Piran & Koper",
    excursionSlug: "relaxed-piran-koper-day",
    reason: "Gentle pacing, minimal walking, harbour lunches — atmosphere over itinerary.",
  },
  {
    situation: "Photography priority",
    recommendation: "Lake Bled or Piran",
    excursionSlug: "lake-bled-day-trip",
    reason: "Bled for Alpine reflections at dawn; Piran for golden-hour harbour light. Both reward early starts.",
  },
  {
    situation: "Returning visitor",
    recommendation: "Slovenian Istria",
    excursionSlug: "slovenian-istria-wine-day",
    reason: "Skip the postcard sights you've seen — the hill towns and wine country are where locals go.",
  },
];

export interface PlanningTopic {
  id: string;
  title: string;
  content: string;
}

export const planningTopics: PlanningTopic[] = [
  {
    id: "worth-visiting",
    title: "Is Slovenia worth visiting from a cruise ship?",
    content:
      "Absolutely — and more than most passengers realise. Slovenia is one of Europe's smallest countries and one of its most diverse: Venetian ports, Adriatic fishing villages, Alpine lakes and underground cathedrals, all within two hours of Koper. Many cruisers treat this as a Bled transfer stop. That misses the point entirely.",
  },
  {
    id: "stay-in-koper",
    title: "Should I leave Koper at all?",
    content:
      "It depends on your hours ashore. Koper's Old Town is genuinely worth a morning — Praetorian Palace, Venetian lanes, harbour views. On a short call (under 5 hours), staying local is almost always right. On a full day, Lake Bled or Postojna become realistic. The mistake is leaving without understanding what you're trading away.",
  },
  {
    id: "lake-bled",
    title: "Is Lake Bled worth the drive?",
    content:
      "On a 7+ hour port call, yes — it's one of the most beautiful lakes in Europe. But it's roughly two hours each way from Koper, and you'll share it with coach groups from every ship in port. Go early, accept the crowds, and focus on the island church and castle views. On shorter calls, Piran delivers more beauty per minute of transfer.",
  },
  {
    id: "piran",
    title: "Why do locals love Piran?",
    content:
      "Because it's the Adriatic as it used to be — before the mega-resorts. Venetian Gothic architecture, a harbour where fishing boats still work, seafood restaurants with tables at the water's edge. It's 30–45 minutes from Koper and achievable on almost any port call. If we could only recommend one place, Piran would be in the conversation.",
  },
  {
    id: "independent",
    title: "Can I explore independently?",
    content:
      "Koper's Old Town is walkable from the terminal — 10 minutes to Tito Square. Piran is reachable by local bus or taxi. Lake Bled and Postojna are harder without organised transport and tight return timing. Independent exploration works beautifully for the coast; for Alpine and cave days, a guide who knows your ship's schedule adds genuine peace of mind.",
  },
  {
    id: "short-calls",
    title: "What works on a short port call?",
    content:
      "Under five usable hours? Koper Old Town and optionally Piran. Do not attempt Lake Bled — you'll spend four hours in a coach and an hour at the lake. Late arrivals should stay in Koper every time. The Adriatic rewards unhurried mornings, not rushed checklists.",
  },
  {
    id: "long-calls",
    title: "What works on a long port call?",
    content:
      "With seven or eight hours ashore, Lake Bled becomes realistic — island church, cliff-top castle, cream cake at a lakeside terrace. Postojna and Predjama fit comfortably. Or combine Koper morning with Piran afternoon for a two-flavour day that needs no long transfers.",
  },
  {
    id: "currency",
    title: "Practical essentials",
    content:
      "Slovenia uses the euro. English is widely spoken in tourist areas. Tipping is appreciated but not obligatory — round up at restaurants. Summer brings crowds to Bled; spring and autumn offer softer light and fewer coaches. Bring layers: Alpine mornings are cool even in July, and Adriatic harbours can be breezy.",
  },
];

export interface PlanningArticle {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const planningArticles: PlanningArticle[] = [
  {
    slug: "is-koper-worth-visiting",
    title: "Is Slovenia worth visiting on a cruise day?",
    description:
      "When Koper, Piran and Lake Bled justify your attention — and when to keep expectations realistic.",
    href: "/is-koper-worth-visiting",
  },
  {
    slug: "lake-bled-from-koper",
    title: "Lake Bled from Koper — is it worth the drive?",
    description:
      "Drive times, crowd reality, and whether your port window is long enough for Slovenia's iconic lake.",
    href: "/lake-bled-from-koper",
  },
  {
    slug: "piran-from-koper",
    title: "Piran — the Adriatic harbour Slovenia deserves",
    description:
      "Why this Venetian fishing town might be the best use of a short port call from Koper.",
    href: "/piran-from-koper",
  },
  {
    slug: "koper-old-town-vs-day-trips",
    title: "Stay in Koper or leave the port?",
    description:
      "An honest comparison for cruise passengers — Venetian old town versus Alpine lakes and Adriatic coast.",
    href: "/koper-old-town-vs-day-trips",
  },
  {
    slug: "independent-koper-exploration",
    title: "Can I explore independently from Koper?",
    description:
      "Walking routes, bus connections and when a guide genuinely adds value to your port day.",
    href: "/independent-koper-exploration",
  },
  {
    slug: "koper-port-day-by-duration",
    title: "Best days for short and long port calls",
    description:
      "Realistic choices for 4-hour, 6-hour and 8+ hour windows — what fits, what to skip.",
    href: "/koper-port-day-by-duration",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "How should I spend my day in Slovenia from Koper?",
      answer:
        "That depends on your hours ashore and what moves you. Short call? Koper Old Town and possibly Piran. Full day? Lake Bled or Postojna Cave. Our comparison table matches situations to days that tend to work — start there, not with a tour brochure.",
    },
    {
      question: "How far is Lake Bled from Koper cruise port?",
      answer:
        "Roughly 100 km — about 1 hour 45 minutes to 2 hours each way by road. Allow 7+ hours total for a worthwhile Bled day including the island church, castle viewpoint and lakeside time.",
    },
    {
      question: "Can I walk from the cruise terminal to Koper Old Town?",
      answer:
        "Yes — Tito Square and the Venetian old town are roughly 10 minutes on foot from the cruise terminal. Praetorian Palace, the bell tower and harbour lanes are all within easy walking distance.",
    },
    {
      question: "Is Piran worth visiting on a cruise day?",
      answer:
        "For most passengers, yes. It's 30–45 minutes from Koper, extraordinarily photogenic, and achievable on port calls as short as 4–5 hours. We'd recommend it over Lake Bled when time is limited.",
    },
    {
      question: "How much time do I need ashore in Koper?",
      answer:
        "A meaningful Old Town morning needs 2–3 hours. Piran needs 4–5 hours including transfer. Lake Bled needs 7–8. Postojna Cave needs 6–7. Always build 30 minutes before all-aboard.",
    },
    {
      question: "What happens if my ship arrives late?",
      answer:
        "Late arrivals favour local options — Koper Old Town and Piran tolerate compressed schedules far better than Lake Bled transfers. If you've booked an organised day, contact your provider immediately; reputable operators adjust or offer alternatives.",
    },
    {
      question: "Should I book through the cruise line or independently?",
      answer:
        "Both can work. The cruise line guarantees return if their organised day runs late. Independent options are often better value and may offer smaller groups. The right answer depends on your risk tolerance and your day — we help you weigh it honestly.",
    },
    {
      question: "What's the one thing most cruise passengers miss?",
      answer:
        "Koper itself. Coaches whisk everyone to Bled while one of the Adriatic's finest old towns sits empty at the gangway. Even if you leave for the hinterland, spend an hour in Tito Square first. You might change your plans.",
    },
  ];
}
