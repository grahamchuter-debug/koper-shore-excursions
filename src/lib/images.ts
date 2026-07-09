export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "Emerald Lake Bled with island church and Julian Alps, Slovenia",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Praetorian Palace at sunrise in Koper Old Town, Slovenia",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Slovenia from Koper",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Cruise ship approaching the Port of Koper at dawn, Slovenia",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  koper: {
    src: `${B}/koper.jpg`,
    alt: "Praetorian Palace on Tito Square in Koper Old Town, Slovenia",
  },
  "old-town": {
    src: `${B}/old-town.jpg`,
    alt: "Terracotta rooftops and Venetian lanes in Koper Old Town",
  },
  piran: {
    src: `${B}/piran.jpg`,
    alt: "Tartini Square and harbour in Piran, Slovenia",
  },
  "lake-bled": {
    src: `${B}/lake-bled.jpg`,
    alt: "Turquoise Lake Bled with island church and Julian Alps, Slovenia",
  },
  postojna: {
    src: `${B}/postojna.jpg`,
    alt: "Stalactite chambers inside Postojna Cave, Slovenia",
  },
  predjama: {
    src: `${B}/predjama.jpg`,
    alt: "Predjama Castle built into a cliff face near Postojna, Slovenia",
  },
  istria: {
    src: `${B}/istria.jpg`,
    alt: "Vineyards and hill town views in Slovenian Istria",
  },
  harbour: {
    src: `${B}/harbour.jpg`,
    alt: "Piran harbour viewed from St George's Church, Slovenia",
  },
  relaxed: {
    src: `${B}/relaxed.jpg`,
    alt: "Praetorian Palace at sunrise in Koper — a gentle morning ashore",
  },
  planner: {
    src: `${B}/planner.jpg`,
    alt: "Cruise ship at Koper terminal — planning your Slovenia day",
  },
  highlights: {
    src: `${B}/highlights.jpg`,
    alt: "Bled Castle above Lake Bled with the Julian Alps, Slovenia",
  },
  "port-day": {
    src: `${B}/port-day.jpg`,
    alt: "Koper Old Town streets — planning your day by ship schedule",
  },
  comparison: {
    src: `${B}/comparison.jpg`,
    alt: "Piran harbour from above — comparing Slovenia's coastal days",
  },
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
