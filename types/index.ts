export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: string;
  subcategory?: string;
  tags?: string[];
  description?: string;
  ingredients?: string;
  howToUse?: string;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  shades?: string[];
  sizes?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image?: string;
  color: string;
  subcategories?: string[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description?: string;
  productCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedShade?: string;
  selectedSize?: string;
}

export interface Review {
  id: string;
  user: string;
  avatar?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  discount: number;
  minOrder?: number;
  image?: string;
  validTill: string;
}
