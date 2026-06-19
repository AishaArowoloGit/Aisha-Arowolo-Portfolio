import Hero from "../components/Hero";
import About from "../components/About";
import Academic from "../components/Academic";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";


function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Academic />
      <Projects
      image="/images/figma-project.jpg"
      title="Figma UI Replication (HTT Mid‑Cohort Project)"
      role="Frontend Developer"
      year="2024"
      description="A pixel‑perfect recreation of a Figma design using semantic HTML and TailwindCSS."
      live="https://responsive-design-mid-cohort.vercel.app"
      github="https://github.com/AishaArowoloGit/Responsive_Design_MidCohort"
    />
      <Certifications />
      <Contact />
    </div>
  );
}

export default Home;
