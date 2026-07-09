import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "koper-cruise-port-guide";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
