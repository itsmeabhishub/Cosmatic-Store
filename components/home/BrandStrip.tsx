import Link from "next/link";
import { BRANDS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BrandStrip() {
  const colors = ["#e91e8c", "#6c3fc5", "#f5a623", "#26a69a", "#ff6b35", "#1565c0", "#ec407a", "#66bb6a", "#e91e8c", "#5c6bc0", "#f5a623", "#e91e8c"];

  return (
    <section className="glass-panel p-6">
      <SectionHeading
        title="Top Brands"
        subtitle="Discover premium labels and cult favorites for every beauty ritual."
        actionLabel="View All"
        actionHref="/brands"
        align="left"
        eyebrow="Brand Edit"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BRANDS.map((brand, i) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.slug}`}
            className="group flex flex-col items-center gap-3 rounded-[26px] border border-white bg-white px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl text-lg font-black text-white shadow-md"
                 style={{ background: `linear-gradient(135deg, ${colors[i % colors.length]}, ${colors[(i + 2) % colors.length]})` }}>
              {brand.logo}
            </div>
            <span className="text-sm font-semibold text-[#1a1a2e]">{brand.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
