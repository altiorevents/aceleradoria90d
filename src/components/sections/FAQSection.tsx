import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Isso é para mim se eu não sou técnico?",
      answer: "Sim! O Acelerador é desenhado especificamente para gestores de PME que não têm background técnico. Nós guiamos toda a parte tática. Você participa das decisões estratégicas (qual processo automatizar, qual o ROI esperado) e nós executamos junto com você, passo a passo, nas Salas de Guerra ao vivo. Você aprende fazendo, não estudando teoria.",
    },
    {
      question: "E se meu PME for muito pequeno ou muito grande?",
      answer: "O programa é ideal para empresas com 5 a 50 funcionários, onde os processos manuais são visíveis e o impacto da automação é imediato. Se você tem menos de 5 funcionários, o ROI pode ser menor (mas ainda viável). Se tem mais de 50, provavelmente precisa de uma consultoria customizada, não de um acelerador em grupo.",
    },
    {
      question: "Como funcionam as 'Salas de Guerra'?",
      answer: "São sessões ao vivo (via Zoom) onde você trabalha lado a lado com nossos especialistas. Não é 'aula gravada' - é execução em tempo real. Você compartilha sua tela, nós destravamos problemas técnicos, configuramos APIs, testamos o agente. É como ter um CTO remoto por 90 dias. As salas acontecem semanalmente e ficam gravadas caso você perca alguma.",
    },
    {
      question: "Como funciona a Garantia de Execução na prática?",
      answer: "Se você participar de pelo menos 80% dos Sprints, fizer as atividades propostas e, mesmo assim, não tiver um Agente funcional ao final dos 90 dias, agendaremos uma sessão 1-a-1 com um dos diretores da PTX. Nessa sessão, faremos um diagnóstico do que travou e trabalharemos com você, sem custo adicional, até o Agente estar rodando.",
    },
    {
      question: "O que acontece depois dos 90 dias?",
      answer: "Você tem um Agente funcional e autonomia para mantê-lo. Mas se quiser suporte contínuo, oferecemos um plano opcional de 'Suporte Executivo' (R$ 497/mês) onde continuamos acompanhando melhorias e novos Agentes. É opcional - você não é obrigado a contratar.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-5xl">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Tire suas últimas dúvidas antes de garantir sua vaga
            </p>
          </div>

          {/* Accordion FAQ */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg px-6 transition-all duration-300"
              >
                <AccordionTrigger className="font-display font-semibold text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Final CTA */}
          <div className="text-center pt-8">
            <p className="font-body text-muted-foreground mb-4">
              Ainda tem dúvidas? Nossa equipe está pronta para ajudar.
            </p>
            <a 
              href="mailto:contato@ptx360.com.br" 
              className="font-body text-primary hover:text-primary/80 underline transition-colors"
            >
              contato@ptx360.com.br
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
