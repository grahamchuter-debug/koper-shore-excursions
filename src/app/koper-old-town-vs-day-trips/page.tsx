import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "koper-old-town-vs-day-trips";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
