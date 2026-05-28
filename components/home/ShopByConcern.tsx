import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const concerns = [
  { icon: "💧", label: "Dry Skin", href: "/skincare?concern=dry", color: "#1565c0" },
  { icon: "✨", label: "Glowing Skin", href: "/skincare?concern=glow", color: "#f5a623" },
  { icon: "🌿", label: "Anti-Aging", href: "/skincare?concern=antiaging", color: "#66bb6a" },
  { icon: "🔴", label: "Acne Control", href: "/skincare?concern=acne", color: "#e91e8c" },
  { icon: "🌑", label: "Dark Circles", href: "/skincare?concern=darkcircles", color: "#6c3fc5" },
  { icon: "⚡", label: "Hair Fall", href: "/haircare?concern=hairfall", color: "#ff6b35" },
  { icon: "🌸", label: "Sensitive Skin", href: "/skincare?concern=sensitive", color: "#ec407a" },
  { icon: "☀️", label: "Sun Protection", href: "/skincare?concern=sun", color: "#f5a623" },
];

export default function ShopByConcern() {
  return (
    <section>
      <SectionHeading
        title="Shop By Concern"
        subtitle="Targeted beauty solutions for every skin goal."
        align="center"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {concerns.map((concern) => (
          <Link
            key={concern.label}
            href={concern.href}
            className="group rounded-[26px] border border-white bg-white p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            style={{ background: `${concern.color}10`, borderColor: `${concern.color}20` }}
          >
            <span className="text-3xl">{concern.icon}</span>
            <p className="mt-4 text-sm font-semibold text-[#1a1a2e]">{concern.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
