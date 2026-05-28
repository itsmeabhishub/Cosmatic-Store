"use client";
import Link from "next/link";
import { User, Package, Heart, MapPin, CreditCard, Bell, LogOut, ChevronRight } from "lucide-react";

export default function ProfilePage() {
  const menuItems = [
    { icon: Package, label: "My Orders", sub: "Track, return or buy again", href: "/profile/orders" },
    { icon: Heart, label: "Wishlist", sub: "Products you love", href: "/wishlist" },
    { icon: MapPin, label: "Saved Addresses", sub: "Manage delivery addresses", href: "#" },
    { icon: CreditCard, label: "Payment Methods", sub: "Cards, UPI & wallets", href: "#" },
    { icon: Bell, label: "Notifications", sub: "Manage alerts & offers", href: "#" },
  ];

  return (
    <div className="site-container py-10">
      <div className="max-w-2xl mx-auto">
        {/* Profile Card */}
      <div className="rounded-3xl p-6 mb-6 flex items-center gap-4" style={{ background: "linear-gradient(135deg,#e91e8c,#6c3fc5)", boxShadow: "0 8px 32px rgba(233,30,140,0.3)" }}>
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
          <User size={28} color="white" />
        </div>
        <div>
          <h2 className="text-lg font-black text-white">Guest User</h2>
          <p className="text-white/70 text-sm">Login to view your profile</p>
          <Link href="/login" className="inline-block mt-2 px-4 py-1.5 rounded-full text-xs font-bold" style={{ background: "rgba(255,255,255,0.25)", color: "white" }}>Login / Sign Up</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[["0", "Orders"], ["0", "Wishlist"], ["0", "Reviews"]].map(([val, label]) => (
          <div key={label} className="text-center p-4 rounded-2xl" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
            <p className="text-2xl font-black" style={{ color: "#e91e8c" }}>{val}</p>
            <p className="text-xs" style={{ color: "#888" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Menu */}
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #f0e6f0" }}>
        {menuItems.map(({ icon: Icon, label, sub, href }, i) => (
          <Link key={label} href={href} className="flex items-center gap-4 p-4 transition-colors hover:bg-pink-50" style={{ borderBottom: i < menuItems.length - 1 ? "1px solid #f0e6f0" : "none" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#e91e8c15" }}>
              <Icon size={18} style={{ color: "#e91e8c" }} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>{label}</p>
              <p className="text-xs" style={{ color: "#888" }}>{sub}</p>
            </div>
            <ChevronRight size={16} style={{ color: "#ccc" }} />
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button className="w-full mt-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2" style={{ background: "#fff5f5", color: "#e53935", border: "1px solid #ffcccc" }}>
        <LogOut size={16} /> Logout
      </button>
      </div>
    </div>
  );
}
