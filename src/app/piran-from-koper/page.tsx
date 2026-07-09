import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "piran-from-koper";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
