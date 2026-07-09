const ADVANTAGES = [
  {
    title: "Smaller groups where applicable",
    description:
      "Private tours and select small-group excursions often carry fewer passengers than large ship-coach convoys — more guide attention and faster port pickup.",
  },
  {
    title: "Carefully selected local experiences",
    description:
      "We recommend operators who know Kiel, Hamburg and Lübeck on cruise schedules — not generic sightseeing sold to every Baltic port.",
  },
  {
    title: "Often better value than cruise line tours",
    description:
      "Independent excursions frequently undercut ship-sponsored pricing, especially for private Hamburg and Lübeck day trips — compare before you commit at the gangway.",
  },
  {
    title: "Port-time aware recommendations",
    description:
      "Our editorial picks respect your actual hours ashore. We will tell you when Hamburg is too ambitious and when Kiel city is the smarter choice.",
  },
  {
    title: "Flexible cancellation upgrade",
    description:
      "Optional CruiseFlex lets you cancel eligible excursions up to 24 hours before departure — no paperwork, no questions asked.",
  },
  {
    title: "Return-to-ship confidence where applicable",
    description:
      "Reputable independent operators monitor your vessel's departure. Local Kiel tours offer particularly high return confidence; motorway day trips need built-in margin.",
  },
];

export function WhyIndependentBlock() {
  return (
    <section className="section-padding bg-white" id="why-independent">
      <div className="container-wide">
        <p className="section-eyebrow">Independent vs cruise line</p>
        <h2 className="section-title mt-2">Why book independent Kiel shore excursions?</h2>
        <p className="section-subtitle">
          Cruise line excursions offer peace of mind when their coach runs late. Independent operators often deliver better value, smaller groups and more flexible options — when you choose carefully.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item) => (
            <div key={item.title} className="card-feature h-full">
              <h3 className="font-display text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
