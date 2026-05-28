import { Product } from "@/types";
import ProductCard from "./ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  return (
    <section>
      {title && (
        <SectionHeading title={title} subtitle={subtitle} align="center" />
      )}
      <div className="product-grid-new">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
