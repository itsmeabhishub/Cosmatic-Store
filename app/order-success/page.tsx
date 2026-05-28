import Link from "next/link";

export default function OrderSuccessPage() {
  const orderId = "GS" + Math.random().toString(36).substring(2, 9).toUpperCase();
  return (
    <div className="site-container py-10">
      <div className="mx-auto max-w-lg text-center px-4">
        <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mx-auto mb-6" style={{ background: "linear-gradient(135deg,#e91e8c,#6c3fc5)" }}>
        🎉
      </div>
      <h1 className="text-3xl font-black mb-2" style={{ color: "#1a1a2e" }}>Order Placed!</h1>
      <p className="text-sm mb-1" style={{ color: "#888" }}>Your order has been successfully placed</p>
      <p className="font-bold text-lg mb-6" style={{ color: "#e91e8c" }}>Order #{orderId}</p>
      <div className="p-5 rounded-2xl mb-6 text-left" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
        <div className="space-y-2 text-sm">
          {[["📦", "Order Confirmed", "Your order is confirmed"], ["🚚", "Estimated Delivery", "2–3 business days"], ["📍", "Delivery", "Your saved address"], ["💳", "Payment", "On delivery / Prepaid"]].map(([icon, label, val]) => (
            <div key={label} className="flex items-start gap-3">
              <span>{icon}</span>
              <div>
                <p className="font-semibold" style={{ color: "#1a1a2e" }}>{label}</p>
                <p style={{ color: "#888" }}>{val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <Link href="/profile/orders" className="px-6 py-3 rounded-full text-sm font-bold border-2" style={{ borderColor: "#e91e8c", color: "#e91e8c" }}>Track Order</Link>
        <Link href="/" className="px-6 py-3 rounded-full text-sm font-bold text-white" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>Continue Shopping</Link>
      </div>
      </div>
    </div>
  );
}
