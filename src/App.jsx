import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { AlgorithmDetail } from "./pages/AlgorithmDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-background via-purple-50/30 to-cyan-50/30 dark:via-purple-950/10 dark:to-cyan-950/10 font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/algorithm/:id" element={<AlgorithmDetail />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
