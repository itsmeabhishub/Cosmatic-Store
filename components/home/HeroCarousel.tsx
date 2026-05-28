"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv: any = motion.div;

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  image: string;
};

const DEFAULT_SLIDES: Slide[] = [
  {
    id: "1",
    title: "Elevate Your Glow",
    subtitle: "Premium skincare, luxe makeup and modern rituals for a luminous finish.",
    ctaPrimary: "Shop Skincare",
    ctaPrimaryHref: "/skincare",
    ctaSecondary: "Explore Makeup",
    ctaSecondaryHref: "/makeup",
    image: "https://images.unsplash.com/photo-1556228720-662a6c6d9f0b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Curated Luxury Beauty",
    subtitle: "Discover cult favorites, new arrivals, and premium essentials in one place.",
    ctaPrimary: "Shop Fragrance",
    ctaPrimaryHref: "/fragrance",
    ctaSecondary: "Browse Brands",
    ctaSecondaryHref: "/brands",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Luxe Rituals Await",
    subtitle: "Scented, sculpted and tailored for beauty lovers who want more.",
    ctaPrimary: "Shop Wellness",
    ctaPrimaryHref: "/wellness",
    ctaSecondary: "Explore Offers",
    ctaSecondaryHref: "/offers",
    image: "https://images.unsplash.com/photo-1615723014995-18fc00566808?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function HeroCarousel({ slides = DEFAULT_SLIDES }: { slides?: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef<number | null>(null);
  const delay = 7000;

  useEffect(() => {
    const nextSlide = () => setIndex((current) => (current + 1) % slides.length);
    timeoutRef.current = window.setInterval(nextSlide, delay);
    return () => {
      if (timeoutRef.current) window.clearInterval(timeoutRef.current);
    };
  }, [slides.length]);

  const handlePrev = () => {
    if (timeoutRef.current) window.clearInterval(timeoutRef.current);
    setDirection(-1);
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    if (timeoutRef.current) window.clearInterval(timeoutRef.current);
    setDirection(1);
    setIndex((current) => (current + 1) % slides.length);
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 120 : -120, scale: 0.98 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir < 0 ? 120 : -120, scale: 0.98 }),
  };

  const slide = slides[index];

  return (
    <section className="hero-panel">
      <div className="relative overflow-hidden bg-[#20132e] min-h-[520px] md:min-h-[540px]">
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction}>
            <MotionDiv
              key={slide.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src={slide.image} alt={slide.title} fill style={{ objectFit: "cover" }} priority className="object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
            </MotionDiv>
          </AnimatePresence>
        </div>

        <div className="relative z-10 site-container h-full">
          <div className="grid h-full items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/90">
                New Collection
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg md:text-xl text-white/80 leading-8">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {slide.ctaPrimary && slide.ctaPrimaryHref && (
                  <Link href={slide.ctaPrimaryHref} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#fc2779] via-[#ff5d9f] to-[#7b2cbf] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_24px_70px_rgba(252,39,121,0.24)] transition duration-300 hover:scale-[1.02]">
                    {slide.ctaPrimary}
                  </Link>
                )}
                {slide.ctaSecondary && slide.ctaSecondaryHref && (
                  <Link href={slide.ctaSecondaryHref} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white/90 transition duration-300 hover:bg-white/20">
                    {slide.ctaSecondary}
                  </Link>
                )}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#f7ecff]">Glow Ritual</p>
                  <h3 className="mt-4 text-xl font-bold text-white">Best selling serums and creams.</h3>
                  <p className="mt-3 text-sm text-white/70">Shop elevated skincare formulas designed for radiant results.</p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#f7ecff]">Designer Fragrance</p>
                  <h3 className="mt-4 text-xl font-bold text-white">Sophisticated scents for every mood.</h3>
                  <p className="mt-3 text-sm text-white/70">Discover elegant perfumes and sensorial wellness essentials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 z-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 rounded-full bg-black/20 px-3 py-2 backdrop-blur-md">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (timeoutRef.current) window.clearInterval(timeoutRef.current);
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={handlePrev} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white shadow-lg shadow-black/20 transition duration-300 hover:bg-white/20 hover:scale-105" aria-label="Previous slide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={handleNext} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white shadow-lg shadow-black/20 transition duration-300 hover:bg-white/20 hover:scale-105" aria-label="Next slide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
