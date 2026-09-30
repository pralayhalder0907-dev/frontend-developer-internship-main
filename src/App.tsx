import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
