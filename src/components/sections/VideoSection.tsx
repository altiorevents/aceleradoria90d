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
            <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
              {/* Placeholder - Replace with actual video embed */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/20 border-2 border-primary group hover:bg-primary/30 cursor-pointer transition-all">
                  <Play className="h-10 w-10 text-primary fill-primary" />
                </div>
                <p className="text-muted-foreground font-body">
                  VSL - Video de Vendas (Integre seu vídeo aqui)
                </p>
              </div>
              
              {/* To integrate a real video, replace the div above with an iframe:
              <iframe
                src="YOUR_VIDEO_URL"
                title="Video de Vendas - Acelerador IA"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
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
