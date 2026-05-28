import Link from "next/link";
import { BRANDS } from "@/lib/data";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const colors = ["#e91e8c", "#6c3fc5", "#f5a623", "#26a69a", "#ff6b35", "#1565c0", "#ec407a", "#66bb6a", "#5c6bc0", "#bf8f00", "#e91e8c", "#6c3fc5"];

const allBrands = [...BRANDS,
  { id: "13", name: "Avon", slug: "avon", logo: "AV", productCount: 134 },
  { id: "14", name: "Body Shop", slug: "body-shop", logo: "BS", productCount: 98 },
  { id: "15", name: "Clinique", slug: "clinique", logo: "CL", productCount: 145 },
  { id: "16", name: "Dove", slug: "dove", logo: "DV", productCount: 78 },
  { id: "17", name: "Estée Lauder", slug: "estee-lauder", logo: "EL", productCount: 234 },
  { id: "18", name: "Forest Essentials", slug: "forest-essentials", logo: "FE", productCount: 89 },
  { id: "19", name: "Gillette", slug: "gillette", logo: "GI", productCount: 67 },
  { id: "20", name: "Himalaya", slug: "himalaya", logo: "HI", productCount: 189 },
];

export default function BrandsPage() {
  return (
    <div className="site-container py-10">
      <h1 className="text-2xl font-black mb-2" style={{ color: "#1a1a2e" }}>All Brands</h1>
      <p className="text-sm mb-6" style={{ color: "#888" }}>Discover 500+ authentic beauty brands</p>

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {alphabet.map(l => (
          <button key={l} className="w-8 h-8 rounded-lg text-xs font-bold transition-all hover:text-white hover:scale-110" style={{ background: "#fdf5f9", color: "#e91e8c" }}>{l}</button>
        ))}
      </div>

      {/* Top Brands */}
      <h2 className="text-lg font-bold mb-4" style={{ color: "#1a1a2e" }}>Top Brands</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-8">
        {allBrands.map((brand, i) => (
          <Link key={brand.id} href={`/brands/${brand.slug}`} className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:-translate-y-1 transition-transform group" style={{ border: "1px solid #f0e6f0" }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-base shadow-md" style={{ background: `linear-gradient(135deg,${colors[i % colors.length]},${colors[(i + 3) % colors.length]})` }}>
              {brand.logo}
            </div>
            <span className="text-xs font-medium text-center leading-tight" style={{ color: "#333" }}>{brand.name}</span>
            <span className="text-xs" style={{ color: "#aaa" }}>{brand.productCount}+ items</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
