"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  Star,
  Droplet,
  Scissors,
  Flower,
  Tag,
  Heart,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCart } from "@/lib/cart-context";

type CategoryLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const categoryLinks: CategoryLink[] = [
  { label: "Makeup", href: "/makeup", icon: Star },
  { label: "Skincare", href: "/skincare", icon: Droplet },
  { label: "Haircare", href: "/haircare", icon: Scissors },
  { label: "Fragrance", href: "/fragrance", icon: Flower },
  { label: "Bath & Body", href: "/bath-body", icon: Droplet },
  { label: "Men's", href: "/men", icon: User },
  { label: "Luxe", href: "/luxe", icon: Sparkles },
  { label: "Offers", href: "/offers", icon: Tag },
];

export default function Header() {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-[0_24px_80px_rgba(31,31,31,0.12)]" : ""}`}>
      <div className="navbar-container">
        <div className="flex h-[96px] items-center justify-between gap-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ffe0f0] to-[#ffd0df] text-2xl font-black tracking-[-0.08em] text-[#fc2779] shadow-[0_12px_28px_rgba(252,39,121,0.12)]">
              G
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold uppercase tracking-[0.26em] text-[#2c1833]">Glam Store</span>
              <span className="text-xs uppercase tracking-[0.26em] text-[#8f7d96]">Luxury Beauty</span>
            </div>
          </Link>

          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="relative w-full max-w-[520px]">
              <Search size={18} className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-[#b292b0]" />
              <input
                type="text"
                aria-label="Search luxury beauty, skincare, makeup"
                placeholder="Search luxury beauty, skincare, makeup..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="h-14 w-full rounded-full border border-[#f3e3ef] bg-white pl-[72px] pr-[128px] text-sm font-medium text-[#3b3150] shadow-[0_8px_24px_rgba(252,39,121,0.08)] transition duration-300 focus:border-[#fc2779] focus:outline-none focus:ring-4 focus:ring-[#fc2779]/10"
              />
              <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#ff88b2] to-[#fc2779] px-6 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(252,39,121,0.22)] transition duration-300 hover:opacity-95"
                aria-label="Search beauty products"
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <Link
              href="/wishlist"
              aria-label="View wishlist"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ebe4ef] bg-white text-[#3b3150] transition duration-300 hover:border-[#fc2779] hover:text-[#fc2779]"
            >
              <Heart size={20} />
            </Link>
            <Link
              href="/cart"
              aria-label="View cart"
              className="inline-flex h-12 min-w-[56px] items-center justify-center rounded-full border border-[#ebe4ef] bg-white text-[#3b3150] transition duration-300 hover:border-[#fc2779] hover:text-[#fc2779]"
            >
              <ShoppingBag size={20} />
              {mounted && cartCount > 0 && (
                <span className="ml-2 inline-flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#fc2779] px-2 text-[12px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/profile"
              aria-label="View profile"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ebe4ef] bg-white text-[#3b3150] transition duration-300 hover:border-[#fc2779] hover:text-[#fc2779]"
            >
              <User size={20} />
            </Link>
            <button
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#ece8f2] bg-white text-[#3b3150] transition duration-300 hover:bg-[#fdf0f8] lg:hidden"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div className="navbar-container border-t border-[#f4e7f3] bg-white pb-4">
        <nav className="hidden md:flex items-center justify-center gap-4 py-4">
          {categoryLinks.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-white px-6 py-3 text-lg font-extrabold uppercase tracking-[0.02em] text-[#3b3150] shadow-[0_6px_22px_rgba(15,23,42,0.04)] transition duration-300 hover:border-[#f3d1e3] hover:bg-[#fff0f8] hover:text-[#fc2779]"
            >
              <item.icon size={18} className="text-[#8f7d96] transition duration-300 group-hover:text-[#fc2779]" />
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-[#ff8eb8] after:to-[#fc2779] after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                {item.label}
              </span>
              <ChevronDown size={14} className="text-[#c8b4c9] transition duration-300 group-hover:text-[#fc2779]" />
            </Link>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 overflow-y-auto bg-white/98 px-6 py-6">
          <div className="flex items-center justify-between pb-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-black tracking-[-0.04em] text-[#2c1833]">
              <span className="text-[#fc2779]">G</span>
              <span className="text-base font-semibold">Glam Store</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#3b3150] shadow-sm">
              <X size={22} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="relative rounded-[14px] bg-[#f5f5f5] p-3">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8f7d96]" />
              <input
                type="text"
                aria-label="Search luxury beauty products"
                placeholder="Search luxury beauty, skincare, makeup..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-transparent pl-12 pr-4 text-sm font-medium text-[#3b3150] outline-none placeholder:text-[#8f7d96]"
              />
            </div>
            <div className="rounded-[22px] border border-[#efe6f0] bg-white p-3 shadow-sm">
              <div className="grid gap-2">
                {categoryLinks.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#3b3150] transition hover:bg-[#fdf0f8] hover:text-[#fc2779]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon size={18} className="text-[#8f7d96]" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
