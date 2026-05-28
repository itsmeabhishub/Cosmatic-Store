import CategoryPageUI from "@/components/product/CategoryPageUI";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

export default function Page() {
  const catSlug = "luxe";
  const catName = catSlug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  const category = CATEGORIES.find(c => c.slug === catSlug);
  const products = PRODUCTS.filter(p => p.category === catSlug.replace("-", ""));
  const fallback = PRODUCTS.slice(0, 8);
  return (
    <CategoryPageUI
      title={catName}
      description={"Shop the best " + catName.toLowerCase() + " products at unbeatable prices"}
      products={products.length > 0 ? products : fallback}
      subcategories={category?.subcategories || []}
      banner={"https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=300&fit=crop"}
    />
  );
}
