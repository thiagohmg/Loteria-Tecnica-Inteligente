import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CreditCard,
  ShieldCheck,
  Clock,
  Award,
  QrCode,
  Receipt,
} from "lucide-react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const f = content.finalCta;

  return (
    <section id="comprar" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#071529] to-navy-950" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />

      {/* Big blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blob bg-gold-500/20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[520px] h-[520px] rounded-full blob bg-navy-700/60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blob bg-gold-500/5" />

      <div className="container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[36px] overflow-hidden border border-gold-500/30 shadow-gold-glow-lg"
        >
          {/* Bg gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/80 to-navy-900" />
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute -top-40 left-1/3 w-[600px] h-[400px] rounded-full blob bg-gold-500/25" />
          <div className="absolute -bottom-40 right-10 w-[500px] h-[400px] rounded-full blob bg-navy-700/50" />

          <div className="relative p-7 sm:p-12 lg:p-16">
            {/* Top eyebrow */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient-soft border border-gold-500/40 backdrop-blur text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-[0.18em]">
                <Sparkles className="w-4 h-4 text-gold-500" />
                {f.eyebrow}
              </div>
            </div>

            {/* Big title */}
            <h2 className="font-display font-black text-center text-3xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 tracking-tight whitespace-normal break-words">
              <span className="block text-white">{f.title.split(",")[0]},</span>
              <span className="block text-gradient-gold mt-2">
                {f.title.split(",")[1]?.trim().replace("!", "")}!
              </span>
            </h2>

            <p className="text-center text-lg sm:text-xl lg:text-2xl text-white/75 leading-relaxed max-w-3xl mx-auto mb-10">
              {f.subtitle}
            </p>

            {/* PRICE BLOCK — o coração da oferta */}
            <div className="relative mb-12">
              <div className="relative max-w-2xl mx-auto rounded-[32px] overflow-hidden border border-gold-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/15 via-gold-500/5 to-transparent" />
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[300px] rounded-full blob bg-gold-500/20 blur-2xl" />

                <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col items-center">
                  <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-gradient text-navy-950 text-xs sm:text-sm font-black uppercase tracking-[0.16em]">
                      <Sparkles className="w-4 h-4" />
                      Oferta por tempo limitado
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-8">
                    <div className="flex flex-col items-center sm:items-start">
                      <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-bold mb-1">
                        De
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white/35 line-through">
                        R$ {f.price.from}
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="text-xs sm:text-sm text-gold-400 uppercase tracking-widest font-black mb-2">
                        Por apenas
                      </span>
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <span className="text-lg sm:text-2xl font-black text-gold-400 -mr-1 sm:-mr-2">
                          R$
                        </span>
                        <span className="text-6xl sm:text-7xl lg:text-8xl font-black font-display text-gradient-gold leading-none tracking-tight">
                          {f.price.por.split(",")[0]}
                        </span>
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-gradient-gold -ml-1 sm:-ml-2">
                          ,{f.price.por.split(",")[1]}
                        </span>
                      </div>
                      <span className="text-sm sm:text-base font-bold text-gold-400 mt-2 uppercase tracking-wider">
                        {f.price.cash}
                      </span>
                    </div>

                    <div className="flex flex-col items-center sm:items-end">
                      <span className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-bold mb-1">
                        Ou no cartão
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-white/90">
                        {f.price.installments}
                      </span>
                      <span className="text-xs sm:text-sm text-emerald-400 font-bold mt-1 uppercase tracking-wider">
                        ≅ {f.price.perDay}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees strip */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
              {[
                {
                  icon: ShieldCheck,
                  title: "Compra segura",
                  desc: "Plataforma oficial e protegida",
                },
                {
                  icon: Clock,
                  title: "Acesso vitalício",
                  desc: "Assista onde e quando quiser",
                },
                {
                  icon: Award,
                  title: "Suporte via WhatsApp",
                  desc: "Tire dúvidas diretamente com o time",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5 sm:p-6 border-gold-500/10 flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold-gradient-soft border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <b.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm sm:text-base mb-0.5">
                      {b.title}
                    </div>
                    <div className="text-xs sm:text-sm text-white/65 leading-snug">
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA big button */}
            <div className="flex flex-col items-center gap-6 mb-12">
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-gold-gradient opacity-30 blur-xl animate-pulse-slow" />
                <Button
                  size="xl"
                  icon={ArrowRight}
                  href={content.site.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!px-10 !py-5 !text-lg sm:!text-xl relative"
                >
                  {f.cta}
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <CreditCard className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm sm:text-base">
                    Cartão
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <QrCode className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm sm:text-base">
                    Pix
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <Receipt className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm sm:text-base">
                    Boleto
                  </span>
                </div>
                <span className="hidden md:inline h-4 w-px bg-white/15 mx-2" />
                <div className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  Compra 100% segura
                </div>
              </div>
            </div>

            {/* Garantia selo */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">
                    Compra protegida
                  </div>
                  <div className="font-bold text-emerald-400 text-sm sm:text-base">
                    {f.garantia}
                  </div>
                </div>
              </div>

              <a
                href="#faq"
                className="text-white/60 hover:text-gold-400 transition text-sm sm:text-base underline decoration-dotted underline-offset-4 hover:decoration-gold-400"
              >
                Ainda tem dúvidas? Veja o FAQ →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
