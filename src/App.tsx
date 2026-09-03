import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="ambient-bg min-h-screen text-slate-100 selection:bg-emerald-500/30 selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-xs focus:font-mono focus:font-semibold focus:text-slate-950 focus:rounded-md focus:shadow-xl focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Home />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
