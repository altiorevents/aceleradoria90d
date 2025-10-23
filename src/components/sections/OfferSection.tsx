import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export const OfferSection = () => {
  const offerItems = [
    {
      title: "O Acelerador de 90 Dias (Sprints + Salas de Guerra)",
      value: "R$ 10.000",
    },
    {
      title: "Acesso à Biblioteca Tática de Playbooks",
      value: "R$ 2.000",
    },
    {
      title: "Comunidade de Executores PME",
      value: "R$ 1.500",
    },
    {
      title: "Suporte Tático Contínuo da Equipe PTX 360",
      value: "R$ 2.000",
    },
  ];

  return (
    <section className="py-16 md:py-32 relative">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          {/* Título */}
          <div className="text-center mb-12 md:mb-16 px-2">
            <h2 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl">
              O Que Você Leva ao Entrar Para o{" "}
              <span className="text-primary">Time de Executores</span>
            </h2>
          </div>

          {/* Stack de Valor */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/30 overflow-hidden shadow-[0_0_60px_hsl(92,100%,52%,0.2)]">
            <div className="p-6 md:p-12 space-y-6 md:space-y-8">
              {/* Itens do Stack */}
              <div className="space-y-3 md:space-y-4">
                {offerItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 p-3 md:p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 md:gap-4 flex-1">
                      <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" strokeWidth={3} />
                      </div>
                      <p className="font-body text-sm md:text-base text-foreground font-medium">
                        {item.title}
                      </p>
                    </div>
                    <span className="font-display font-bold text-sm md:text-base text-muted-foreground ml-10 sm:ml-0">
                      {item.value}
                    </span>
                  </div>
                ))}

                {/* Bônus de Ação Rápida - DESTAQUE */}
                <div className="relative p-5 md:p-6 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary shadow-[0_0_30px_hsl(92,100%,52%,0.3)] animate-glow">
                  <div className="absolute -top-2.5 md:-top-3 left-4 md:left-6">
                    <span className="px-3 md:px-4 py-1 bg-primary text-primary-foreground font-display font-bold text-[10px] md:text-xs uppercase tracking-wider rounded-full">
                      BÔNUS EXCLUSIVO
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-3 md:pt-2">
                    <div className="flex items-start sm:items-center gap-3 md:gap-4 flex-1">
                      <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-body text-foreground font-bold text-sm md:text-lg">
                          BÔNUS DE AÇÃO RÁPIDA (10 PRIMEIROS)
                        </p>
                        <p className="font-body text-xs md:text-sm text-muted-foreground">
                          Sessão 1-a-1 de Arquitetura de Agente
                        </p>
                      </div>
                    </div>
                    <span className="font-display font-bold text-primary text-lg md:text-xl ml-12 sm:ml-0">
                      R$ 3.000
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-6 md:my-8" />

              {/* Valor Total e Investimento */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-base md:text-xl text-muted-foreground">
                    VALOR TOTAL:
                  </span>
                  <span className="font-display font-bold text-xl md:text-2xl text-muted-foreground line-through">
                    R$ 18.500
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-4 md:p-6 rounded-xl bg-primary/10 border-2 border-primary">
                  <span className="font-display font-bold text-lg md:text-2xl text-foreground">
                    SEU INVESTIMENTO:
                  </span>
                  <div className="text-left sm:text-right">
                    <div className="font-display font-bold text-3xl md:text-5xl text-primary">
                      R$ 2.997
                    </div>
                    <div className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                      ou 12x R$ 299,70
                    </div>
                  </div>
                </div>
              </div>

              {/* Mensagem de Impacto */}
              <div className="bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-r-lg">
                <p className="font-body text-foreground text-sm md:text-lg leading-relaxed">
                  <span className="font-bold text-primary">Isso mesmo.</span> A Sessão 1-a-1 de R$ 3.000,{" "}
                  <span className="font-semibold">sozinha, já paga todo o seu investimento</span>. Para os 10 primeiros,{" "}
                  <span className="font-bold text-primary">o Acelerador sai de graça</span>.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
