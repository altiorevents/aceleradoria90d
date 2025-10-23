import { X, Check, Target, Wrench, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SolutionSection = () => {
  const sprintCards = [
    {
      icon: Target,
      month: "Mês 1",
      title: "Diagnóstico",
      description: "Encontramos o seu maior gargalo operacional. O 'ralo' de custo que, se automatizado, trará o maior e mais rápido ROI.",
    },
    {
      icon: Wrench,
      month: "Mês 2",
      title: "Implementação",
      description: "Construímos seu Agente. Você entra nas 'Salas de Guerra' ao vivo, com nossos especialistas, para executar e destravar cada passo, clique a clique.",
    },
    {
      icon: TrendingUp,
      month: "Mês 3",
      title: "ROI",
      description: "Você não ganha um certificado, você ganha um ativo. Medimos as horas economizadas e os custos reduzidos pelo seu Agente 100% funcional.",
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-secondary/20 to-background relative">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl space-y-12 md:space-y-20">
          {/* Título Principal */}
          <div className="text-center space-y-3 md:space-y-4 px-2">
            <h2 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl">
              O Erro Fatal que 99% Cometem vs.{" "}
              <span className="text-primary">O Método do Executor</span>
            </h2>
          </div>

          {/* Comparativo Lado-a-Lado */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Lado 1 - O Erro (Falha) */}
            <Card className="bg-destructive/5 border-destructive/30 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-3 right-3 md:top-4 md:right-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="h-5 w-5 md:h-6 md:w-6 text-destructive" strokeWidth={3} />
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="font-display font-bold text-xl md:text-2xl text-destructive pr-12">
                  O Caminho do "Estudante"
                </h3>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive font-bold text-xs md:text-sm">1</span>
                    </div>
                    <p className="font-body text-sm md:text-base text-foreground/80">
                      Começa pela <span className="font-semibold">Ferramenta</span> (Make, n8n)
                    </p>
                  </div>

                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive font-bold text-xs md:text-sm">2</span>
                    </div>
                    <p className="font-body text-sm md:text-base text-foreground/80">
                      Procura um <span className="font-semibold">Problema</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive font-bold text-xs md:text-sm">3</span>
                    </div>
                    <p className="font-body text-sm md:text-base text-foreground/80">
                      <span className="font-semibold">Frustração</span> & Baixo ROI
                    </p>
                  </div>
                </div>

                <div className="pt-3 md:pt-4 border-t border-destructive/20">
                  <p className="font-body text-xs md:text-sm text-muted-foreground italic">
                    Resultado: Ferramentas sem uso, tempo perdido, dinheiro desperdiçado.
                  </p>
                </div>
              </div>
            </Card>

            {/* Lado 2 - Nosso Método (Sucesso) */}
            <Card className="bg-primary/5 border-primary/30 p-6 md:p-8 relative overflow-hidden shadow-[0_0_40px_hsl(92,100%,52%,0.1)]">
              <div className="absolute top-3 right-3 md:top-4 md:right-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-primary" strokeWidth={3} />
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="font-display font-bold text-xl md:text-2xl text-primary pr-12">
                  O "Método de IA Consultiva"
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <p className="font-body text-foreground">
                      Começa pelo <span className="font-semibold text-primary">Diagnóstico</span> (O 'Ralo' de Custo)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <p className="font-body text-foreground">
                      Desenha a <span className="font-semibold text-primary">Solução</span> (O Agente)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <p className="font-body text-foreground">
                      Escolhe a <span className="font-semibold text-primary">Ferramenta</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <p className="font-body text-foreground">
                      <span className="font-semibold text-primary">ROI Tangível</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <p className="font-body text-sm text-foreground/90 font-semibold">
                    Resultado: Agente funcional, custos reduzidos, tempo economizado.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sprints de Execução */}
          <div className="space-y-8 md:space-y-12">
            <div className="text-center px-2">
              <h3 className="font-display font-bold text-xl md:text-3xl lg:text-4xl text-foreground mb-2">
                Nosso Acelerador não são "Aulas",
              </h3>
              <h3 className="font-display font-bold text-xl md:text-3xl lg:text-4xl text-primary">
                são "Sprints de Execução"
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {sprintCards.map((sprint, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(92,100%,52%,0.15)] p-6 md:p-8 group"
                >
                  <div className="space-y-4 md:space-y-6">
                    {/* Icon & Month Badge */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <sprint.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" strokeWidth={2} />
                      </div>
                      <span className="text-[10px] md:text-xs font-display font-bold text-primary uppercase tracking-wider px-2 md:px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                        {sprint.month}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-display font-bold text-lg md:text-xl text-foreground">
                      {sprint.title}
                    </h4>

                    {/* Description */}
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      {sprint.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
