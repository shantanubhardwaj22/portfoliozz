import PublicLayout from "../../layouts/PublicLayout";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import Projects from "../../components/projects/Projects";

function Home() {
  return (
    <PublicLayout>

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

    </PublicLayout>
  );
}

export default Home;