import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

export const AuthoritySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-authority/10 backdrop-blur-sm border-authority/30 p-8 md:p-12 text-center space-y-6">
            {/* Icon/Badge */}
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-authority/20 border-2 border-authority/50 flex items-center justify-center">
                <Award className="h-10 w-10 text-authority-foreground" strokeWidth={2} />
              </div>
            </div>

            {/* Logo Placeholder - Replace with actual PTX 360 logo */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-authority-foreground">
                PTX 360 Business Consulting
              </h3>
              <div className="h-px w-32 bg-authority/30 mx-auto" />
            </div>

            {/* Texto de Autoridade */}
            <p className="font-body text-foreground/90 text-lg leading-relaxed max-w-2xl mx-auto">
              O <span className="font-semibold text-primary">Acelerador IA 90 Dias</span> é um programa oficial de implementação da{" "}
              <span className="font-semibold text-authority-foreground">PTX 360 Business Consulting</span>, 
              a consultoria focada em otimização de processos e resultados para PMEs.
            </p>

            {/* Credenciais */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Consultoria especializada</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Foco em PME</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Resultados tangíveis</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
