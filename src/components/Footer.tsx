import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Slovenia from Koper</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">
              {SITE.tagline}. An editorial guide to experiencing Slovenia from your cruise ship — written like we&apos;d advise our own parents.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Discover Slovenia</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/koper-cruise-port-guide" className="hover:text-white">Port Guide</Link></li>
              <li><Link href="/lake-bled-from-koper" className="hover:text-white">Lake Bled</Link></li>
              <li><Link href="/piran-from-koper" className="hover:text-white">Piran</Link></li>
              <li><Link href="/koper-port-day-by-duration" className="hover:text-white">Port Day by Duration</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Make the right call</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/koper-old-town-vs-day-trips" className="hover:text-white">Koper vs Day Trips</Link></li>
              <li><Link href="/is-koper-worth-visiting" className="hover:text-white">Is Slovenia Worth It?</Link></li>
              <li><Link href="/independent-koper-exploration" className="hover:text-white">Going Independent</Link></li>
              <li><Link href="/best-days-from-koper" className="hover:text-white">Our Favourite Days</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">We&apos;re here to help</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/day-trips" className="hover:text-white">Day Trips</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Ask the editor</Link></li>
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent editorial guide — not affiliated with any cruise line or the Port of Koper.
      </div>
    </footer>
  );
}
