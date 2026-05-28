"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2, Plus, Minus, ShoppingBag, Tag } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function CartPage() {
  const { state, dispatch, cartTotal } = useCart();
  const { items } = state;
  const router = useRouter();
  const { user } = useAuth();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "GLAM25") { setCouponApplied(true); setCouponError(""); }
    else { setCouponError("Invalid coupon code"); setCouponApplied(false); }
  };

  const discount = couponApplied ? Math.round(cartTotal * 0.25) : 0;
  const delivery = cartTotal > 499 ? 0 : 79;
  const finalTotal = cartTotal - discount + delivery;

  if (items.length === 0) return (
    <div className="max-w-lg mx-auto text-center py-20 px-4">
      <div className="text-6xl mb-4">🛍️</div>
      <h2 className="text-2xl font-black mb-2" style={{ color: "#1a1a2e" }}>Your bag is empty</h2>
      <p className="text-sm mb-6" style={{ color: "#888" }}>Looks like you haven't added anything yet</p>
      <Link href="/" className="inline-block px-8 py-3 rounded-full font-bold text-white" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>Start Shopping →</Link>
    </div>
  );

  return (
    <div className="site-container py-10">
      <h1 className="text-2xl font-black mb-6" style={{ color: "#1a1a2e" }}>My Bag ({items.length} items)</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-3">
          {items.map(item => (
            <div key={item.product.id} className="flex gap-4 p-4 rounded-2xl" style={{ background: "white", border: "1px solid #f0e6f0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <img src={item.product.image} alt={item.product.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold" style={{ color: "#e91e8c" }}>{item.product.brand}</p>
                <p className="text-sm font-medium line-clamp-2" style={{ color: "#1a1a2e" }}>{item.product.name}</p>
                {item.selectedShade && <p className="text-xs mt-0.5" style={{ color: "#888" }}>Shade: {item.selectedShade}</p>}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">₹{item.product.price * item.quantity}</span>
                    <span className="text-xs line-through" style={{ color: "#bbb" }}>₹{item.product.mrp * item.quantity}</span>
                  </div>
                  <div className="flex items-center gap-1 border rounded-full px-2" style={{ borderColor: "#e0e0e0" }}>
                    <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity - 1 })} className="w-6 h-6 flex items-center justify-center">
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId: item.product.id, quantity: item.quantity + 1 })} className="w-6 h-6 flex items-center justify-center">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", productId: item.product.id })} className="shrink-0 p-1.5 rounded-lg hover:bg-red-50 transition-colors">
                <Trash2 size={14} color="#e91e8c" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          {/* Coupon */}
          <div className="p-4 rounded-2xl" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
            <p className="text-sm font-bold mb-3 flex items-center gap-1.5" style={{ color: "#1a1a2e" }}><Tag size={14} style={{ color: "#e91e8c" }} /> Apply Coupon</p>
            <div className="flex gap-2">
              <input value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Enter code" className="flex-1 px-3 py-2 rounded-lg border text-sm outline-none" style={{ borderColor: "#e0e0e0" }} />
              <button onClick={applyCoupon} className="px-3 py-2 rounded-lg text-sm font-bold text-white" style={{ background: "#e91e8c" }}>Apply</button>
            </div>
            {couponApplied && <p className="text-xs mt-1.5 font-semibold" style={{ color: "#2e7d32" }}>✓ GLAM25 applied! You save ₹{discount}</p>}
            {couponError && <p className="text-xs mt-1.5" style={{ color: "#c62828" }}>{couponError}</p>}
            <p className="text-xs mt-2" style={{ color: "#aaa" }}>Try: GLAM25</p>
          </div>

          {/* Price Breakdown */}
          <div className="p-4 rounded-2xl" style={{ background: "white", border: "1px solid #f0e6f0" }}>
            <h3 className="font-bold mb-4" style={{ color: "#1a1a2e" }}>Price Details</h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between"><span style={{ color: "#666" }}>MRP Total</span><span>₹{items.reduce((s, i) => s + i.product.mrp * i.quantity, 0)}</span></div>
              <div className="flex justify-between"><span style={{ color: "#666" }}>Discount</span><span style={{ color: "#2e7d32" }}>−₹{items.reduce((s, i) => s + (i.product.mrp - i.product.price) * i.quantity, 0)}</span></div>
              {couponApplied && <div className="flex justify-between"><span style={{ color: "#666" }}>Coupon (GLAM25)</span><span style={{ color: "#2e7d32" }}>−₹{discount}</span></div>}
              <div className="flex justify-between"><span style={{ color: "#666" }}>Delivery</span><span style={{ color: delivery === 0 ? "#2e7d32" : "#333" }}>{delivery === 0 ? "FREE" : `₹${delivery}`}</span></div>
              <div className="border-t pt-2.5 flex justify-between font-black text-base" style={{ borderColor: "#f0e6f0" }}>
                <span style={{ color: "#1a1a2e" }}>Total</span>
                <span style={{ color: "#1a1a2e" }}>₹{finalTotal}</span>
              </div>
            </div>
            {delivery > 0 && <p className="text-xs mt-2" style={{ color: "#888" }}>Add ₹{499 - cartTotal} more for free delivery</p>}
            <button
              onClick={() => {
                if (user) {
                  router.push("/checkout");
                  return;
                }
                router.push(
                  "/login?redirect=/checkout&message=Please login to continue checkout."
                );
              }}
              className="mt-4 w-full py-3.5 rounded-full font-bold text-white text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}
            >
              <ShoppingBag size={16} /> Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
