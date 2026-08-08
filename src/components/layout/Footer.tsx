import { Mail, Youtube, Instagram, ArrowUp, MessageCircle } from "lucide-react";
import { content } from "@/data/content";

export function Footer() {
  return (
    <footer id="contato" className="relative bg-navy-950 border-t border-white/5 pt-16 pb-10 overflow-hidden">
      {/* Decor */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blob bg-gold-500/10" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] rounded-full blob bg-navy-700/40" />

      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="inline-block mb-5 group">
              <img
                src="/Logo%20site.png"
                alt="Loteria Técnica Inteligente"
                loading="lazy"
                className="h-12 sm:h-14 lg:h-16 w-auto select-none drop-shadow-[0_4px_16px_rgba(255,215,0,0.10)] group-hover:drop-shadow-[0_6px_20px_rgba(255,215,0,0.20)] transition-all duration-300"
              />
            </a>

            <p className="text-white/65 max-w-lg text-base leading-relaxed mb-6">
              {content.site.brand}. Curso on-line Método Inteligente: estratégias,
              padrões matemáticos e técnicas validadas desde 2003 para você jogar
              na Lotofácil com inteligência e aumentar suas chances de ganhar.
            </p>

            <a
              href={`mailto:${content.site.email}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass-card hover:border-gold-500/40 transition-all group"
            >
              <span className="w-10 h-10 rounded-xl bg-gold-gradient-soft border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:text-gold-300 transition">
                <Mail className="w-5 h-5" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                  E-mail de contato
                </span>
                <span className="font-semibold text-white group-hover:text-gold-400 transition">
                  {content.site.email}
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/5561998515514"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass-card hover:border-emerald-500/40 transition-all group"
            >
              <span className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition">
                <MessageCircle className="w-5 h-5" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                  WhatsApp
                </span>
                <span className="font-semibold text-white group-hover:text-emerald-400 transition">
                  (61) 99851-5514
                </span>
              </div>
            </a>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-display text-white text-xl font-bold mb-5 underline-gold">
              Navegação
            </h4>
            <ul className="space-y-3 text-base">
              {[
                { id: "curso", label: "O Método Inteligente" },
                { id: "autor", label: "Sobre o autor" },
                { id: "depoimentos", label: "Depoimento em vídeo" },
                { id: "planilhas", label: "Planilhas gratuitas" },
                { id: "aula-gratuita", label: "Primeira aula gratuita" },
                { id: "faq", label: "Perguntas frequentes" },
              ].map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-white/65 hover:text-gold-400 transition hover:pl-1 inline-block duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Siga-nos + voltar topo */}
          <div>
            <h4 className="font-display text-white text-xl font-bold mb-5 underline-gold">
              Siga-nos
            </h4>

            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://www.youtube.com/channel/UC4phkgqFKFjNufctDkoDQhA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Loteria Técnica Inteligente"
                className="group w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/75 hover:text-white hover:bg-[#FF0000]/20 hover:border-[#FF0000]/40 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lotopowerbr?igsh=MWRzamVoYzV1MWx0bg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Loteria Técnica Inteligente"
                className="group w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/75 hover:text-white hover:bg-gradient-to-br hover:from-fuchsia-500/20 hover:to-amber-500/20 hover:border-fuchsia-500/40 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <a
              href="#top"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-gold-500/30 bg-gold-gradient-soft text-gold-400 font-semibold text-sm hover:border-gold-500/60 hover:text-gold-300 transition group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-gold-500/20">
                <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              </span>
              Voltar ao topo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-sm text-center md:text-left">
            © 2018 Método Inteligente — Loteria Técnica Inteligente.
            Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Este site não tem vínculo com a Caixa Econômica Federal ou qualquer loteria oficial.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
