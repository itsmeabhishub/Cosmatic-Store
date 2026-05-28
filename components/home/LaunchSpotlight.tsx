import Link from "next/link";

const spotlightItems = [
  {
    title: "Full Matte Coverage with SPF 40 PA++",
    href: "/makeup",
    label: "Shop Now",
    variant: "from-[#ffe4f1] via-[#ffd0e7] to-[#ffb4d8]",
  },
  {
    title: "Find your match from 18 shades",
    href: "/makeup",
    label: "Find Yours",
    variant: "from-[#f7f0ff] via-[#eadcff] to-[#dfc7ff]",
  },
  {
    title: "Enriched with Hyaluronic Acid & Squalane",
    href: "/skincare",
    label: "Shop Serum",
    variant: "from-[#f7f8ff] via-[#e8f1ff] to-[#d0e1ff]",
  },
  {
    title: "Formulated in Korea for Indian Skin",
    href: "/skincare",
    label: "Explore",
    variant: "from-[#fff0eb] via-[#ffe0d7] to-[#ffd1c7]",
  },
];

export default function LaunchSpotlight() {
  return (
    <section className="space-y-8">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e91e8c]">
          Exclusive Launch Alert
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#1a1a2e]">
          You saw it here first. Shop now!
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f526d]">
          Fresh drops, premium palettes, and hero launches from our most loved beauty brands.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#fbe9f8] shadow-[0_30px_90px_rgba(233,60,144,0.14)]">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop"
            alt="Kay Beauty"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12101f]/90 to-transparent" />
          <div className="relative p-8 sm:p-10 lg:p-12">
            <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#c93cfb] font-bold">
              Kay Beauty
            </span>
            <h3 className="mt-6 text-4xl font-black leading-tight text-white">
              The Unreal Coverage You Love
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
              18 shades built for Indian skin tones, effortless glow, and a cushion finish that stays flawless all day.
            </p>
            <Link
              href="/makeup"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#b82d7f] shadow-lg shadow-[#b82d7f25] transition duration-300 hover:bg-[#f7f0ff]"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {spotlightItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group rounded-[2rem] bg-gradient-to-br ${item.variant} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]`}
            >
              <h4 className="text-lg font-black text-[#1a1a2e]">
                {item.title}
              </h4>
              <span className="mt-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c93cfb]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
