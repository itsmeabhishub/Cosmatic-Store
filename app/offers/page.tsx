import { OFFERS } from "@/lib/data";
import { Tag, Clock } from "lucide-react";

export default function OffersPage() {
  const deals = [
    { title: "Skincare Bonanza", subtitle: "Upto 60% OFF", code: "SKIN60", desc: "On all skincare products", color: "#6c3fc5", bg: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=200&fit=crop" },
    { title: "Makeup Mania", subtitle: "Flat ₹300 OFF", code: "MAKEUP300", desc: "On orders above ₹999", color: "#e91e8c", bg: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=200&fit=crop" },
    { title: "New User Special", subtitle: "Extra 20% OFF", code: "NEWUSER20", desc: "First order only", color: "#f5a623", bg: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=200&fit=crop" },
    { title: "₹99 Store", subtitle: "Premium products at ₹99", code: "STORE99", desc: "Selected items only", color: "#26a69a", bg: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=600&h=200&fit=crop" },
  ];

  return (
    <div className="site-container py-10">
      <h1 className="text-2xl font-black mb-2" style={{ color: "#1a1a2e" }}>Deals & Offers 🔥</h1>
      <p className="text-sm mb-6" style={{ color: "#888" }}>Exclusive deals just for you — don't miss out!</p>

      {/* Banner Deals */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {deals.map((d, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden h-40">
            <img src={d.bg} alt={d.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: `${d.color}dd` }} />
            <div className="relative h-full flex flex-col justify-center p-6">
              <h2 className="text-white font-black text-xl">{d.title}</h2>
              <p className="text-white/80 text-sm">{d.desc}</p>
              <p className="text-2xl font-black text-white mt-1">{d.subtitle}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(255,255,255,0.3)", color: "white" }}>Use: {d.code}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Cards */}
      <h2 className="text-lg font-bold mb-4" style={{ color: "#1a1a2e" }}>Active Coupons</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {OFFERS.map(offer => (
          <div key={offer.id} className="rounded-2xl overflow-hidden" style={{ border: "2px dashed #e91e8c20", background: "#fdf5f9" }}>
            <div className="p-4" style={{ borderBottom: "2px dashed #e91e8c20" }}>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#e91e8c", color: "white" }}>COUPON</span>
                  <h3 className="text-lg font-black mt-1" style={{ color: "#e91e8c" }}>{offer.title}</h3>
                  <p className="text-xs" style={{ color: "#666" }}>{offer.description}</p>
                </div>
                <Tag size={24} style={{ color: "#e91e8c20" }} />
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <code className="text-sm font-bold px-2 py-1 rounded" style={{ background: "#e91e8c15", color: "#e91e8c" }}>{offer.code}</code>
              </div>
              <div className="flex items-center gap-1 text-xs" style={{ color: "#aaa" }}>
                <Clock size={11} /> Valid till {offer.validTill}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
