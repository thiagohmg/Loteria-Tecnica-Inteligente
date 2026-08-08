import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { content } from "@/data/content";

const navLinks = [
  { id: "curso", label: "O Curso" },
  { id: "autor", label: "O Autor" },
  { id: "depoimentos", label: "Depoimento" },
  { id: "planilhas", label: "Planilhas" },
  { id: "aula-gratuita", label: "Aula Gratuita" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar principal */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
            : "bg-transparent",
        )}
      >
        <nav className="container py-3.5 lg:py-4 flex items-center justify-between gap-3 lg:gap-4">
          {/* Brand / Logo REAL (PNG transparente da pasta /public) */}
          <a href="#top" className="flex items-center group flex-shrink-0">
            <img
              src="/Logo%20site.png"
              alt="Loteria Técnica Inteligente"
              loading="eager"
              className="h-9 sm:h-11 lg:h-14 w-auto select-none drop-shadow-[0_4px_20px_rgba(255,215,0,0.10)] group-hover:drop-shadow-[0_6px_24px_rgba(255,215,0,0.25)] transition-all duration-300"
            />
          </a>

          {/* Desktop nav — aparece a partir de LG (1024px) */}
          <ul className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="whitespace-nowrap px-3.5 xl:px-4 py-2 rounded-lg text-sm xl:text-[15px] font-medium text-white/85 hover:text-gold-400 hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + WhatsApp desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="#faq"
              className="flex items-center gap-2 whitespace-nowrap px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold text-sm xl:text-[15px] hover:bg-emerald-500/15 hover:border-emerald-500/50 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Dúvidas?
            </a>
            <a href="#comprar" className="btn-primary !py-2.5 xl:!py-3 !px-6 xl:!px-7 text-sm xl:text-[15px] whitespace-nowrap">
              <span className="relative z-10 flex items-center gap-2">
                Quero o curso
                <ArrowRight className="w-4 h-4 xl:w-[18px] xl:h-[18px]" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:border-gold-500/40 hover:text-gold-400 transition flex-shrink-0"
            aria-label="Abrir menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:hidden overflow-hidden border-t border-white/5 bg-navy-950/95 backdrop-blur-xl"
            >
              <div className="container py-5 flex flex-col gap-2">
                {navLinks.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="whitespace-nowrap px-4 py-3 rounded-xl text-white/85 font-medium hover:bg-white/5 hover:text-gold-400 transition"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <a
                    href="#faq"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold text-sm hover:bg-emerald-500/15 transition whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Dúvidas
                  </a>
                  <a
                    href="#comprar"
                    onClick={() => setOpen(false)}
                    className="btn-primary !py-3 !px-4 text-sm justify-center whitespace-nowrap"
                  >
                    Quero o curso
                  </a>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;
