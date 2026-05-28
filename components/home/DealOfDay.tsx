"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

function useCountdown(hours: number) {
  const [time, setTime] = useState(hours * 3600);
  useEffect(() => {
    const interval = setInterval(() => setTime((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);
  const h = Math.floor(time / 3600).toString().padStart(2, "0");
  const m = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
  const s = (time % 60).toString().padStart(2, "0");
  return { h, m, s };
}

export default function DealOfDay() {
  const { h, m, s } = useCountdown(8);
  const deals = [
    { name: "Vitamin C Serum 20%", brand: "Minimalist", price: 399, mrp: 799, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop", discount: 50 },
    { name: "Matte Liquid Lipstick", brand: "SUGAR", price: 299, mrp: 599, img: "https://images.unsplash.com/photo-1586495777744-4e6232bf2263?w=300&h=300&fit=crop", discount: 50 },
    { name: "SPF 50 Sunscreen", brand: "Minimalist", price: 249, mrp: 499, img: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=300&h=300&fit=crop", discount: 50 },
    { name: "Onion Shampoo 300ml", brand: "WOW", price: 299, mrp: 599, img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop", discount: 50 },
  ];

  return (
    <section className="glass-panel p-6">
      <SectionHeading
        title="Deal of the Day"
        subtitle="Curated flash offers on cult beauty essentials for a limited time."
        align="left"
        eyebrow="Flash Sale"
      />

      <div className="grid gap-5 xl:grid-cols-4">
        {deals.map((deal, index) => (
          <div key={index} className="rounded-[28px] border border-[#f0e6f0] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
            <div className="relative h-52 overflow-hidden">
              <img src={deal.img} alt={deal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b9a] to-[#7c4dff] px-3 py-1 text-sm font-semibold text-white shadow-lg">
                {deal.discount}% OFF
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7b2cbf]">{deal.brand}</p>
              <h3 className="mt-3 text-lg font-semibold text-[#1a1a2e]">{deal.name}</h3>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-base font-extrabold text-[#1a1a2e]">₹{deal.price}</p>
                  <p className="text-sm text-[#9f8fab] line-through">₹{deal.mrp}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-[#f6f0ff] px-3 py-1 text-xs font-semibold text-[#7b2cbf]">
                  Hot
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Link href="/offers" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e91e8c] to-[#6c3fc5] px-4 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-[1.02]">
                  <ShoppingBag size={16} /> Add to Bag
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[24px] bg-[#f7f3fa] p-4 text-sm text-[#6f627d]">
        <strong className="font-semibold text-[#1a1a2e]">Heads up</strong>: These deals reset daily, so grab your favorites before they disappear.
      </div>
    </section>
  );
}
