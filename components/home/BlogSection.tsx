import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogSection() {
  return (
    <section>
      <SectionHeading
        title="Beauty Blog"
        subtitle="Inspiration, routines, and expert advice for modern beauty rituals."
        actionLabel="View All"
        actionHref="/beauty-blog"
        align="left"
        eyebrow="Style & Advice"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            href={`/beauty-blog/${post.slug}`}
            className="group overflow-hidden rounded-[28px] border border-[#f0e6f0] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            <div className="overflow-hidden h-56">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <span className="inline-flex rounded-full bg-[#f8e6f6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#e91e8c]">
                {post.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[#1a1a2e] leading-tight line-clamp-2">{post.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#7f738c]">
                <Clock size={14} />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
