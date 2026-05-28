import { Product, Category, Brand, BlogPost, Offer } from "@/types";

export const CATEGORIES: Category[] = [
  { id: "1", name: "Makeup", slug: "makeup", icon: "💄", color: "#e91e8c", subcategories: ["Lips", "Eyes", "Face", "Nails"] },
  { id: "2", name: "Skincare", slug: "skincare", icon: "✨", color: "#6c3fc5", subcategories: ["Moisturizer", "Serum", "Sunscreen", "Face Wash"] },
  { id: "3", name: "Haircare", slug: "haircare", icon: "💆", color: "#f5a623", subcategories: ["Shampoo", "Conditioner", "Hair Oil", "Mask"] },
  { id: "4", name: "Fragrance", slug: "fragrance", icon: "🌸", color: "#ff6b35", subcategories: ["Perfume", "Deodorant", "Body Mist"] },
  { id: "5", name: "Bath & Body", slug: "bath-body", icon: "🛁", color: "#26a69a", subcategories: ["Body Wash", "Scrub", "Lotion", "Soap"] },
  { id: "6", name: "Wellness", slug: "wellness", icon: "🌿", color: "#66bb6a", subcategories: ["Vitamins", "Supplements", "Ayurvedic"] },
  { id: "7", name: "Men's", slug: "men", icon: "🧔", color: "#1565c0", subcategories: ["Shaving", "Beard", "Skincare", "Grooming"] },
  { id: "8", name: "Nails", slug: "nails", icon: "💅", color: "#ec407a", subcategories: ["Nail Polish", "Nail Art", "Nail Care"] },
  { id: "9", name: "Appliances", slug: "appliances", icon: "🔌", color: "#5c6bc0", subcategories: ["Hair Dryer", "Straightener", "Epilator"] },
  { id: "10", name: "Luxe", slug: "luxe", icon: "👑", color: "#bf8f00", subcategories: ["Luxury Skincare", "Luxury Makeup", "Niche Perfume"] },
];

export const BRANDS: Brand[] = [
  { id: "1", name: "Lakmé", slug: "lakme", logo: "L", productCount: 245 },
  { id: "2", name: "Maybelline", slug: "maybelline", logo: "M", productCount: 312 },
  { id: "3", name: "L'Oréal", slug: "loreal", logo: "LO", productCount: 428 },
  { id: "4", name: "Mamaearth", slug: "mamaearth", logo: "ME", productCount: 189 },
  { id: "5", name: "WOW Science", slug: "wow", logo: "W", productCount: 156 },
  { id: "6", name: "SUGAR", slug: "sugar", logo: "SU", productCount: 278 },
  { id: "7", name: "Biotique", slug: "biotique", logo: "B", productCount: 134 },
  { id: "8", name: "Minimalist", slug: "minimalist", logo: "MI", productCount: 87 },
  { id: "9", name: "Huda Beauty", slug: "huda-beauty", logo: "HB", productCount: 203 },
  { id: "10", name: "The Ordinary", slug: "the-ordinary", logo: "TO", productCount: 65 },
  { id: "11", name: "MAC", slug: "mac", logo: "MAC", productCount: 389 },
  { id: "12", name: "NYX", slug: "nyx", logo: "NYX", productCount: 267 },
];

const PRODUCT_IMAGES = {
  lipstick: "https://images.unsplash.com/photo-1586495777744-4e6232bf2263?w=400&h=400&fit=crop",
  foundation: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
  eyeshadow: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
  skincare: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
  serum: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
  perfume: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop",
  haircare: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
  moisturizer: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
  blush: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400&h=400&fit=crop",
  nailpolish: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop",
  sunscreen: "https://images.unsplash.com/photo-1526758097130-bab247274f58?w=400&h=400&fit=crop",
  mascara: "https://images.unsplash.com/photo-1586495777744-4e6232bf2263?w=400&h=400&fit=crop",
};

