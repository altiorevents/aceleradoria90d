import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { CTASection } from "@/components/sections/CTASection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { FAQSection } from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      <OfferSection />
      <CTASection />
      <AuthoritySection />
      <FAQSection />
    </div>
  );
};

export default Index;
