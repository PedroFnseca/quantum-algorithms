import { PageTransition } from "../components/PageTransition";
import { Hero } from "../components/Hero";
import { IntroSection } from "../components/IntroSection";
import { AlgorithmsSection } from "../components/AlgorithmsSection";

export function Home() {
  return (
    <PageTransition>
      <Hero />
      <IntroSection />
      <AlgorithmsSection />
    </PageTransition>
  );
}
