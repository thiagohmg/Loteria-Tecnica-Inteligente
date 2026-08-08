import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FAQAccordion } from "@/components/ui/AccordionItem";

export function FAQ() {
  const f = content.faq;

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />

      <div className="absolute top-20 right-[5%] w-[420px] h-[420px] rounded-full blob bg-navy-700/40" />
      <div className="absolute bottom-20 left-[0%] w-[380px] h-[380px] rounded-full blob bg-gold-500/10 animate-pulse-slow" />

      <div className="container relative z-10">
        <SectionTitle eyebrow={f.eyebrow} title={f.title} subtitle="Tudo o que você precisa saber antes de entrar para o Método Inteligente. Tire suas dúvidas e avance com segurança." />

        {/* ACCORDION APENAS, CENTRALIZADO. SEM SIDEBAR POLUINDO. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <FAQAccordion items={f.items} />
        </motion.div>

        {/* HELP CARD ABAIXO (não mais ao lado) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl mx-auto mt-10 lg:mt-14 grid md:grid-cols-2 gap-5"
        >
          {/* Card: Dúvidas? WhatsApp */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border-emerald-500/25 relative overflow-hidden hover:border-emerald-500/40 transition-all">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full blob bg-emerald-500/15" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/25 to-emerald-600/10 border border-emerald-500/35 flex items-center justify-center text-emerald-400 mb-5">
                <MessageCircle className="w-7 h-7" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Ainda ficou com dúvidas?
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Fale diretamente com o time do Método Inteligente. Respondemos rápido,
                sem pegadinhas, antes de você comprar.
              </p>
              <a
                href="#"
                className="flex items-center justify-between w-full gap-3 px-5 py-4 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 hover:border-emerald-500/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950 transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-xs text-white/55 uppercase tracking-widest font-semibold">
                      Atendimento rápido
                    </span>
                    <span className="font-bold text-white group-hover:text-emerald-400 transition">
                      {content.site.whatsappLabel}
                    </span>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-emerald-400 transition-transform group-hover:translate-x-0.5 flex-shrink-0">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card: Resumo / Compra segura */}
          <div className="glass-card rounded-3xl p-6 sm:p-7 border-gold-500/20 relative overflow-hidden hover:border-gold-500/40 transition-all">
            <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full blob bg-gold-500/15" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gold-gradient-soft border border-gold-500/30 flex items-center justify-center text-gold-400 mb-5">
                <HelpCircle className="w-7 h-7" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Resposta rápida
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Método não é promessa de ganho — é estudo matemático aplicado.",
                  "Suporte via WhatsApp após sua compra.",
                  "Conteúdo atualizado sempre com novas análises.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 text-sm sm:text-base leading-relaxed">
                    <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" strokeWidth={2} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#comprar"
                className="inline-flex items-center justify-between w-full gap-3 px-5 py-4 rounded-2xl bg-gold-gradient text-navy-950 font-bold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ir para a oferta final
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
