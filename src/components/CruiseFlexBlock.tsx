import Link from "next/link";

export function CruiseFlexBlock() {
  return (
    <section className="section-padding bg-gradient-to-br from-coastal-800 via-coastal-900 to-coastal-800 text-white" id="cruiseflex">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-8 sm:p-10 backdrop-blur-sm">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Changed your mind about the day?</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Cruise plans shift. Ships run late. Sometimes you simply decide the Curonian Spit isn&apos;t for you after all. <strong className="text-white">CruiseFlex</strong> lets you cancel an organised day for any reason — for just <strong className="text-white">€5 / £5 / $5 per person</strong> — up to 24 hours before you go.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 font-medium">No paperwork</p>
              <p className="mt-1 text-sm text-white/70">Because life&apos;s too short</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 font-medium">No excuses required</p>
              <p className="mt-1 text-sm text-white/70">Any reason is fine</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 font-medium">Keep your options open</p>
              <p className="mt-1 text-sm text-white/70">Decide the day before</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-white/75">
            We mention this because flexibility matters when you&apos;re planning around a moving ship — not because we want to upsell you on anything.
          </p>
          <p className="mt-3 text-xs text-white/50">
            Available on selected organised days only.
          </p>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-accent">
              See which days offer CruiseFlex
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
