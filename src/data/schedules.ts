import koperSchedule from "./imported-schedules/koper.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "koper",
    name: "Koper",
    country: "Slovenia",
    description: "Slovenia's only cruise port on the Adriatic",
    seoTitle: "Koper Cruise Ship Schedule",
    metaDescription: "Koper cruise ship schedule hub. See which ships are in port and plan Slovenia days — Old Town, Piran, Lake Bled and Adriatic excursions around arrival and…",
    intro:
      "Koper is Slovenia's only cruise port — gateway to Venetian old towns, Adriatic harbours, Alpine lakes and limestone caves. Check which vessels are scheduled before planning your day ashore.",
    scheduleOverview:
      "Koper sees cruise traffic from April through October on the Adriatic and Mediterranean circuits, with peak calls in June, July and August.",
    planningTips: [
      "Confirm your all-aboard time before booking Lake Bled transfers",
      "Allow 30 minutes return margin for local days; 45 minutes for Bled or Postojna",
      "Summer afternoons at Lake Bled are busiest — early departures help",
    ],
    faqs: [
      {
        question: "When is Koper cruise season?",
        answer: "Typically April through October, with the highest volume in summer months.",
      },
    ],
  },
];

export const schedules: Record<string, ScheduleEntry[]> = {
  koper: koperSchedule as ScheduleEntry[],
};

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return schedules[slug] ?? [];
}
