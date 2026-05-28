import SectionHeading from "@/components/ui/SectionHeading";

const badges = [
  { icon: "✅", title: "100% Authentic", sub: "Genuine products guaranteed" },
  { icon: "🚚", title: "Free Delivery", sub: "On orders above ₹499" },
  { icon: "↩️", title: "Easy Returns", sub: "7-day hassle-free returns" },
  { icon: "💳", title: "Secure Payment", sub: "256-bit SSL encrypted" },
  { icon: "💰", title: "Best Prices", sub: "Price match guarantee" },
];

export default function TrustBadges() {
  return (
    <section className="glass-panel p-6">
      <SectionHeading
        title="Luxury Service Highlights"
        subtitle="Experience the premium benefits that make beauty shopping effortless and refined."
        align="center"
        eyebrow="Why Shop With Us"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-4 rounded-[24px] border border-white/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#fc2779] to-[#7b2cbf] text-white text-xl shadow-lg">
              {badge.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a1a2e]">{badge.title}</p>
              <p className="mt-1 text-sm text-[#6f627d]">{badge.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
