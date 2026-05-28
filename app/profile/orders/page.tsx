"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Package, ChevronRight } from "lucide-react";

const orders = [
  { id: "GS4K9X2M", date: "May 20, 2025", status: "Delivered", items: ["Vitamin C Serum", "Matte Lipstick"], total: 898, color: "#2e7d32" },
  { id: "GS7A3LMN", date: "May 15, 2025", status: "Out for Delivery", items: ["Foundation", "Mascara"], total: 744, color: "#f5a623" },
  { id: "GS1P8RQT", date: "May 10, 2025", status: "Processing", items: ["Shampoo 300ml"], total: 399, color: "#1565c0" },
];

export default function OrdersPage() {
  const { user, authLoaded } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!authLoaded) return;
    if (!user) {
      router.replace(
        `/login?redirect=${encodeURIComponent(pathname)}&message=${encodeURIComponent(
          "Please sign in or create an account to continue checkout."
        )}`
      );
    }
  }, [authLoaded, user, router, pathname]);

  if (!authLoaded || !user) {
    return (
      <div className="site-container py-16">
        <div className="max-w-2xl mx-auto rounded-3xl border border-[#f0e0f0] bg-white p-8 text-center shadow-xl">
          <p className="text-lg font-semibold" style={{ color: "#1a1a2e" }}>
            Login required to view your orders.
          </p>
          <p className="mt-3 text-sm text-[#666]">Redirecting to sign in automatically.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="site-container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-black mb-6" style={{ color: "#1a1a2e" }}>My Orders</h1>
      {orders.length === 0 ? (
        <div className="text-center py-16">
          <Package size={48} className="mx-auto mb-3" style={{ color: "#f0e6f0" }} />
          <p className="font-medium" style={{ color: "#888" }}>No orders yet</p>
          <Link href="/" className="mt-3 inline-block text-sm font-semibold" style={{ color: "#e91e8c" }}>Start Shopping →</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="rounded-2xl p-4" style={{ border: "1px solid #f0e6f0", background: "white" }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-sm" style={{ color: "#1a1a2e" }}>Order #{order.id}</p>
                  <p className="text-xs" style={{ color: "#aaa" }}>{order.date}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: `${order.color}15`, color: order.color }}>{order.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs" style={{ color: "#666" }}>{order.items.join(", ")}</p>
                  <p className="font-bold mt-0.5">₹{order.total}</p>
                </div>
                <ChevronRight size={16} style={{ color: "#ccc" }} />
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
