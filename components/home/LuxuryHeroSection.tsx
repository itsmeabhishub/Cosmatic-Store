"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv: any = motion.div;
const MotionButton: any = motion.button;

type LuxurySlide = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  image: string;
  gradientOverlay: {
    from: string;
    to: string;
  };
};

const LUXURY_SLIDES: LuxurySlide[] = [
  {
    id: "1",
    title: "Skin Perfection",
    subtitle: "Premium Luxury Collection",
    description: "Discover our curated selection of high-end skincare designed for radiant, flawless skin",
    ctaPrimary: {
      text: "Explore Skincare",
      href: "/skincare",
    },
    ctaSecondary: {
      text: "View Collection",
      href: "/brands",
    },
    image: "https://images.unsplash.com/photo-1556228720-662a6c6d9f0b?q=80&w=2000&auto=format&fit=crop",
    gradientOverlay: {
      from: "from-pink-900/40",
      to: "to-purple-900/60",
    },
  },
  {
    id: "2",
    title: "Luxe Makeup",
    subtitle: "Premium Beauty Edit",
    description: "Elevate your beauty routine with our exclusive makeup collection from global luxury brands",
    ctaPrimary: {
      text: "Shop Makeup",
      href: "/makeup",
    },
    ctaSecondary: {
      text: "New Arrivals",
      href: "/new-launches",
    },
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop",
    gradientOverlay: {
      from: "from-rose-900/40",
      to: "to-pink-900/60",
    },
  },
  {
    id: "3",
    title: "Wellness Ritual",
    subtitle: "Holistic Beauty & Health",
    description: "Transform your wellness journey with premium supplements, oils, and wellness essentials",
    ctaPrimary: {
      text: "Discover Wellness",
      href: "/wellness",
    },
    ctaSecondary: {
      text: "Bath & Body",
      href: "/bath-body",
    },
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop",
    gradientOverlay: {
      from: "from-amber-900/40",
      to: "to-orange-900/60",
    },
  },
  {
    id: "4",
    title: "Fragrance Noir",
    subtitle: "Signature Scent Collection",
    description: "Experience luxury through our curated selection of premium fragrances and perfumes",
    ctaPrimary: {
      text: "Shop Fragrance",
      href: "/fragrance",
    },
    ctaSecondary: {
      text: "Find Your Scent",
      href: "/brands",
    },
    image: "https://images.unsplash.com/photo-1615723014995-18fc00566808?q=80&w=2000&auto=format&fit=crop",
    gradientOverlay: {
      from: "from-slate-900/40",
      to: "to-purple-900/60",
    },
  },
];

export default function LuxuryHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoSlideDelay = 7000; // 7 seconds

  // Auto-slide effect
  useEffect(() => {
    const startAutoSlide = () => {
      timeoutRef.current = setTimeout(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % LUXURY_SLIDES.length);
      }, autoSlideDelay);
    };

    startAutoSlide();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goNext = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % LUXURY_SLIDES.length);
  };

  const goPrev = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + LUXURY_SLIDES.length) % LUXURY_SLIDES.length);
  };

  const slide = LUXURY_SLIDES[currentSlide];

  // Animation variants
  const containerVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 1000 : -1000,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir < 0 ? 1000 : -1000,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="w-full mb-8 px-section pt-6">
      <div className="container-wide mx-auto">
        {/* Premium Hero Carousel */}
        <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_90px_rgba(15,23,42,0.18)] min-h-[520px] md:min-h-[620px] lg:min-h-[720px]">
          {/* Slides */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <MotionDiv
              key={currentSlide}
              custom={direction}
              variants={containerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 32 },
                opacity: { duration: 0.55 },
              }}
              className="relative w-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0 -z-20">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 -z-10">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.gradientOverlay.from} ${slide.gradientOverlay.to}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_30%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
              </div>

              {/* Content */}
              <div className="relative z-10 px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
                <div className="max-w-2xl">
                  {/* Category Label */}
                  <MotionDiv
                    custom={0}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mb-4"
                  >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                        {slide.subtitle}
                      </span>
                    </div>
                  </MotionDiv>

                  {/* Main Title */}
                  <MotionDiv
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl mb-4">
                      {slide.title}
                    </h1>
                  </MotionDiv>

                  {/* Description */}
                  <MotionDiv
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                      {slide.description}
                    </p>
                  </MotionDiv>

                  {/* CTA Buttons */}
                  <MotionDiv
                    custom={3}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4 flex-wrap"
                  >
                    {/* Primary CTA */}
                    <MotionDiv whileHover="hover" variants={buttonVariants} className="inline-flex">
                      <Link
                        href={slide.ctaPrimary.href}
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      >
                        {slide.ctaPrimary.text}
                        <span className="ml-2">→</span>
                      </Link>
                    </MotionDiv>

                    {/* Secondary CTA */}
                    {slide.ctaSecondary && (
                      <MotionDiv whileHover="hover" variants={buttonVariants} className="inline-flex">
                        <Link
                          href={slide.ctaSecondary.href}
                          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-white/30 transition-colors duration-300"
                        >
                          {slide.ctaSecondary.text}
                          <span className="ml-2">→</span>
                        </Link>
                      </MotionDiv>
                    )}
                  </MotionDiv>
                </div>
              </div>
            </MotionDiv>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {LUXURY_SLIDES.map((_, index) => (
              <MotionButton
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-10"
                    : "bg-white/40 w-2.5 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group"
            aria-label="Previous slide"
          >
            <div className="relative w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/40 transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group"
            aria-label="Next slide"
          >
            <div className="relative w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/40 transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          {/* Mobile bottom gradient for better text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
        </div>
      </div>
    </section>
  );
}
