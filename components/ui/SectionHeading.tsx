import Link from "next/link";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
  align?: "center" | "left";
  eyebrow?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  actionLabel,
  actionHref,
  align = "center",
  eyebrow = "Premium Edit",
}: SectionHeadingProps) {
  return (
    <div className={`section-title ${align === "center" ? "text-center" : "text-left"}`}>
      <div className={`flex flex-col gap-6 ${align === "center" ? "items-center" : "items-start"} md:flex-row md:items-end md:justify-between`}>
        <div className={align === "center" ? "w-full md:max-w-3xl" : "w-full md:max-w-2xl"}>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>

        {actionLabel && actionHref ? (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#ded0e6] bg-white px-5 py-3 text-sm font-semibold tracking-wide text-[#4b4070] shadow-sm shadow-[#b8a9ce30] transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {actionLabel}
            <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
