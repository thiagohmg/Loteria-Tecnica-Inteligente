import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import CourseIntro from "@/components/sections/CourseIntro";
import AboutAuthor from "@/components/sections/AboutAuthor";
import Testimonials from "@/components/sections/Testimonials";
import FreeLesson from "@/components/sections/FreeLesson";
import Freebies from "@/components/sections/Freebies";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import CompactPriceCTA from "@/components/sections/CompactPriceCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Header />
      <main>
        {/* 1. Hook + identificação */}
        <Hero />
        {/* 🔴 CTA 1/3 — TOPO do funil: oferta rápida logo após o Hero */}
        <CompactPriceCTA variant="top" />
        {/* 2. Dor + Solução + Benefícios */}
        <CourseIntro />
        {/* 3. Credibilidade do autor */}
        <AboutAuthor />
        {/* 4. Prova social */}
        <Testimonials />
        {/* 🔴 CTA 2/3 — MEIO do funil: após credibilidade e prova social */}
        <CompactPriceCTA variant="mid" />
        {/* 5. Reciprocidade 1 → aula gratuita (confiança) */}
        <FreeLesson />
        {/* 6. Reciprocidade 2 → planilhas grátis */}
        <Freebies />
        {/* 7. Quebra de objeções → FAQ centralizada */}
        <FAQ />
        {/* 🔴 CTA 3/3 — FUNDO do funil: mega oferta final */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
