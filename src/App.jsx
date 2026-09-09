import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <TopNav />
      <Hero />
      <main className="page">
        <About />
        <section id="work" className="section">
          <p className="section-eyebrow">My work</p>
          <h2 className="section-title">Projects</h2>
          <Featured />
          <Projects />
        </section>
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
