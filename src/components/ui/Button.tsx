import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, type LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  iconRight?: boolean;
  href?: string;
  children: ReactNode;
  fullWidthOnMobile?: boolean;
}

const sizeClass: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm rounded-xl",
  md: "px-7 py-3.5 text-base rounded-[14px]",
  lg: "px-8 py-4 text-lg rounded-[14px]",
  xl: "px-10 py-5 text-xl rounded-[18px]",
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost:
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[14px] font-medium text-white/80 hover:text-gold-400 hover:bg-white/5 transition",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon: Icon = ArrowRight,
      iconRight = true,
      href,
      children,
      fullWidthOnMobile = true,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      variantClass[variant],
      sizeClass[size],
      fullWidthOnMobile && "w-full sm:w-auto",
      "group font-semibold transition-all duration-300 select-none whitespace-nowrap",
      className,
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {!iconRight && Icon ? <Icon className="w-5 h-5 -ml-1 transition-transform group-hover:-translate-x-0.5" /> : null}
          <span>{children}</span>
          {iconRight && Icon ? <Icon className="w-5 h-5 -mr-1 transition-transform group-hover:translate-x-0.5" /> : null}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {!iconRight && Icon ? <Icon className="w-5 h-5 -ml-1 transition-transform group-hover:-translate-x-0.5" /> : null}
        <span>{children}</span>
        {iconRight && Icon ? <Icon className="w-5 h-5 -mr-1 transition-transform group-hover:translate-x-0.5" /> : null}
      </button>
    );
  },
);

Button.displayName = "Button";
