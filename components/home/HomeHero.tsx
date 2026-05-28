import Link from "next/link";

const heroSummary = {
  headline: "Meet The Cult Favs",
  subheadline: "Level Up With NYX",
  description: "Shop iconic beauty heroes, glowing skincare essentials, and launch-first stories curated for your daily glam.",
  image: "https://images.unsplash.com/photo-1556228720-662a6c6d9f0b?q=80&w=1600&auto=format&fit=crop",
};

const sideCards = [
  {
    label: "Trending Now",
    title: "4-IN-1 Tinted Sunscreen",
    description: "Evens. Corrects. Brightens. Defends.",
    tag: "Up To 25% Off",
    href: "/skincare",
    button: "Shop Now",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=800&auto=format&fit=crop",
  },
  {
    label: "Editor's Pick",
    title: "A Masterclass in Water Colour Makeup",
    description: "Discover makeup artistry with luminous colour, weightless feel, and rich finish.",
    tag: "Learn More",
    href: "/makeup",
    button: "Explore",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
  },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#fff3fb] p-4 sm:p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#1b1021] shadow-[0_40px_100px_rgba(231,76,146,0.18)]">
          <img
            src={heroSummary.image}
            alt={heroSummary.headline}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/15 to-transparent" />
          <div className="relative z-10 p-8 sm:p-10 lg:p-14 text-white">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/80">
              {heroSummary.subheadline}
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {heroSummary.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-8 text-white/80">
              {heroSummary.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/offers"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff5aad] to-[#c93cfb] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#f13fb835] transition duration-300 hover:scale-[1.02]"
              >
                Shop All Deals
              </Link>
              <Link
                href="/new-launches"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/20"
              >
                New Launches
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {sideCards.map((card) => (
            <div key={card.title} className="relative overflow-hidden rounded-[2rem] border border-[#f9e6f3] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="relative h-56 overflow-hidden">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-7">
                <span className="inline-flex rounded-full bg-[#fff0f7] px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#d52b84]">
                  {card.label}
                </span>
                <h2 className="mt-4 text-xl font-black text-[#1a1a2e]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5f526d]">
                  {card.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#fff0f7] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d52b84]">
                    {card.tag}
                  </span>
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center rounded-full bg-[#e91e8c] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#c92d7c]"
                  >
                    {card.button}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
