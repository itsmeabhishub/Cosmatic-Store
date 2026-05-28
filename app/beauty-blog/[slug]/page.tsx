import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { Clock, User, ChevronRight } from "lucide-react";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug) || BLOG_POSTS[0];
  return (
    <div className="site-container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "#888" }}>
        <Link href="/" className="hover:text-pink-500">Home</Link>
        <ChevronRight size={12} />
        <Link href="/beauty-blog" className="hover:text-pink-500">Beauty Blog</Link>
        <ChevronRight size={12} />
        <span style={{ color: "#e91e8c" }}>{post.title}</span>
      </div>
      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#e91e8c", color: "white" }}>{post.category}</span>
      <h1 className="text-2xl md:text-3xl font-black mt-3 mb-3 leading-tight" style={{ color: "#1a1a2e" }}>{post.title}</h1>
      <div className="flex items-center gap-4 text-xs mb-5" style={{ color: "#aaa" }}>
        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime} read</span>
        <span>{post.date}</span>
      </div>
      <img src={post.image} alt={post.title} className="w-full rounded-2xl h-56 md:h-80 object-cover mb-6" />
      <div className="text-sm leading-relaxed space-y-4" style={{ color: "#555" }}>
        <p className="text-base">{post.excerpt}</p>
        <p>Taking care of your skin is one of the most important things you can do for yourself. With the right products and routine, you can achieve the glowing, healthy skin you've always wanted.</p>
        <h2 className="text-lg font-bold" style={{ color: "#1a1a2e" }}>Step 1: Cleansing</h2>
        <p>A good cleanser is the foundation of any skincare routine. Look for a gentle formula that removes makeup, dirt, and excess oil without stripping your skin's natural moisture barrier.</p>
        <h2 className="text-lg font-bold" style={{ color: "#1a1a2e" }}>Step 2: Serum & Moisturizer</h2>
        <p>Serums are concentrated treatments targeting specific skin concerns. Vitamin C brightens, retinol addresses aging, and hyaluronic acid provides deep hydration. Follow with a moisturizer to lock everything in.</p>
        <h2 className="text-lg font-bold" style={{ color: "#1a1a2e" }}>Step 3: Sunscreen</h2>
        <p>Never skip SPF! Sunscreen is the single most important product for preventing premature aging and protecting your skin from UV damage.</p>
      </div>
      <div className="mt-8 p-4 rounded-2xl" style={{ background: "#fdf5f9", border: "1px solid #f0e6f0" }}>
        <p className="font-bold text-sm mb-3" style={{ color: "#1a1a2e" }}>🛍️ Shop Featured Products</p>
        <Link href="/skincare" className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: "linear-gradient(90deg,#e91e8c,#6c3fc5)" }}>Shop Skincare →</Link>
      </div>
      </div>
    </div>
  );
}
