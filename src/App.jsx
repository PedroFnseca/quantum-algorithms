import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { AlgorithmsSection } from "./components/AlgorithmsSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <AlgorithmsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
