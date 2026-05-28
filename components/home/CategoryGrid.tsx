import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CategoryGrid() {
  return (
    <section>
      <SectionHeading
        title="Shop By Category"
        subtitle="Browse premium categories designed for every beauty ritual."
        align="center"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/${cat.slug}`}
            aria-label={`Shop ${cat.name}`}
            className="group rounded-[28px] border border-white bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `${cat.color}18`,
                border: `1px solid ${cat.color}30`,
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-white text-2xl shadow-sm">
                {cat.icon}
              </div>
            </div>
            <span className="mt-5 block text-sm font-semibold text-[#1a1a2e]">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