export const PRODUCTS: Product[] = [
  { id: "1", name: "Matte Lip Color Ruby Red", brand: "Lakmé", price: 299, mrp: 499, discount: 40, rating: 4.5, reviews: 2341, image: PRODUCT_IMAGES.lipstick, category: "makeup", subcategory: "Lips", inStock: true, isBestSeller: true, shades: ["Ruby Red", "Nude Pink", "Berry", "Coral", "Maroon"] },
  { id: "2", name: "Fit Me Matte+Poreless Foundation", brand: "Maybelline", price: 445, mrp: 699, discount: 36, rating: 4.3, reviews: 4521, image: PRODUCT_IMAGES.foundation, category: "makeup", subcategory: "Face", inStock: true, isBestSeller: true },
  { id: "3", name: "Naked Eyeshadow Palette", brand: "SUGAR", price: 899, mrp: 1299, discount: 31, rating: 4.6, reviews: 1876, image: PRODUCT_IMAGES.eyeshadow, category: "makeup", subcategory: "Eyes", inStock: true, isNew: true },
  { id: "4", name: "Vitamin C Face Serum 20%", brand: "Minimalist", price: 599, mrp: 799, discount: 25, rating: 4.7, reviews: 8932, image: PRODUCT_IMAGES.serum, category: "skincare", subcategory: "Serum", inStock: true, isBestSeller: true },
  { id: "5", name: "Ubtan Face Wash", brand: "Mamaearth", price: 249, mrp: 349, discount: 29, rating: 4.4, reviews: 5621, image: PRODUCT_IMAGES.skincare, category: "skincare", subcategory: "Face Wash", inStock: true },
  { id: "6", name: "Acqua di Gio EDP 100ml", brand: "Giorgio Armani", price: 4999, mrp: 7500, discount: 33, rating: 4.8, reviews: 1243, image: PRODUCT_IMAGES.perfume, category: "fragrance", subcategory: "Perfume", inStock: true },
  { id: "7", name: "Onion Shampoo for Hair Fall", brand: "WOW Science", price: 399, mrp: 599, discount: 33, rating: 4.5, reviews: 12430, image: PRODUCT_IMAGES.haircare, category: "haircare", subcategory: "Shampoo", inStock: true, isBestSeller: true },
  { id: "8", name: "SPF 50 Sunscreen PA++++", brand: "Minimalist", price: 349, mrp: 499, discount: 30, rating: 4.6, reviews: 7823, image: PRODUCT_IMAGES.sunscreen, category: "skincare", subcategory: "Sunscreen", inStock: true, isNew: true },
  { id: "9", name: "Hyaluronic Acid Moisturizer", brand: "Biotique", price: 449, mrp: 649, discount: 31, rating: 4.4, reviews: 3241, image: PRODUCT_IMAGES.moisturizer, category: "skincare", subcategory: "Moisturizer", inStock: true },
  { id: "10", name: "Volumizing Mascara Black", brand: "Maybelline", price: 299, mrp: 499, discount: 40, rating: 4.3, reviews: 6543, image: PRODUCT_IMAGES.mascara, category: "makeup", subcategory: "Eyes", inStock: true },
  { id: "11", name: "Blusher Peach Glow", brand: "MAC", price: 1299, mrp: 1800, discount: 28, rating: 4.7, reviews: 2341, image: PRODUCT_IMAGES.blush, category: "makeup", subcategory: "Face", inStock: true, isBestSeller: true },
  { id: "12", name: "Nail Xtreme Color Glitter", brand: "Lakmé", price: 149, mrp: 229, discount: 35, rating: 4.2, reviews: 1876, image: PRODUCT_IMAGES.nailpolish, category: "nails", subcategory: "Nail Polish", inStock: true, isNew: true },
  { id: "13", name: "Retinol 0.2% Night Cream", brand: "The Ordinary", price: 899, mrp: 1200, discount: 25, rating: 4.8, reviews: 4312, image: PRODUCT_IMAGES.moisturizer, category: "skincare", subcategory: "Moisturizer", inStock: true },
  { id: "14", name: "Pro Longwear Lipstick Nude", brand: "MAC", price: 1599, mrp: 2000, discount: 20, rating: 4.9, reviews: 8765, image: PRODUCT_IMAGES.lipstick, category: "makeup", subcategory: "Lips", inStock: true, isBestSeller: true },
  { id: "15", name: "Argan Oil Hair Mask 500ml", brand: "L'Oréal", price: 699, mrp: 999, discount: 30, rating: 4.5, reviews: 2987, image: PRODUCT_IMAGES.haircare, category: "haircare", subcategory: "Mask", inStock: true },
  { id: "16", name: "Rose Water Toner", brand: "Biotique", price: 199, mrp: 299, discount: 33, rating: 4.3, reviews: 5432, image: PRODUCT_IMAGES.skincare, category: "skincare", subcategory: "Toner", inStock: true, isNew: true },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: "1", title: "10 Best Skincare Routines for Glowing Skin", excerpt: "Discover the ultimate morning and night skincare routines that will transform your skin.", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop", category: "Skincare", author: "Beauty Expert", date: "May 15, 2025", readTime: "5 min", slug: "best-skincare-routines" },
  { id: "2", title: "Summer Makeup Looks: Stay Fresh All Day", excerpt: "Beat the heat with these long-lasting summer makeup tips that keep you looking fabulous.", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop", category: "Makeup", author: "Style Editor", date: "May 10, 2025", readTime: "4 min", slug: "summer-makeup-looks" },
  { id: "3", title: "Hair Care Secrets: Grow Longer, Stronger Hair", excerpt: "Expert tips and product recommendations for achieving the hair of your dreams.", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop", category: "Haircare", author: "Hair Specialist", date: "May 5, 2025", readTime: "6 min", slug: "hair-care-secrets" },
  { id: "4", title: "Top Fragrances of 2025: Our Editors' Picks", excerpt: "From fresh florals to deep musks — the best perfumes you need in your collection.", image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&h=400&fit=crop", category: "Fragrance", author: "Fragrance Curator", date: "April 28, 2025", readTime: "3 min", slug: "top-fragrances-2025" },
];

export const OFFERS: Offer[] = [
  { id: "1", title: "FLAT 25% OFF", description: "On orders above ₹999", code: "GLAM25", discount: 25, minOrder: 999, validTill: "June 30, 2025" },
  { id: "2", title: "BUY 2 GET 1 FREE", description: "On all lipsticks", code: "LIP3FOR2", discount: 33, validTill: "June 15, 2025" },
  { id: "3", title: "FLAT ₹200 OFF", description: "On first order above ₹500", code: "FIRST200", discount: 200, minOrder: 500, validTill: "December 31, 2025" },
];

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter(p => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isBestSeller).slice(0, 8);
}

export function getNewLaunches(): Product[] {
  return PRODUCTS.filter(p => p.isNew);
}
