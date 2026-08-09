import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Play, BookOpen } from "lucide-react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { onNavigateClick } from "@/lib/utils";

export function Hero() {
  const h = content.hero;

  return (
    <section id="top" className="relative pt-16 sm:pt-24 pb-24 lg:pb-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-80" />

      {/* Blobs */}
      <div className="absolute top-24 right-[-10%] w-[520px] h-[520px] rounded-full blob bg-gold-500/30 animate-pulse-slow" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[560px] h-[560px] rounded-full blob bg-navy-600/50" />

      <div className="container relative z-20">
        {/* Conteúdo CENTRALIZADO — sem card lateral */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card border-gold-500/40 text-gold-400 text-[10px] sm:text-sm font-bold uppercase tracking-[0.1em] sm:tracking-[0.18em] mb-6 sm:mb-7 text-center"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold-500" />
              {h.eyebrow}
            </motion.div>

            {/* Title — UMA LINHA SÓ no desktop, quebra no mobile */}
            <h1 className="font-display font-extrabold whitespace-normal sm:whitespace-nowrap leading-[0.98] tracking-tight mb-8 text-center
                           text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-6xl 2xl:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-white"
              >
                Já imaginou{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
                className="text-gradient-gold"
              >
                ganhar na Lotofácil?
              </motion.span>
            </h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="space-y-5 mb-10"
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                {h.description}
              </p>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto border-l-2 border-r-0 sm:border-x-0 sm:border-t-2 border-gold-500/40 pl-5 pr-0 sm:px-0 sm:pt-4 sm:border-b-0">
                {h.subdescription}
              </p>
            </motion.div>

            {/* CTA buttons — centralizados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-14 justify-center"
            >
              {/* PRIMÁRIO — DOURADO → aula gratuita */}
              <Button
                size="xl"
                icon={Play}
                href="#aula-gratuita"
              >
                {h.ctaSecondary}
              </Button>
              {/* SECUNDÁRIO — contorno → conhecer o método */}
              <Button
                variant="secondary"
                size="xl"
                icon={BookOpen}
                href="#curso"
              >
                {h.ctaPrimary}
              </Button>
            </motion.div>

            {/* Stats row — centralizado — RESULTADOS do curso (não do autor — autor fica na seção dele) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto"
            >
              {[
                { value: "15x", label: "Mais chances de acerto" },
                { value: "+5 mil", label: "Alunos transformados" },
                { value: "Vitalício", label: "Acesso ao curso e atualizações" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl px-4 py-4 sm:px-5 sm:py-5 text-center border-gold-500/10 hover:border-gold-500/25 transition"
                >
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-gold mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-white/70 leading-tight uppercase tracking-wider text-center">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#curso"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.3, duration: 0.6 }, y: { delay: 1.3, duration: 2, repeat: Infinity } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold-400 transition hidden sm:flex flex-col items-center gap-2 text-xs uppercase tracking-widest z-20"
      >
        <span>Rolar para baixo</span>
        <span className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1">
          <span className="w-1 h-2 rounded-full bg-white/60" />
        </span>
      </motion.a>
    </section>
  );
}

export default Hero;
