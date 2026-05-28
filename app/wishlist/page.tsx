"use client";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";

export default function WishlistPage() {
  const { state } = useCart();
  const wishlistProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));

  if (wishlistProducts.length === 0) return (
    <div className="max-w-lg mx-auto text-center py-20 px-4">
      <Heart size={56} className="mx-auto mb-4" style={{ color: "#f0e6f0" }} />
      <h2 className="text-2xl font-black mb-2" style={{ color: "#1a1a2e" }}>Your wishlist is empty</h2>
      <p className="text-sm mb-6" style={{ color: "#888" }}>Save your favourite products here</p>
      <Link href="/" className="inline-block px-8 py-3 rounded-full font-bold text-white" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>Explore Products →</Link>
    </div>
  );

  return (
    <div className="site-container py-10">
      <div className="flex items-center gap-2 mb-6">
        <Heart size={22} fill="#e91e8c" color="#e91e8c" />
        <h1 className="text-2xl font-black" style={{ color: "#1a1a2e" }}>My Wishlist ({wishlistProducts.length})</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {wishlistProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
