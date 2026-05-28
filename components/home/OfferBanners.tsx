import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const offerBanners = [
  { title: "Skincare Fest", subtitle: "Up to 60% OFF", href: "/skincare", bg: "linear-gradient(135deg,#6c3fc5,#e91e8c)", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=200&fit=crop" },
  { title: "Makeup Mania", subtitle: "Buy 2 Get 1 Free", href: "/makeup", bg: "linear-gradient(135deg,#e91e8c,#ff6b35)", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=200&fit=crop" },
  { title: "Hair Care Sale", subtitle: "Flat 40% OFF", href: "/haircare", bg: "linear-gradient(135deg,#f5a623,#e91e8c)", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=200&fit=crop" },
];

export default function OfferBanners() {
  return (
    <section>
      <SectionHeading
        title="Promo Picks"
        subtitle="High-impact beauty offers to elevate every routine."
        align="center"
        eyebrow="Trending Now"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {offerBanners.map((banner, index) => (
          <Link
            key={index}
            href={banner.href}
            className="relative overflow-hidden rounded-[28px] min-h-[320px] flex items-end p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]"
          >
            <img src={banner.img} alt={banner.title} className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: banner.bg, opacity: 0.8 }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="relative">
              <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/90">
                Featured
              </span>
              <h3 className="text-2xl font-black text-white leading-tight">{banner.title}</h3>
              <p className="mt-3 text-sm text-white/80">{banner.subtitle}</p>
            </div>
            <span className="absolute top-5 right-5 text-white/90 text-xl">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
