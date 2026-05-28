import { BRANDS, PRODUCTS } from "@/lib/data";
import ProductGrid from "@/components/product/ProductGrid";

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = BRANDS.find(b => b.slug === params.slug);
  const brandName = brand?.name || params.slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  const products = PRODUCTS.filter(p => p.brand.toLowerCase() === brandName.toLowerCase()).concat(PRODUCTS.slice(0, 8));
  return (
    <div className="site-container py-10">
      <div className="flex items-center gap-5 mb-8 p-6 rounded-2xl" style={{ background: "linear-gradient(135deg,#fdf5f9,#f3e8ff)", border: "1px solid #f0e6f0" }}>
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-white text-2xl" style={{ background: "linear-gradient(135deg,#e91e8c,#6c3fc5)" }}>
          {brandName.substring(0, 2).toUpperCase()}
        </div>
        <div>
          <h1 className="text-2xl font-black" style={{ color: "#1a1a2e" }}>{brandName}</h1>
          <p className="text-sm" style={{ color: "#888" }}>Premium beauty products | {brand?.productCount || 100}+ products</p>
        </div>
      </div>
      <ProductGrid products={products.slice(0, 16)} title={`${brandName} Products`} />
    </div>
  );
}
