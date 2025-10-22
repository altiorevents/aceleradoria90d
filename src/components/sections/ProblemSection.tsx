import { BookOpen, MousePointer, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProblemSection = () => {
  const problems = [
    {
      icon: BookOpen,
      title: "Cursos Teóricos",
      description: "Você comprou 'cursos de prompt' que não te ensinaram a resolver problemas reais do seu negócio.",
    },
    {
      icon: MousePointer,
      title: "O 'Explorador Solitário'",
      description: "Você perdeu fins de semana no YouTube tentando conectar APIs, terminou frustrado e concluiu que 'IA é complexa demais'.",
    },
    {
      icon: TrendingDown,
      title: "O Risco Real",
      description: "Enquanto você está paralisado, seus processos manuais continuam caros e seus concorrentes estão agindo. A inação custa caro.",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
              Você está Preso no{" "}
              <span className="text-primary">"Loop da Teoria"</span>?
            </h2>
          </div>

          {/* Grid de Problemas */}
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(92,100%,52%,0.15)] p-8 text-center group"
              >
                <div className="flex flex-col items-center space-y-6">
                  {/* Ícone */}
                  <div className="h-16 w-16 rounded-full bg-destructive/10 border-2 border-destructive/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <problem.icon className="h-8 w-8 text-destructive" strokeWidth={2} />
                  </div>

                  {/* Título */}
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {problem.title}
                  </h3>

                  {/* Descrição */}
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center">
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Reconhece algum desses cenários? Você não está sozinho.{" "}
              <span className="text-foreground font-semibold">
                Mas há um caminho diferente.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
