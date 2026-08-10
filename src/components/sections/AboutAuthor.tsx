import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, Quote, User, GraduationCap, TrendingUp, MapPin } from "lucide-react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

const stats = [
  {
    icon: Calendar,
    value: "2003",
    label: "Rômulo estuda Lotofácil desde então",
  },
  {
    icon: GraduationCap,
    value: "+25",
    label: "Anos de estudo e dedicação",
  },
  {
    icon: TrendingUp,
    value: "TOP",
    label: "Um dos maiores especialistas do Brasil",
  },
];

export function AboutAuthor() {
  const a = content.author;

  return (
    <section id="autor" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#081930] to-navy-950" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />

      <div className="absolute top-10 right-[-5%] w-[440px] h-[440px] rounded-full blob bg-navy-700/50" />
      <div className="absolute bottom-10 left-[-5%] w-[460px] h-[460px] rounded-full blob bg-gold-500/10" />

      <div className="container relative z-10">
        <SectionTitle eyebrow={a.eyebrow} title="Rômulo Dias de Oliveira" subtitle={a.role} />

        <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT: Avatar + 4 stats (apenas UMA vez cada stat, sem duplicação) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-gold-500/25 via-transparent to-navy-700/30 blur-2xl" />

              <div className="relative glass-card rounded-[32px] p-6 sm:p-8 border-gold-500/25 shadow-card overflow-hidden">
                <div className="absolute top-6 right-6 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" />
                  Desde 2003
                </div>

                {/* Avatar do Rômulo */}
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden mb-7 border border-gold-500/20">
                  <img
                    src="/Romulo%20Youtube.png"
                    alt="Rômulo Dias de Oliveira, especialista em Lotofácil"
                    className="w-full h-full object-cover object-[50%_20%] block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Selos (estavam duplicados em stats, agora como selos inline) */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                    <BookOpen className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                    <div className="font-bold text-white text-sm">Criador do</div>
                    <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                      Método Inteligente
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                    <Award className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                    <div className="font-bold text-white text-sm">Formado em</div>
                    <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                      Matemática Aplicada
                    </div>
                  </div>
                </div>

                {/* Stats grid — 3 colunas, EXATAMENTE as 3 credenciais que o usuário pediu */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                  {stats.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.15 * i, duration: 0.5 }}
                      className="glass-card rounded-2xl p-3.5 sm:p-4 border-gold-500/10 hover:border-gold-500/25 transition-all text-center"
                    >
                      <s.icon className="w-6 h-6 text-gold-400 mb-2 mx-auto" strokeWidth={1.8} />
                      <div className="font-display font-extrabold text-2xl sm:text-[1.7rem] text-white mb-1.5 leading-none">
                        {s.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider leading-tight text-center">
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: História em cards (3 parágrafos ORIGINAIS todos preservados, só layout melhor) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-gradient-soft border border-gold-500/30 text-gold-400 text-sm font-semibold uppercase tracking-widest">
              <Award className="w-4 h-4" />
              A trajetória por trás do método
            </div>

            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-gold-500/60 via-gold-500/20 to-transparent" />
              <div className="space-y-5">
                {a.paragraphs.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                    className="relative pl-12 sm:pl-14"
                  >
                    <div className="absolute left-0 top-1.5 w-9 h-9 rounded-xl bg-gold-gradient text-navy-950 font-bold flex items-center justify-center text-sm font-display shadow-gold-glow">
                      {i + 1}
                    </div>
                    <div className="glass-card rounded-2xl p-5 sm:p-6 border-gold-500/10 hover:border-gold-500/25 transition-all duration-300">
                      <p className="text-white/80 leading-relaxed text-base sm:text-lg">
                        {p}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-gold-500/10 via-navy-800/40 to-transparent border border-gold-500/25 overflow-hidden"
            >
              <svg viewBox="0 0 100 100" className="absolute top-4 right-5 w-16 h-16 text-gold-500/20" fill="currentColor">
                <path d="M19,44 C11,48 6,55 6,64 C6,72 12,78 20,78 C28,78 34,72 34,64 C34,54 27,46 19,44 Z M55,44 C47,48 42,55 42,64 C42,72 48,78 56,78 C64,78 70,72 70,64 C70,54 63,46 55,44 Z" />
              </svg>
              <div className="relative">
                <p className="font-display text-xl sm:text-2xl font-semibold text-white/90 leading-snug italic max-w-3xl">
                  "O Método Inteligente não é promessa de enriquecimento fácil.
                  É um método de estudo, disciplina e matemática — feito para
                  quem quer jogar com inteligência e transformar o próprio jogo."
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-gradient text-navy-950 flex items-center justify-center font-bold font-display shadow-gold-glow">
                    <User className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{a.title}</div>
                    <div className="text-xs text-gold-400 uppercase tracking-wider font-semibold">
                      Criador do Método Inteligente
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutAuthor;
