import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "best-days-from-koper";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
