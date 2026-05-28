"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Heart, ShoppingBag, Star, ChevronRight, Share2, Shield, Truck, RotateCcw } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const product = PRODUCTS.find(p => p.id === params.id);
  const { dispatch, isInWishlist, isInCart } = useCart();
  const [activeTab, setActiveTab] = useState("description");
  const [selectedShade, setSelectedShade] = useState(product?.shades?.[0] || "");
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);

  if (!product) return (
    <div className="text-center py-20">
      <p className="text-2xl">😕</p>
      <p className="mt-2 font-medium">Product not found</p>
      <Link href="/" className="mt-4 inline-block text-pink-500 font-semibold">← Go Home</Link>
    </div>
  );

  const images = [product.image, product.image, product.image];
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);

  const reviews = [
    { user: "Priya S.", rating: 5, comment: "Absolutely love this product! Amazing quality and lasts all day.", date: "May 2025", verified: true },
    { user: "Ananya K.", rating: 4, comment: "Great product, packaging is beautiful. Would buy again!", date: "April 2025", verified: true },
    { user: "Sneha R.", rating: 5, comment: "Best purchase ever. Skin looks so glowing!", date: "March 2025", verified: false },
  ];

  return (
    <div className="site-container py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "#888" }}>
        <Link href="/" className="hover:text-pink-500">Home</Link>
        <ChevronRight size={12} />
        <Link href={`/${product.category}`} className="hover:text-pink-500 capitalize">{product.category}</Link>
        <ChevronRight size={12} />
        <span style={{ color: "#e91e8c" }}>{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Images */}
        <div>
          <div className="relative rounded-2xl overflow-hidden mb-3" style={{ background: "#fdf5f9", aspectRatio: "1" }}>
            <img src={images[imgIdx]} alt={product.name} className="w-full h-full object-cover" />
            {product.discount > 0 && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-bold" style={{ background: "#e91e8c" }}>{product.discount}% OFF</span>
            )}
            <button onClick={() => dispatch({ type: "TOGGLE_WISHLIST", productId: product.id })} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
              <Heart size={18} fill={isInWishlist(product.id) ? "#e91e8c" : "none"} color={isInWishlist(product.id) ? "#e91e8c" : "#999"} />
            </button>
          </div>
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button key={i} onClick={() => setImgIdx(i)} className="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all" style={{ borderColor: imgIdx === i ? "#e91e8c" : "transparent" }}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: "#e91e8c" }}>{product.brand}</p>
          <h1 className="text-2xl font-black mb-2" style={{ color: "#1a1a2e" }}>{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: "#e91e8c" }}>
              <Star size={12} fill="white" color="white" />
              <span className="text-white text-sm font-bold">{product.rating}</span>
            </div>
            <span className="text-sm" style={{ color: "#888" }}>{product.reviews.toLocaleString()} reviews</span>
            <button className="text-sm font-semibold" style={{ color: "#6c3fc5" }}>Read Reviews</button>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-black" style={{ color: "#1a1a2e" }}>₹{product.price}</span>
            <span className="text-lg line-through" style={{ color: "#bbb" }}>₹{product.mrp}</span>
            <span className="text-sm font-bold px-2 py-0.5 rounded" style={{ background: "#e8f5e9", color: "#2e7d32" }}>Save ₹{product.mrp - product.price}</span>
          </div>

          {/* Inclusive Tax */}
          <p className="text-xs mb-4" style={{ color: "#888" }}>Inclusive of all taxes | Free delivery on this item</p>

          {/* Shades */}
          {product.shades && product.shades.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold mb-2" style={{ color: "#333" }}>Shade: <span style={{ color: "#e91e8c" }}>{selectedShade}</span></p>
              <div className="flex flex-wrap gap-2">
                {product.shades.map(shade => (
                  <button key={shade} onClick={() => setSelectedShade(shade)} className="px-3 py-1 rounded-full text-xs font-medium border transition-all" style={selectedShade === shade ? { background: "#e91e8c", color: "white", borderColor: "#e91e8c" } : { background: "white", color: "#555", borderColor: "#ddd" }}>
                    {shade}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold" style={{ color: "#333" }}>Qty:</span>
            <div className="flex items-center gap-2 border rounded-full px-2" style={{ borderColor: "#e0e0e0" }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-7 h-7 flex items-center justify-center text-lg font-bold">−</button>
              <span className="w-6 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-7 h-7 flex items-center justify-center text-lg font-bold">+</button>
            </div>
          </div>

          {/* Offers */}
          <div className="p-3 rounded-xl mb-4" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
            <p className="text-xs font-bold mb-2" style={{ color: "#e91e8c" }}>🎁 Available Offers</p>
            {["10% Cashback with Paytm | Code: PAYTM10", "Extra 5% OFF on prepaid orders | Code: PREPAID5", "Buy 2 & get flat ₹100 off | Code: B2G100"].map(offer => (
              <p key={offer} className="text-xs py-0.5" style={{ color: "#555" }}>• {offer}</p>
            ))}
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-2 text-xs mb-5" style={{ color: "#555" }}>
            <Truck size={14} style={{ color: "#e91e8c" }} />
            <span>Free delivery by <strong>Tomorrow</strong> | Enter pincode to check</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", product, shade: selectedShade })}
              className="flex-1 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-105"
              style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)", color: "white" }}
            >
              <ShoppingBag size={16} /> {isInCart(product.id) ? "Go to Bag" : "Add to Bag"}
            </button>
            <button onClick={() => dispatch({ type: "TOGGLE_WISHLIST", productId: product.id })} className="w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#e91e8c" }}>
              <Heart size={18} fill={isInWishlist(product.id) ? "#e91e8c" : "none"} color="#e91e8c" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#ddd" }}>
              <Share2 size={18} color="#666" />
            </button>
          </div>

          {/* Trust */}
          <div className="flex gap-4 mt-4">
            {[[Shield, "Genuine"], [Truck, "Free Ship"], [RotateCcw, "7-day Return"]].map(([Icon, label], i) => (
              <div key={i} className="flex items-center gap-1 text-xs" style={{ color: "#888" }}>
                <Icon size={12} /> {label as string}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex border-b gap-4 mb-4" style={{ borderColor: "#f0e6f0" }}>
          {["description", "ingredients", "reviews"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className="py-2 px-1 text-sm font-semibold capitalize border-b-2 transition-all" style={activeTab === tab ? { borderColor: "#e91e8c", color: "#e91e8c" } : { borderColor: "transparent", color: "#888" }}>
              {tab === "reviews" ? `Reviews (${product.reviews.toLocaleString()})` : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="text-sm leading-relaxed" style={{ color: "#555" }}>
            <p>Experience the perfect blend of quality and luxury with {product.name} by {product.brand}. This premium product is formulated to deliver exceptional results for all skin types. Our expert formula ensures long-lasting performance and a flawless finish that lasts all day.</p>
            <ul className="mt-3 space-y-1">
              <li>• Long-lasting formula for all-day wear</li>
              <li>• Dermatologist tested & hypoallergenic</li>
              <li>• Cruelty-free & vegan</li>
              <li>• Free from parabens, sulfates & harmful chemicals</li>
            </ul>
          </div>
        )}
        {activeTab === "ingredients" && (
          <p className="text-sm leading-relaxed" style={{ color: "#555" }}>Aqua, Glycerin, Niacinamide, Vitamin C (Ascorbic Acid), Hyaluronic Acid, Aloe Vera Extract, Tocopherol (Vitamin E), Panthenol (Vitamin B5), Allantoin, Carbomer, Triethanolamine, Phenoxyethanol, Ethylhexylglycerin.</p>
        )}
        {activeTab === "reviews" && (
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="p-4 rounded-2xl" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs" style={{ background: "#e91e8c" }}>{r.user[0]}</div>
                    <span className="font-semibold text-sm" style={{ color: "#1a1a2e" }}>{r.user}</span>
                    {r.verified && <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "#e8f5e9", color: "#2e7d32" }}>✓ Verified</span>}
                  </div>
                  <span className="text-xs" style={{ color: "#aaa" }}>{r.date}</span>
                </div>
                <div className="flex mb-1.5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={12} fill={j < r.rating ? "#e91e8c" : "#ddd"} color={j < r.rating ? "#e91e8c" : "#ddd"} />)}
                </div>
                <p className="text-sm" style={{ color: "#555" }}>{r.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1a1a2e" }}>You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
}
