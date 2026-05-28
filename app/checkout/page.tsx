"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { useCart } from "@/lib/cart-context";
import { ChevronRight, MapPin, CreditCard, ShoppingBag } from "lucide-react";

const STEPS = ["Address", "Payment", "Review"];

export default function CheckoutPage() {
  const { state, cartTotal, dispatch } = useCart();
  const { user, authLoaded } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [step, setStep] = useState(0);
  const [addr, setAddr] = useState({ name: "", phone: "", pincode: "", address: "", city: "", state: "" });
  const [payMethod, setPayMethod] = useState("upi");

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
  const [upiId, setUpiId] = useState("");
  const delivery = cartTotal > 499 ? 0 : 79;
  const total = cartTotal + delivery;

  if (!authLoaded || !user) {
    return (
      <div className="site-container py-16">
        <div className="max-w-2xl mx-auto rounded-3xl border border-[#f0e0f0] bg-white p-8 text-center shadow-xl">
          <p className="text-lg font-semibold" style={{ color: "#1a1a2e" }}>
            Please sign in to continue checkout.
          </p>
          <p className="mt-3 text-sm text-[#666]">You will be redirected to the login page shortly.</p>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    dispatch({ type: "CLEAR_CART" });
    window.location.href = "/order-success";
  };

  return (
    <div className="site-container py-10">
      <h1 className="text-2xl font-black mb-6" style={{ color: "#1a1a2e" }}>Checkout</h1>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <button onClick={() => i < step && setStep(i)} className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={i <= step ? { background: "#e91e8c", color: "white" } : { background: "#f0e0f0", color: "#999" }}>{i < step ? "✓" : i + 1}</div>
              <span className="text-sm font-semibold hidden sm:block" style={{ color: i === step ? "#e91e8c" : "#aaa" }}>{s}</span>
            </button>
            {i < STEPS.length - 1 && <ChevronRight size={14} style={{ color: "#ddd" }} />}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {/* Step 1: Address */}
          {step === 0 && (
            <div className="p-5 rounded-2xl" style={{ background: "white", border: "1px solid #f0e6f0" }}>
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: "#1a1a2e" }}><MapPin size={18} style={{ color: "#e91e8c" }} /> Delivery Address</h2>
              <div className="grid grid-cols-2 gap-3">
                {[["Full Name", "name", "text"], ["Phone Number", "phone", "tel"], ["Pincode", "pincode", "text"], ["City", "city", "text"]].map(([label, field, type]) => (
                  <div key={field}>
                    <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>{label}</label>
                    <input type={type} value={addr[field as keyof typeof addr]} onChange={e => setAddr(p => ({ ...p, [field]: e.target.value }))} className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none" style={{ borderColor: "#e0e0e0" }} placeholder={label} />
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>Full Address</label>
                  <textarea rows={2} value={addr.address} onChange={e => setAddr(p => ({ ...p, address: e.target.value }))} className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none resize-none" style={{ borderColor: "#e0e0e0" }} placeholder="House no, Street, Area" />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1" style={{ color: "#666" }}>State</label>
                  <input value={addr.state} onChange={e => setAddr(p => ({ ...p, state: e.target.value }))} className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none" style={{ borderColor: "#e0e0e0" }} placeholder="State" />
                </div>
              </div>
              <button onClick={() => setStep(1)} className="mt-4 px-8 py-3 rounded-full font-bold text-white text-sm" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>Continue to Payment →</button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 1 && (
            <div className="p-5 rounded-2xl" style={{ background: "white", border: "1px solid #f0e6f0" }}>
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: "#1a1a2e" }}><CreditCard size={18} style={{ color: "#e91e8c" }} /> Payment Method</h2>
              <div className="space-y-3">
                {[["upi", "UPI", "Google Pay, PhonePe, Paytm UPI"], ["card", "Credit / Debit Card", "All major cards accepted"], ["netbanking", "Net Banking", "All major banks"], ["cod", "Cash on Delivery", "Pay when you receive"]].map(([value, label, sub]) => (
                  <label key={value} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all" style={payMethod === value ? { background: "#fdf5f9", border: "2px solid #e91e8c" } : { background: "#fafafa", border: "2px solid #f0f0f0" }}>
                    <input type="radio" name="pay" value={value} checked={payMethod === value} onChange={() => setPayMethod(value)} className="accent-pink-500" />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>{label}</p>
                      <p className="text-xs" style={{ color: "#888" }}>{sub}</p>
                    </div>
                  </label>
                ))}
                {payMethod === "upi" && (
                  <input value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="Enter UPI ID (e.g. name@upi)" className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none" style={{ borderColor: "#e0e0e0" }} />
                )}
              </div>
              <div className="flex gap-3 mt-4">
                <button onClick={() => setStep(0)} className="px-5 py-2.5 rounded-full text-sm font-semibold border" style={{ borderColor: "#e91e8c", color: "#e91e8c" }}>← Back</button>
                <button onClick={() => setStep(2)} className="px-8 py-2.5 rounded-full font-bold text-white text-sm" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>Review Order →</button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 2 && (
            <div className="p-5 rounded-2xl" style={{ background: "white", border: "1px solid #f0e6f0" }}>
              <h2 className="font-bold text-lg mb-4" style={{ color: "#1a1a2e" }}>Review Your Order</h2>
              <div className="space-y-3 mb-5">
                {state.items.map(item => (
                  <div key={item.product.id} className="flex gap-3 items-center">
                    <img src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-xl object-cover" />
                    <div className="flex-1">
                      <p className="text-xs font-bold" style={{ color: "#e91e8c" }}>{item.product.brand}</p>
                      <p className="text-sm font-medium" style={{ color: "#1a1a2e" }}>{item.product.name}</p>
                      <p className="text-xs" style={{ color: "#888" }}>Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-sm">₹{item.product.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setStep(1)} className="px-5 py-2.5 rounded-full text-sm font-semibold border" style={{ borderColor: "#e91e8c", color: "#e91e8c" }}>← Back</button>
                <button onClick={handlePlaceOrder} className="flex-1 py-3.5 rounded-full font-bold text-white text-sm flex items-center justify-center gap-2" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>
                  <ShoppingBag size={16} /> Place Order · ₹{total}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="p-4 rounded-2xl h-fit" style={{ background: "white", border: "1px solid #f0e6f0" }}>
          <h3 className="font-bold mb-3" style={{ color: "#1a1a2e" }}>Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span style={{ color: "#666" }}>Items ({state.items.length})</span><span>₹{cartTotal}</span></div>
            <div className="flex justify-between"><span style={{ color: "#666" }}>Delivery</span><span style={{ color: delivery === 0 ? "#2e7d32" : "#333" }}>{delivery === 0 ? "FREE" : `₹${delivery}`}</span></div>
            <div className="border-t pt-2 flex justify-between font-bold" style={{ borderColor: "#f0e6f0" }}>
              <span>Total</span><span>₹{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
