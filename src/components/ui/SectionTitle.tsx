import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  eyebrowClass?: string;
  children?: ReactNode;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
  eyebrowClass,
  children,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto mb-14 lg:mb-20",
        centered ? "text-center" : "text-left",
        !centered && "mx-0",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-gradient-soft border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] mb-5",
            eyebrowClass,
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(255,215,0,0.7)]" />
          {eyebrow}
        </div>
      ) : null}

      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-5">
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="text-gradient-gold">
              {" "}{word}
            </span>
          ) : (
            <span key={i}>{i === 0 ? "" : " "}{word}</span>
          ),
        )}
      </h2>

      {subtitle ? (
        <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed">
          {subtitle}
        </p>
      ) : null}

      {children}

      {centered ? (
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/60" />
          <div className="divider-dot" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/60" />
        </div>
      ) : null}
    </div>
  );
}
