import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Flame,
} from "lucide-react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";

interface CompactPriceCTAProps {
  variant?: "top" | "mid";
}

export function CompactPriceCTA({ variant = "mid" }: CompactPriceCTAProps) {
  const p = content.finalCta.price;

  const isTop = variant === "top";

  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#06142a] to-navy-950" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />
      <div className="absolute top-1/2 -left-24 w-[420px] h-[420px] rounded-full blob bg-gold-500/15 animate-pulse-slow" />
      <div className="absolute bottom-1/2 -right-24 w-[440px] h-[440px] rounded-full blob bg-navy-700/50" />

      <div className="container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[28px] overflow-hidden border border-gold-500/25 shadow-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/70 to-navy-900" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute -top-24 right-6 w-[360px] h-[260px] rounded-full blob bg-gold-500/20" />
          <div className="absolute -bottom-24 left-6 w-[360px] h-[260px] rounded-full blob bg-navy-700/60" />

          <div className="relative grid md:grid-cols-5 gap-6 md:gap-8 p-6 sm:p-8 lg:p-10 items-center">
            <div className="md:col-span-3 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-gradient text-navy-950 text-xs font-black uppercase tracking-[0.14em]">
                  {isTop ? (
                    <Flame className="w-3.5 h-3.5" />
                  ) : (
                    <Zap className="w-3.5 h-3.5" />
                  )}
                  {isTop ? "Oferta especial de hoje" : "Investimento único"}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Acesso vitalício
                </div>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-[1.1] text-white">
                {isTop ? (
                  <>
                    Comece agora por{" "}
                    <span className="text-gradient-gold">apenas 107 reais</span>
                  </>
                ) : (
                  <>
                    Transforme seu jogo por{" "}
                    <span className="text-gradient-gold">menos de R$ 1/dia</span>
                  </>
                )}
              </h3>

              <div className="flex flex-wrap items-end gap-4 pt-1">
                <div className="flex flex-col">
                  <span className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-0.5">
                    De
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white/40 line-through">
                    R$ {p.from}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gold-400 uppercase tracking-widest font-bold mb-0.5">
                    Por apenas
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm sm:text-base font-bold text-gold-400 -mr-0.5">
                      R$
                    </span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient-gold font-display leading-none">
                      {p.por.split(",")[0]}
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-gradient-gold font-display -ml-0.5">
                      ,{p.por.split(",")[1]}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col pb-1">
                  <span className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-0.5">
                    Ou
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white/80">
                    {p.installments}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% seguro
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5 text-gold-400" />
                  Liberação imediata
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col items-center md:items-end gap-4">
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-1.5 rounded-2xl bg-gold-gradient opacity-20 blur-lg animate-pulse-slow" />
                <Button
                  size="xl"
                  icon={ArrowRight}
                  href={content.site.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!px-7 !py-4 !text-base sm:!text-lg relative w-full justify-center"
                  fullWidthOnMobile={false}
                >
                  Quero garantir agora
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-white/55 text-center md:text-right max-w-xs">
                Ao clicar, você será direcionado para a página segura da Kiwify
                e concluírá sua compra em menos de 2 minutos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CompactPriceCTA;
