import Hero from "../components/Hero";
import About from "../components/About";
import Academic from "../components/Academic";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";


function Home() {
  return (
    <div className="pt-20 pb-20">
      <Hero />
      <About />
      <Academic />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default Home;
