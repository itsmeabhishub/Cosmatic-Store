"use client";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/lib/data";

export default function Bestsellers() {
  const products = getFeaturedProducts();

  return (
    <section>
      <SectionHeading
        title="Bestsellers"
        subtitle="Explore the most-loved beauty essentials with premium results."
        align="center"
      />

      <div className="product-grid-new">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
