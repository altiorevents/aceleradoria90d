import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-6 md:space-y-8">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 md:mb-8">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-display font-semibold text-primary uppercase tracking-widest">
              Acelerador IA - Desafio 90 Dias
            </span>
          </div>

          {/* H1 - Promessa Principal */}
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-7xl leading-tight px-2">
            Troque a <span className="text-primary animate-glow">Paralisia da IA</span> por um{" "}
            <span className="text-primary">Agente Autônomo Funcional</span>{" "}
            em 90 Dias
          </h1>

          {/* H2 - Sub-Manchete */}
          <h2 className="font-body text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            O único programa de <span className="text-foreground font-semibold">implementação</span> para PMEs que diagnostica seu maior{" "}
            <span className="text-foreground font-semibold">"ralo" de custo</span> e constrói um Agente com ROI...{" "}
            <span className="text-foreground font-semibold">Mesmo que você não seja técnico.</span>
          </h2>

          {/* CTA Principal */}
          <div className="flex flex-col items-center gap-3 md:gap-4 pt-4 md:pt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToCTA}
              className="group w-full sm:w-auto"
            >
              <ChevronRight className="h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
              <span className="text-xs md:text-base">QUERO MEU AGENTE DE IA EM 90 DIAS</span>
            </Button>

            {/* Urgência */}
            <p className="text-xs md:text-base text-foreground/90 font-body max-w-xl px-4">
              <span className="font-semibold text-primary">⚡ Atenção:</span> A "Sessão 1-a-1 de Arquitetura" (Valor R$ 3.000) é limitada aos{" "}
              <span className="font-bold text-primary underline">10 primeiros inscritos</span>.
            </p>
          </div>

          {/* Social Proof Subtle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 pt-8 md:pt-12 text-muted-foreground text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-secondary border-2 border-background" />
                ))}
              </div>
              <span className="font-body">+50 PMEs executando</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body">90 dias de implementação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
