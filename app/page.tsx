import HomeHero from "@/components/home/HomeHero";
import LaunchSpotlight from "@/components/home/LaunchSpotlight";
import CategoryGrid from "@/components/home/CategoryGrid";
import BrandStrip from "@/components/home/BrandStrip";
import DealOfDay from "@/components/home/DealOfDay";
import OfferBanners from "@/components/home/OfferBanners";
import ShopByConcern from "@/components/home/ShopByConcern";
import ProductGrid from "@/components/product/ProductGrid";
import Bestsellers from "@/components/home/Bestsellers";
import BlogSection from "@/components/home/BlogSection";
import TrustBadges from "@/components/home/TrustBadges";
import { getNewLaunches } from "@/lib/data";

export default function HomePage() {
  const newLaunches = getNewLaunches();

  return (
    <div className="bg-[#fff5fb] text-[#1a1a2e]">
      <main className="site-container">
        <section className="pt-6">
          <HomeHero />
        </section>

        <section className="py-5">
          <div className="rounded-full bg-gradient-to-r from-[#ffe4f2] via-[#ffb7dc] to-[#ff8fc3] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.3em] text-[#7b1d5d] shadow-[0_22px_60px_rgba(237,70,154,0.16)]">
            Extra 15% Off On 1st Order | Use Code <span className="text-[#94155f]">NEW15</span>
          </div>
        </section>

        <section className="py-10">
          <LaunchSpotlight />
        </section>

        <section className="section-space">
          <CategoryGrid />
        </section>

        <section className="section-space-sm">
          <OfferBanners />
        </section>

        <section className="section-space">
          <DealOfDay />
        </section>

        <section className="section-space-sm">
          <BrandStrip />
        </section>

        <section className="section-space">
          <ShopByConcern />
        </section>

        <section className="section-space">
          <ProductGrid
            products={newLaunches}
            title="New Launches"
            subtitle="Fresh arrivals handcrafted for modern luxury."
          />
        </section>

        <section className="section-space-sm">
          <BlogSection />
        </section>

        <section className="section-space-sm">
          <TrustBadges />
        </section>
      </main>
    </div>
  );
}
