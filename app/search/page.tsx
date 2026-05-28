"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/product/ProductCard";
import { Suspense } from "react";

function SearchResults() {
  const sp = useSearchParams();
  const q = sp.get("q") || "";
  const [query, setQuery] = useState(q);

  const results = useMemo(() => {
    if (!query.trim()) return PRODUCTS;
    const lower = query.toLowerCase();
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(lower) || p.brand.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower));
  }, [query]);

  return (
    <div className="site-container py-10">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, brands, categories..." className="w-full pl-5 pr-14 py-4 rounded-full border-2 text-sm outline-none" style={{ borderColor: "#e91e8c", background: "#fdf5f9", fontSize: "16px" }} />
        <div className="absolute right-2 top-2 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#e91e8c" }}>
          <Search size={16} color="white" />
        </div>
      </div>

      {query && <p className="text-sm mb-4" style={{ color: "#888" }}>{results.length} results for "<strong style={{ color: "#1a1a2e" }}>{query}</strong>"</p>}

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {results.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-5xl mb-3">🔍</div>
          <p className="font-bold text-lg" style={{ color: "#1a1a2e" }}>No results for "{query}"</p>
          <p className="text-sm mt-1" style={{ color: "#888" }}>Try different keywords or browse categories</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return <Suspense><SearchResults /></Suspense>;
}
