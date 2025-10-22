import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";

export const VideoSection = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl text-center space-y-12">
          {/* Título da Seção */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
              Cansado de "Cursos" de IA?
            </h2>
            <h3 className="font-body text-lg md:text-xl text-primary max-w-3xl mx-auto">
              Assista a este vídeo e descubra por que 99% dos PMEs falham (e como você fará parte do 1% que lucra).
            </h3>
          </div>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-secondary/50 backdrop-blur-sm">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ErKVTomZp1w"
                title="Video de Vendas - Acelerador IA 90 Dias"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* CTAs Abaixo do Vídeo */}
          <div className="flex flex-col items-center gap-6 pt-8">
            <Button 
              variant="cta" 
              size="xl"
              onClick={scrollToCTA}
              className="group"
            >
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              SIM, QUERO GARANTIR MEU BÔNUS DE R$ 3.000 AGORA
            </Button>

            <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Vagas limitadas</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Inscrição 100% segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
