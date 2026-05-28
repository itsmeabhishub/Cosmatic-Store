"use client";
import { useState } from "react";

const quickLinks = [
  { label: "Get App", href: "#" },
  { label: "Store & Events", href: "#" },
  { label: "Gift Card", href: "#" },
  { label: "Help", href: "#" },
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-[#ffe4ed] via-[#ffeaf0] to-[#f9d4e5] text-[#4a2144] shadow-[0_8px_28px_rgba(252,39,121,0.08)]">
      <div className="navbar-container flex h-[42px] items-center justify-between gap-4 text-sm font-semibold tracking-[0.02em]">
        <p className="min-w-0 text-sm uppercase tracking-[0.16em]">
          BEAUTY BONANZA <span className="text-[#6e4d6e] font-medium">Get Your Amazing Deals</span>
        </p>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#4a2144]">
          {quickLinks.map(link => (
            <a key={link.label} href={link.href} className="transition duration-300 hover:text-[#fc2779]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
