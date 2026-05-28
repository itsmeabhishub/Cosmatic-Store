import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { Clock, User } from "lucide-react";

export default function BeautyBlogPage() {
  const categories = ["All", "Skincare", "Makeup", "Haircare", "Fragrance", "Wellness"];
  return (
    <div className="site-container py-10">
      {/* Hero */}
      <div className="text-center py-10 mb-8 rounded-3xl" style={{ background: "linear-gradient(135deg,#fdf5f9,#f3e8ff)" }}>
        <h1 className="text-3xl font-black mb-2" style={{ color: "#1a1a2e" }}>Beauty Blog ✨</h1>
        <p className="text-sm" style={{ color: "#888" }}>Expert tips, trends & tutorials from our beauty editors</p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6">
        {categories.map(c => (
          <button key={c} className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap shrink-0" style={c === "All" ? { background: "#e91e8c", color: "white" } : { background: "#fdf5f9", color: "#666" }}>{c}</button>
        ))}
      </div>

      {/* Featured Post */}
      <Link href={`/beauty-blog/${BLOG_POSTS[0].slug}`} className="block rounded-3xl overflow-hidden mb-8 relative h-64 md:h-80 group">
        <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
        <div className="absolute bottom-0 p-6">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#e91e8c", color: "white" }}>{BLOG_POSTS[0].category}</span>
          <h2 className="text-xl font-black text-white mt-2">{BLOG_POSTS[0].title}</h2>
          <p className="text-white/70 text-sm mt-1">{BLOG_POSTS[0].excerpt}</p>
        </div>
      </Link>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {BLOG_POSTS.map(post => (
          <Link key={post.id} href={`/beauty-blog/${post.slug}`} className="rounded-2xl overflow-hidden group" style={{ border: "1px solid #f0e6f0" }}>
            <div className="overflow-hidden h-44">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#e91e8c15", color: "#e91e8c" }}>{post.category}</span>
              <h3 className="font-bold text-sm mt-2 line-clamp-2" style={{ color: "#1a1a2e" }}>{post.title}</h3>
              <p className="text-xs mt-1 line-clamp-2" style={{ color: "#888" }}>{post.excerpt}</p>
              <div className="flex items-center gap-3 mt-3 text-xs" style={{ color: "#aaa" }}>
                <span className="flex items-center gap-1"><User size={10} /> {post.author}</span>
                <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
