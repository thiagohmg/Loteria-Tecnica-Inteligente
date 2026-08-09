import { motion } from "framer-motion";
import {
  Brain,
  Video,
  TrendingUp,
  MessageCircle,
  Sparkles,
  Lightbulb,
  Target,
} from "lucide-react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, any> = {
  brain: Brain,
  video: Video,
  "trending-up": TrendingUp,
  "message-circle": MessageCircle,
};

export function CourseIntro() {
  const c = content.courseIntro;

  return (
    <section id="curso" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />

      <div className="absolute top-20 -left-10 w-[400px] h-[400px] rounded-full blob bg-navy-700/50" />
      <div className="absolute bottom-20 right-0 w-[460px] h-[460px] rounded-full blob bg-gold-500/10 animate-pulse-slow" />

      <div className="container relative z-10">
        <SectionTitle eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

        {/* === BLOCO 1: IDENTIFICAÇÃO (DOR vs SOLUÇÃO) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative glass-card rounded-[28px] p-7 sm:p-10 lg:p-14 mb-16 lg:mb-20 border-gold-500/20 shadow-card overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blob bg-gold-500/15" />
          <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full blob bg-navy-600/40" />

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Coluna ESQUERDA: DOR + METODO */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest">
                <Target className="w-3.5 h-3.5" />
                Se este é o seu caso hoje
              </div>

              <p className="text-lg sm:text-xl text-white/85 leading-relaxed">
                <span className="text-gold-400 font-semibold">
                  Não fique dependendo da sorte para ganhar na Lotofácil.
                </span>{" "}
                Acertar na Lotofácil jogando de qualquer jeito é quase impossível.
                O Método Inteligente vai te ensinar a sair do senso comum e parar
                de jogar aleatoriamente, apostando apenas em combinações
                estatisticamente mais prováveis.
              </p>

              <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                {c.introParagraph}
              </p>

              <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                Curso em vídeo aula, completo e passo a passo. Você terá acesso
                vitalício ao conteúdo completo, atualizado constantemente, com
                estratégias comprovadas para você aplicar imediatamente nos seus jogos.
              </p>
            </div>

            {/* Coluna DIREITA: Callout estratégia vs sorte (agregado) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-gold-500/10 via-gold-500/5 to-transparent border border-gold-500/25 p-6 sm:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gold-500/20 blur-3xl" />
                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold-gradient text-navy-950 flex items-center justify-center shadow-gold-glow">
                    <Lightbulb className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                      {c.callout.title}
                    </h3>
                    <p className="text-white/75 leading-relaxed">
                      {c.callout.text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-3xl bg-emerald-500/10 border border-emerald-500/25">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-bold text-white text-base leading-snug mb-1">
                    Tenha lucro em seus jogos!
                  </div>
                  <div className="text-sm text-white/70">
                    Padrões, fechamentos, frequências, pares/ímpares e muito mais.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === BLOCO 2: 4 CARDS DE BENEFÍCIOS === */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-20 lg:mb-28">
          {c.benefits.map((b, i) => {
            const Icon = iconMap[b.icon] ?? Lightbulb;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 lg:p-6 border-gold-500/10 transition-all duration-300 group flex flex-col h-full min-w-0 overflow-hidden"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-gold-gradient-soft border border-gold-500/25 flex items-center justify-center text-gold-400 mb-3 sm:mb-4 group-hover:bg-gold-gradient group-hover:text-navy-950 group-hover:shadow-gold-glow transition-all duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-white mb-2 sm:mb-3 whitespace-normal sm:whitespace-nowrap overflow-hidden text-ellipsis text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-[1.35rem] min-w-0">
                  {b.title}
                </h3>
                <p
                  className="text-white/70 leading-relaxed text-xs sm:text-sm lg:text-[15px] flex-1"
                  style={{
                    WebkitHyphens: "manual",
                    hyphens: "manual",
                    textAlign: "left",
                    wordBreak: "keep-all",
                    overflowWrap: "normal",
                  }}
                >
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* === BLOCO 3: TENHA LUCRO + RESUMO + CTA PARA AULA GRATUITA (não compra ainda) === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[28px] overflow-hidden border border-gold-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/80 to-navy-900" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute -top-20 left-1/3 w-[400px] h-[400px] rounded-full blob bg-gold-500/20" />

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 p-7 sm:p-10 lg:p-14 items-center">
            <div className="lg:col-span-7 space-y-5 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-gradient-soft border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                O que você vai aprender
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.05] whitespace-normal sm:whitespace-nowrap">
                <span className="text-white">Domine os </span>
                <span className="text-gradient-gold">padrões da Lotofácil</span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
                {c.paragraphs[2]}
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-sm text-white/80">
                {[
                  "✅ Montar fechamentos inteligentes",
                  "✅ Ler gráficos de frequência",
                  "✅ Tabelas de pares, ímpares, altos e baixos",
                  "✅ Colunas e linhas do volante",
                ].map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-3">
                <Button
                  variant="secondary"
                  size="lg"
                  href="#aula-gratuita"
                  icon={Video}
                >
                  Ver aula 1 gratuita
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 mt-4 lg:mt-8">
              <div className="relative mx-auto w-full max-w-none">
                <div className="absolute -inset-4 rounded-[32px] bg-gold-gradient opacity-20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border-2 border-gold-500/30 shadow-gold-glow aspect-[4/3]">
                  <img
                    src="/Homem%20ganhando%20na%20loteria.png"
                    alt="Ganhador da Lotofácil comemorando com o bilhete premiado"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CourseIntro;
