import Link from "next/link";
import { ShieldCheck, Truck, RefreshCcw, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,#12071c,#1b0a2b,#100616)] text-white">
      <div className="max-w-[1400px] mx-auto px-8 pt-12 pb-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr] items-start">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/8 text-2xl font-black text-white">
                G
              </div>
              <div>
                <p className="text-[22px] font-bold leading-tight text-white">Glam Store</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#d5d0df]/70">Luxury Beauty</p>
              </div>
            </div>
            <p className="max-w-[320px] text-sm leading-[1.7] text-[#d5d0df]">
              India’s luxury beauty destination for premium skincare, makeup and wellness.
            </p>
            <div className="flex items-center gap-3">
              {["#", "#", "#", "#"].map((href, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-[#d5d0df] transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <span className="text-lg">•</span>
                </a>
              ))}
            </div>
            <div className="max-w-[460px] rounded-full overflow-hidden bg-white/10">
              <div className="flex h-[50px] items-center px-4">
                <input
                  type="email"
                  aria-label="Enter your email"
                  placeholder="Enter your email"
                  className="w-full border-none bg-transparent text-sm text-white placeholder:text-[#d5d0df] outline-none"
                />
                <button
                  type="button"
                  className="ml-3 inline-flex h-full w-[110px] items-center justify-center rounded-full bg-gradient-to-r from-[#ff8bc1] to-[#fc2779] px-4 text-sm font-semibold text-white transition duration-300 hover:brightness-110"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[22px] font-bold text-white">Shop</h4>
            <div className="space-y-2 text-[15px] leading-[1.9] text-[#d5d0df]">
              {['Makeup', 'Skincare', 'Haircare', 'Fragrance', 'Bath & Body', "Men's", 'Wellness', 'Nails'].map(item => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ & /g, '-').replace("'", '')}`}
                  className="block transition duration-300 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[22px] font-bold text-white">Top Brands</h4>
            <div className="space-y-2 text-[15px] leading-[1.9] text-[#d5d0df]">
              {['Lakmé', 'Maybelline', "L'Oréal", 'Mamaearth', 'SUGAR', 'MAC', 'The Ordinary', 'Minimalist'].map(item => (
                <Link
                  key={item}
                  href={`/brands/${item.toLowerCase()}`}
                  className="block transition duration-300 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-[22px] font-bold text-white">Customer Support</h4>
            <div className="space-y-2 text-[15px] leading-[1.9] text-[#d5d0df]">
              {[
                ['Track Order', '/profile/orders'],
                ['Returns & Refunds', '#'],
                ['FAQ', '#'],
                ['Contact Us', '#'],
                ['Beauty Blog', '/beauty-blog'],
                ['Sitemap', '#'],
              ].map(([label, href]) => (
                <Link
                  key={label as string}
                  href={href as string}
                  className="block transition duration-300 hover:text-white"
                >
                  {label as string}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {[
            { icon: ShieldCheck, label: 'Authentic' },
            { icon: Truck, label: 'Free Shipping' },
            { icon: RefreshCcw, label: 'Returns' },
            { icon: Lock, label: 'Secure Payment' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 rounded-[14px] bg-white/5 px-4 py-3 text-sm text-[#d5d0df]">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#d5d0df]">
                <item.icon size={16} />
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#c8c3d2]">© 2025 Glam Store</p>
            <p className="text-sm text-[#c8c3d2] uppercase tracking-[0.22em]">Visa • Mastercard • UPI • Paytm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
