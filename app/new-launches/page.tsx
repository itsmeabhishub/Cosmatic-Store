import { PRODUCTS } from "@/lib/data";
import ProductGrid from "@/components/product/ProductGrid";

export default function NewLaunchesPage() {
  const newProducts = PRODUCTS.filter(p => p.isNew);
  const allProducts = [...newProducts, ...PRODUCTS.slice(0, 12)];
  return (
    <div className="site-container py-10">
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 rounded-full text-sm font-bold" style={{ background: "#e91e8c15", color: "#e91e8c" }}>✨ Just Arrived</span>
        <h1 className="text-3xl font-black mt-2" style={{ color: "#1a1a2e" }}>New Launches</h1>
        <p className="text-sm mt-1" style={{ color: "#888" }}>Fresh arrivals from your favourite brands</p>
      </div>
      <ProductGrid products={allProducts} />
    </div>
  );
}
