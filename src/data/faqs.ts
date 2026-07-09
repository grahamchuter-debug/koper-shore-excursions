import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Koper?",
    answer:
      "Ships berth at the Port of Koper cruise terminal, within walking distance of the Venetian Old Town. See our port guide for terminal layout, distances and practical timing.",
  },
  {
    question: "What currency is used in Slovenia?",
    answer:
      "Slovenia uses the euro. Cards are widely accepted in tourist areas; carry a little cash for smaller cafés and market stalls.",
  },
  {
    question: "Do I need a visa for a Koper port day?",
    answer:
      "Slovenia is in the EU and Schengen zone. EU and many other passport holders can go ashore without a separate visa for typical cruise port stays. Check your nationality's requirements before sailing.",
  },
  {
    question: "What language will I hear ashore?",
    answer:
      "Slovenian is the local language. English is widely spoken in tourist areas and on organised days designed for cruise passengers.",
  },
  {
    question: "Is this site trying to sell me tours?",
    answer:
      "No — we're an editorial guide first. We help you discover the right Slovenia for your day ashore. If you later decide you want someone to organise the logistics, we can point you there too. But inspiration and honest advice come first.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
