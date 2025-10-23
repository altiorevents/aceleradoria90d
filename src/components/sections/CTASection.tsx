import { Button } from "@/components/ui/button";
import { Shield, ChevronRight, Lock, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const CTASection = () => {
  const handleCTAClick = () => {
    window.open("https://payment.ticto.app/O8777DEE5", "_blank");
  };

  return (
    <section id="cta-section" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Garantia Blindada */}
          <div className="text-center space-y-8">
            <h2 className="font-display font-bold text-3xl md:text-5xl">
              O Risco é{" "}
              <span className="text-primary">100% Nosso</span>
            </h2>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/30 p-8 md:p-12 shadow-[0_0_60px_hsl(92,100%,52%,0.15)] relative overflow-hidden">
              {/* Shield Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Shield className="h-32 w-32 text-primary" strokeWidth={1} />
              </div>

              <div className="relative z-10 space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-display font-bold text-primary uppercase tracking-wider text-sm">
                    A Garantia Blindada de Execução PTX
                  </span>
                </div>

                {/* Texto da Garantia */}
                <p className="font-body text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                  Isto não é um curso, é um <span className="font-semibold text-primary">programa de implementação</span>. 
                  Se você participar dos Sprints, comparecer às Salas de Guerra, fizer as atividades e, mesmo assim, 
                  não tiver o seu primeiro Agente funcional em 90 dias, nossa equipe de diretores fará uma{" "}
                  <span className="font-semibold text-primary">nova sessão 1-a-1 com você</span> e trabalhará{" "}
                  <span className="font-bold text-primary">de graça até ele funcionar</span>. 
                  O risco é todo nosso.
                </p>
              </div>
            </Card>
          </div>

          {/* CTA Final */}
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-6">
              <Button 
                variant="cta" 
                size="xl"
                onClick={handleCTAClick}
                className="group w-full md:w-auto"
              >
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                QUERO GARANTIR MINHA VAGA E O BÔNUS DE R$ 3.000
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Acesso imediato</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Garantia de execução</span>
                </div>
              </div>
            </div>

            {/* Urgência Visual */}
            <Card className="bg-destructive/5 border-destructive/30 p-6 text-center">
              <p className="font-body text-foreground">
                <span className="font-bold text-destructive">⚠️ ATENÇÃO:</span> Apenas{" "}
                <span className="font-bold text-primary underline">10 vagas</span> para o bônus da{" "}
                <span className="font-semibold">Sessão 1-a-1 de R$ 3.000</span>. Depois disso, você paga o preço cheio.
              </p>
            </Card>
          </div>

          {/* Social Proof */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="text-center space-y-2">
              <div className="font-display font-bold text-4xl text-primary">90</div>
              <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">Dias para ROI</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-display font-bold text-4xl text-primary">100%</div>
              <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">Implementação</div>
            </div>
            <div className="text-center space-y-2">
              <div className="font-display font-bold text-4xl text-primary">R$ 3K</div>
              <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">Bônus Grátis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
