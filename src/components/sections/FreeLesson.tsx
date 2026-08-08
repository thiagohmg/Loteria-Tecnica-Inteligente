import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function FreeLesson() {
  const l = content.freeLesson;

  return (
    <section id="aula-gratuita" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />

      <div className="absolute top-1/4 -left-16 w-[420px] h-[420px] rounded-full blob bg-navy-700/50" />
      <div className="absolute bottom-1/4 -right-16 w-[460px] h-[460px] rounded-full blob bg-gold-500/15 animate-pulse-slow" />

      <div className="container relative z-10">
        <SectionTitle eyebrow={l.eyebrow} title={l.title} subtitle={l.description}>
          <div className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/40">
            <BadgeCheck className="w-5 h-5 text-emerald-400" strokeWidth={2.2} />
            <span className="font-bold text-emerald-400 uppercase tracking-widest text-sm">
              {l.badge}
            </span>
          </div>
        </SectionTitle>

        {/* ===== PLAYER CENTRALIZADO ===== */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-gold-500/25 via-navy-700/30 to-gold-500/20 blur-2xl animate-pulse-slow" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <VideoPlayer
              youtubeId="FNDpD26Deb4"
              badge={l.badge}
              label="Aula 1 · Introdução ao Método Inteligente"
            />

            {/* INSTRUÇÃO APENAS (sem stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-10 glass-card rounded-3xl p-6 sm:p-8 border-gold-500/15 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blob bg-gold-500/15" />

              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold-gradient-soft border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Sparkles className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                    {l.instruction}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                    Quando terminar de assistir a essa aula, você já terá uma
                    noção clara de como o método funciona e poderá decidir se
                    quer continuar a jornada com a gente.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FreeLesson;
