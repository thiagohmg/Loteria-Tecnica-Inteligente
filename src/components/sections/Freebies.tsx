import { motion } from "framer-motion";
import { Download, Gift, FileSpreadsheet, Grid3X3, Sparkles } from "lucide-react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, any> = {
  spreadsheet: FileSpreadsheet,
  "grid-3x3": Grid3X3,
};

export function Freebies() {
  const f = content.freebies;

  return (
    <section id="planilhas" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#08182D] to-navy-900" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />

      {/* Blobs */}
      <div className="absolute top-10 left-[10%] w-[340px] h-[340px] rounded-full blob bg-gold-500/10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-[-5%] w-[440px] h-[440px] rounded-full blob bg-navy-700/40" />

      <div className="container relative z-10">
        <SectionTitle eyebrow={f.eyebrow} title={f.title} subtitle={f.intro} />

        {/* Gift ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gold-gradient-soft border border-gold-500/30 text-white/90 text-base sm:text-lg font-medium">
            <span className="w-9 h-9 rounded-xl bg-gold-gradient text-navy-950 flex items-center justify-center shadow-gold-glow">
              <Gift className="w-5 h-5" strokeWidth={2} />
            </span>
            {f.clickHelper}
          </div>
        </motion.div>

        {/* Gift cards */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-2xl mx-auto mb-14 justify-items-center">
          {f.gifts
            .filter((g: any) => g.number !== "01")
            .map((g: any, i: number) => {
              const Icon = iconMap[g.icon] ?? FileSpreadsheet;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="w-full glass-card glass-card-hover rounded-[28px] p-7 sm:p-8 lg:p-9 border-gold-500/15 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full blob bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start gap-5 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-1.5 rounded-2xl bg-gold-gradient opacity-20 blur-md group-hover:opacity-35 transition" />
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:text-navy-950 group-hover:bg-gold-gradient group-hover:shadow-gold-glow transition-all duration-300">
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1.7} />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-navy-950 font-extrabold text-xs flex items-center justify-center shadow-gold-glow font-display">
                        {g.number}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                        {g.title}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        <Sparkles className="w-3 h-3" />
                        100% Gratuito
                      </div>
                    </div>
                  </div>

                  <p className="text-white/75 leading-relaxed text-base sm:text-lg mb-7 relative">
                    {g.description}
                  </p>

                </motion.div>
              );
            })}
        </div>

        {/* CTA grande download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-r from-gold-500/30 via-gold-600/20 to-gold-500/30 blur-2xl animate-pulse-slow" />
          <div className="relative glass-card rounded-[28px] p-7 sm:p-10 border-gold-500/30 bg-gradient-to-br from-gold-500/10 via-navy-800/40 to-gold-500/5 overflow-hidden text-center">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full bg-gold-500/20 blur-3xl" />

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gold-gradient text-navy-950 flex items-center justify-center shadow-gold-glow animate-floaty">
                <Download className="w-8 h-8" strokeWidth={2.2} />
              </div>
              <div className="text-center sm:text-left">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                  Baixe suas planilhas agora
                </div>
                <div className="text-white/70 text-sm sm:text-base">
                  Clique no botão e receba os dois arquivos gratuitamente.
                </div>
              </div>
              <Button
                size="xl"
                icon={Download}
                href="#"
                className="whitespace-normal sm:whitespace-nowrap"
              >
                {f.cta}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Freebies;
