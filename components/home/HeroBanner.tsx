"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const banners = [
  {
    id: 1,
    title: "Summer Sale 2025",
    subtitle: "Up to 50% OFF on Skincare",
    cta: "Shop Now",
    href: "/skincare",
    bg: "linear-gradient(135deg, #e91e8c 0%, #6c3fc5 50%, #1a1a2e 100%)",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=400&fit=crop",
    badge: "🔥 HOT DEALS",
  },
  {
    id: 2,
    title: "New Makeup Collection",
    subtitle: "Explore 500+ New Arrivals",
    cta: "Explore Now",
    href: "/new-launches",
    bg: "linear-gradient(135deg, #6c3fc5 0%, #e91e8c 100%)",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=400&fit=crop",
    badge: "✨ NEW IN",
  },
  {
    id: 3,
    title: "Luxury Brands Sale",
    subtitle: "MAC, Huda Beauty & More",
    cta: "Shop Luxe",
    href: "/luxe",
    bg: "linear-gradient(135deg, #bf8f00 0%, #e91e8c 100%)",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=400&fit=crop",
    badge: "👑 LUXE",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, []);

  const b = banners[current];

  return (
    <div className="relative overflow-hidden rounded-2xl mx-4 my-4" style={{ height: "340px", background: b.bg, transition: "background 0.5s" }}>
      {/* Background Image */}
      <img src={b.image} alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 md:opacity-50" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.6) 40%, transparent 100%)" }} />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>{b.badge}</span>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">{b.title}</h1>
        <p className="text-white/80 text-base md:text-lg mb-6">{b.subtitle}</p>
        <Link href={b.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm w-fit transition-transform hover:scale-105" style={{ background: "white", color: "#e91e8c" }}>
          {b.cta} →
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all" style={{ width: i === current ? "24px" : "8px", height: "8px", background: i === current ? "white" : "rgba(255,255,255,0.5)" }} />
        ))}
      </div>

      {/* Arrows */}
      <button onClick={() => setCurrent((current - 1 + banners.length) % banners.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 text-lg">‹</button>
      <button onClick={() => setCurrent((current + 1) % banners.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 text-lg">›</button>
    </div>
  );
}
