"use client";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { dispatch, isInWishlist, isInCart } = useCart();
  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  return (
    <article className="product-card group relative">
      <div className="product-card-image">
        <Link href={`/products/${product.id}`} className="absolute inset-0">
          <img src={product.image} alt={product.name} />
        </Link>
      </div>

      <button
        onClick={() => dispatch({ type: "TOGGLE_WISHLIST", productId: product.id })}
        className="product-card-wishlist"
        aria-label="Toggle wishlist"
      >
        <Heart size={16} fill={inWishlist ? "#e91e8c" : "none"} color={inWishlist ? "#e91e8c" : "#6b687b"} />
      </button>

      <div className="product-card-body">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7b2cbf]">{product.brand}</span>
          {product.discount > 0 ? (
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white rounded-full px-3 py-1" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>
              {product.discount}% OFF
            </span>
          ) : null}
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="mt-3 text-sm sm:text-base font-semibold leading-tight text-[#1a1a2e] line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="product-card-meta">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f0fb] px-3 py-2 text-xs font-semibold text-[#5e4b7e]">
            <Star size={14} className="text-[#f5c150]" />
            <span>{product.rating}</span>
          </div>
          <span className="text-xs text-[#8b8796]">({(product.reviews / 1000).toFixed(1)}k)</span>
        </div>

        <div className="product-card-price">
          <span className="price">₹{product.price}</span>
          <span className="mrp">₹{product.mrp}</span>
        </div>

        <div className="product-card-actions">
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", product })}
            className={`inline-flex items-center justify-center gap-2 ${inCart ? "bg-white text-[#e91e8c] border border-[#e91e8c] shadow-sm" : "bg-gradient-to-r from-[#e91e8c] to-[#6c3fc5] text-white shadow-lg hover:scale-[1.02]"} px-5 text-sm`}
          >
            <ShoppingBag size={14} />
            <span className="font-semibold">{inCart ? "Added" : "Add to Bag"}</span>
          </button>

          <Link href={`/products/${product.id}`} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f3fa] text-[#6b687b] shadow-sm transition-transform hover:scale-105">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v4H3z"/><path d="M6 8v13h12V8"/></svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
