const REVEALS = [
  {
    title: "A country the size of Wales",
    body: "Slovenia packs Alpine lakes, Adriatic harbours, limestone caves and vineyard hills into two hours of driving. From Koper, you can reach landscapes that feel like three different countries — because they almost are.",
  },
  {
    title: "Venetian streets at your gangway",
    body: "Koper's Old Town is one of the best-preserved medieval ports on the Adriatic — terracotta roofs, Praetorian Palace, narrow lanes that smell of espresso and sea salt. Most passengers walk right past it on the coach to Bled. That might be a mistake.",
  },
  {
    title: "The day-trip dilemma",
    body: "Lake Bled is extraordinary. So is Piran. Postojna Cave is unlike anything on your itinerary. You cannot do them all. The question is not whether Slovenia is worth your time — it is which Slovenia fits the hours you actually have.",
  },
];

export function SloveniaRevealSection() {
  return (
    <section className="section-padding bg-white" id="discover-slovenia">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Why this port matters</p>
          <h2 className="section-title mt-2">You didn&apos;t expect Slovenia. Good.</h2>
          <p className="section-subtitle mx-auto">
            Most cruise itineraries treat Koper as a transfer point to Lake Bled. We think that undersells one of Europe&apos;s most surprising countries — and one of its most walkable cruise ports.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {REVEALS.map((item) => (
            <article key={item.title} className="card-editorial p-8">
              <h3 className="font-display text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
