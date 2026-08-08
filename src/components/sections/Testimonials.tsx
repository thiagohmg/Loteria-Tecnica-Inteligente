import { motion } from "framer-motion";
import { Play, Star, Quote, User } from "lucide-react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export function Testimonials() {
  const t = content.testimonials;

  return (
    <section id="depoimentos" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />

      <div className="absolute top-32 left-0 w-[400px] h-[400px] rounded-full blob bg-gold-500/10 animate-pulse-slow" />
      <div className="absolute bottom-32 right-0 w-[480px] h-[480px] rounded-full blob bg-navy-700/50" />

      <div className="container relative z-10">
        <SectionTitle eyebrow={t.eyebrow} title={t.title} />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Main video + 2 depoimentos abaixo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative space-y-6"
          >
            <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-gold-500/20 via-transparent to-gold-500/10 blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/25 text-red-400 text-xs font-bold uppercase tracking-widest">
                  <Play className="w-3.5 h-3.5" fill="#f87171" />
                  Depoimento gravado
                </div>
                <div className="hidden sm:flex items-center gap-1 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill="currentColor" stroke="none" />
                  ))}
                  <span className="ml-2 text-sm text-white/70 font-semibold">5.0</span>
                </div>
              </div>

              <VideoPlayer
                youtubeId="9jsV3BTQfvk"
                badge={t.videoBadge}
                label={t.videoTitle}
              />
            </div>

            {/* 2 depoimentos em 2 colunas abaixo do vídeo */}
            <div className="relative grid sm:grid-cols-2 gap-5 mt-2">
              <div className="glass-card rounded-3xl p-5 sm:p-6 border-gold-500/15 relative overflow-hidden">
                <div className="absolute top-3 right-3 w-10 h-10 text-gold-500/20">
                  <Quote className="w-full h-full" strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-1.5 mb-3 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-white/85 leading-relaxed mb-5 text-sm sm:text-base">
                  "Comecei o curso sem saber nada de fechamentos. Hoje, com
                  menos de 2 meses, consegui 14 pontos usando os padrões que
                  aprendi. Melhor investimento que já fiz!"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500/20 to-navy-700/40 border border-gold-500/25 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">André Ribeiro</div>
                    <div className="text-[11px] text-white/55 uppercase tracking-wider">
                      Aluno · Curitiba / PR
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-5 sm:p-6 border-gold-500/15 relative overflow-hidden">
                <div className="absolute top-3 right-3 w-10 h-10 text-gold-500/20">
                  <Quote className="w-full h-full" strokeWidth={1.5} />
                </div>
                <div className="flex items-center gap-1.5 mb-3 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-white/85 leading-relaxed mb-5 text-sm sm:text-base">
                  "A didática do Rômulo é incrível, explica tudo devagar.
                  Fiz 3 planilhas conforme ele ensinou e já recuperei o valor
                  do curso no primeiro mês. Super recomendo!"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500/20 to-navy-700/40 border border-gold-500/25 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Patrícia Souza</div>
                    <div className="text-[11px] text-white/55 uppercase tracking-wider">
                      Aluna · Salvador / BA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 3 social proof cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-7 border-gold-500/15 relative overflow-hidden">
              <div className="absolute top-3 right-4 w-12 h-12 text-gold-500/20">
                <Quote className="w-full h-full" strokeWidth={1.5} />
              </div>

              <div className="flex items-center gap-2 mb-4 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed mb-6 text-base sm:text-lg">
                "Antes eu jogava de qualquer jeito. Hoje consigo analisar os
                resultados, montar fechamentos e não perco mais dinheiro com
                jogos aleatórios. Em 3 meses de curso já tive vários jogos com
                11, 12 e 13 pontos acertados. Vale cada centavo!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500/20 to-navy-700/40 border border-gold-500/25 flex items-center justify-center text-gold-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Mariana Silva</div>
                  <div className="text-xs text-white/55 uppercase tracking-wider">
                    Aluna · São Paulo / SP
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-7 border-gold-500/15 relative overflow-hidden">
              <div className="absolute top-3 right-4 w-12 h-12 text-gold-500/20">
                <Quote className="w-full h-full" strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-2 mb-4 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed mb-6">
                "O suporte do Rômulo é sensacional. Cada pergunta que faço ele
                responde rapidinho com paciência. O curso é muito didático, as
                aulas são claras e transformaram completamente a minha forma de
                jogar na Lotofácil."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500/20 to-navy-700/40 border border-gold-500/25 flex items-center justify-center text-gold-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">José Carlos</div>
                  <div className="text-xs text-white/55 uppercase tracking-wider">
                    Aluno · Belo Horizonte / MG
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-7 border-gold-500/15 relative overflow-hidden">
              <div className="absolute top-3 right-4 w-12 h-12 text-gold-500/20">
                <Quote className="w-full h-full" strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-2 mb-4 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed mb-6">
                "A planilha de acompanhamento + as aulas de fechamento fizeram
                toda diferença. Hoje eu jogo poucos, mas jogo com estratégia.
                Recomendo para todo mundo que está cansado de perder dinheiro
                com palpites!"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500/20 to-navy-700/40 border border-gold-500/25 flex items-center justify-center text-gold-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white">Luísa Fernandes</div>
                  <div className="text-xs text-white/55 uppercase tracking-wider">
                    Aluna · Brasília / DF
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
