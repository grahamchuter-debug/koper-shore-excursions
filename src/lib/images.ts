export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string, ext = "jpg"): SiteImage {
  return { base, src: `${B}/${base}.${ext}`, alt };
}

export const siteImages = {
  hero: img("hero-home", "Emerald Lake Bled with island church and Julian Alps, Slovenia"),
  ogDefault: img("og-default", "Praetorian Palace at sunrise in Koper Old Town, Slovenia"),
  logo: img("logo-mark", "Slovenia from Koper", "svg"),
  port: img("cruise-port", "Cruise ship approaching the Port of Koper at dawn, Slovenia"),
} as const satisfies Record<string, SiteImage>;

export const subjectImages: Record<string, SiteImage> = {
  koper: img("koper", "Praetorian Palace on Tito Square in Koper Old Town, Slovenia"),
  "old-town": img("old-town", "Terracotta rooftops and Venetian lanes in Koper Old Town"),
  piran: img("piran", "Tartini Square and harbour in Piran, Slovenia"),
  "lake-bled": img("lake-bled", "Turquoise Lake Bled with island church and Julian Alps, Slovenia"),
  postojna: img("postojna", "Stalactite chambers inside Postojna Cave, Slovenia"),
  predjama: img("predjama", "Predjama Castle built into a cliff face near Postojna, Slovenia"),
  istria: img("istria", "Vineyards and hill town views in Slovenian Istria"),
  harbour: img("harbour", "Piran harbour viewed from St George's Church, Slovenia"),
  relaxed: img("relaxed", "Praetorian Palace at sunrise in Koper — a gentle morning ashore"),
  planner: img("planner", "Cruise ship at Koper terminal — planning your Slovenia day"),
  highlights: img("highlights", "Bled Castle above Lake Bled with the Julian Alps, Slovenia"),
  "port-day": img("port-day", "Koper Old Town streets — planning your day by ship schedule"),
  comparison: img("comparison", "Piran harbour from above — comparing Slovenia's coastal days"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "koper-old-town-walk": "koper",
  "piran-coastal-day": "piran",
  "lake-bled-day-trip": "lake-bled",
  "postojna-predjama-day": "postojna",
  "slovenian-istria-wine-day": "istria",
  "relaxed-piran-koper-day": "relaxed",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "koper");
}

export const excursionsHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  "koper-old-town-vs-day-trips": "comparison",
  "lake-bled-from-koper": "lake-bled",
  "piran-from-koper": "harbour",
  "is-koper-worth-visiting": "koper",
  "koper-port-day-by-duration": "port-day",
  "koper-cruise-port-guide": "port",
  "best-days-from-koper": "highlights",
  "independent-koper-exploration": "relaxed",
};

export function getGuideImage(key: string): SiteImage {
  return pick(guideImageKeys[key] ?? key);
}

const experiencePathImages: Record<string, string> = {
  "editors-choice": "koper",
  "coastal-piran": "piran",
  "lake-bled": "lake-bled",
  "caves-castles": "postojna",
  "istria-wine": "istria",
  "relaxed-day": "relaxed",
};

export function getExperiencePathImage(pathId: string): SiteImage {
  return pick(experiencePathImages[pathId] ?? "koper");
}
