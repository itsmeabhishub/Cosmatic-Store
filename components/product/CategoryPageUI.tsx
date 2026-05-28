"use client";
import { useState, useMemo } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";

interface CategoryPageProps {
  title: string;
  description?: string;
  products: Product[];
  subcategories?: string[];
  banner?: string;
}

const sortOptions = ["Relevance", "Price: Low to High", "Price: High to Low", "Newest First", "Ratings", "Discount"];
const priceRanges = ["Under ₹200", "₹200–₹500", "₹500–₹1000", "₹1000–₹2000", "Above ₹2000"];

export default function CategoryPageUI({ title, description, products, subcategories = [], banner }: CategoryPageProps) {
  const [selectedSub, setSelectedSub] = useState<string>("All");
  const [sortBy, setSortBy] = useState("Relevance");
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedSub !== "All") list = list.filter(p => p.subcategory === selectedSub);
    if (onlyDiscounted) list = list.filter(p => p.discount > 0);
    if (minRating > 0) list = list.filter(p => p.rating >= minRating);
    switch (sortBy) {
      case "Price: Low to High": list.sort((a, b) => a.price - b.price); break;
      case "Price: High to Low": list.sort((a, b) => b.price - a.price); break;
      case "Ratings": list.sort((a, b) => b.rating - a.rating); break;
      case "Discount": list.sort((a, b) => b.discount - a.discount); break;
      case "Newest First": list = list.filter(p => p.isNew).concat(list.filter(p => !p.isNew)); break;
    }
    return list;
  }, [products, selectedSub, sortBy, minRating, onlyDiscounted]);

  return (
    <div className="site-container py-10">
      {/* Banner */}
      {banner && (
        <div className="relative rounded-2xl overflow-hidden h-40 mb-6">
          <img src={banner} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center px-8" style={{ background: "linear-gradient(90deg,rgba(0,0,0,0.7),transparent)" }}>
            <div>
              <h1 className="text-3xl font-black text-white">{title}</h1>
              {description && <p className="text-white/70 text-sm mt-1">{description}</p>}
            </div>
          </div>
        </div>
      )}
      {!banner && (
        <div className="mb-4">
          <h1 className="text-2xl font-black" style={{ color: "#1a1a2e" }}>{title}</h1>
          {description && <p className="text-sm mt-1" style={{ color: "#666" }}>{description}</p>}
        </div>
      )}

      {/* Subcategory Pills */}
      {subcategories.length > 0 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-4">
          {["All", ...subcategories].map(sub => (
            <button key={sub} onClick={() => setSelectedSub(sub)} className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0" style={selectedSub === sub ? { background: "#e91e8c", color: "white" } : { background: "#f0e6f0", color: "#666" }}>
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Filter/Sort Bar */}
      <div className="flex items-center justify-between mb-4 py-3 px-4 rounded-xl" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
        <div className="flex items-center gap-2">
          <button onClick={() => setFiltersOpen(!filtersOpen)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold" style={{ background: "#e91e8c15", color: "#e91e8c" }}>
            <SlidersHorizontal size={14} /> Filters
          </button>
          <span className="text-sm" style={{ color: "#888" }}>{filtered.length} products</span>
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm px-3 py-1.5 rounded-lg border outline-none" style={{ borderColor: "#f0e6f0", color: "#333" }}>
          {sortOptions.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>

      {/* Filter Drawer (Mobile) */}
      {filtersOpen && (
        <div className="mb-4 p-4 rounded-2xl" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold" style={{ color: "#1a1a2e" }}>Filters</h3>
            <button onClick={() => setFiltersOpen(false)}><X size={16} /></button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: "#666" }}>PRICE RANGE</p>
              {priceRanges.map(p => (
                <label key={p} className="flex items-center gap-2 text-sm py-0.5 cursor-pointer">
                  <input type="checkbox" checked={selectedPrice.includes(p)} onChange={() => setSelectedPrice(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])} className="accent-pink-500" />
                  {p}
                </label>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: "#666" }}>MIN RATING</p>
              {[4, 3, 2].map(r => (
                <label key={r} className="flex items-center gap-2 text-sm py-0.5 cursor-pointer">
                  <input type="radio" name="rating" checked={minRating === r} onChange={() => setMinRating(r)} className="accent-pink-500" />
                  {"⭐".repeat(r)} & above
                </label>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: "#666" }}>OFFERS</p>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={onlyDiscounted} onChange={() => setOnlyDiscounted(!onlyDiscounted)} className="accent-pink-500" />
                Discounted only
              </label>
            </div>
          </div>
          <button onClick={() => { setSelectedPrice([]); setMinRating(0); setOnlyDiscounted(false); }} className="mt-3 text-xs font-semibold" style={{ color: "#e91e8c" }}>Clear All Filters</button>
        </div>
      )}

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {filtered.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-4xl">🔍</span>
          <p className="mt-3 font-medium" style={{ color: "#888" }}>No products found for selected filters</p>
          <button onClick={() => { setSelectedSub("All"); setSelectedPrice([]); setMinRating(0); setOnlyDiscounted(false); }} className="mt-3 text-sm font-semibold" style={{ color: "#e91e8c" }}>Clear Filters</button>
        </div>
      )}
    </div>
  );
}
