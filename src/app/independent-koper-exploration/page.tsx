import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "independent-koper-exploration";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
