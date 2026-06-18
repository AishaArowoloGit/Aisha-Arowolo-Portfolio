import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="p-8 bg-black text-white scroll-mt-24 pt-10 pb-20 border-b border-gray-700"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-white">
        FEATURED PROJECTS
      </h2>

      {/* FEATURED PROJECT 1 — FIGMA UI REPLICATION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
        {/* IMAGE */}
        <div className="bg-neutral-900 rounded-3xl p-6 relative overflow-hidden">
          <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
            HTT Mid-Cohort Project
          </span>

          <img
            src="/Images/Figma_UI_Replication.png"
            alt="Figma UI Replication"
            className="rounded-2xl w-full max-h-90 shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="text-2xl font-bold text-green-300 mb-4">
            HTT Mid‑Cohort Project — Responsive Figma UI Replication
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            A responsive pixel‑accurate webpage built from a Figma design as part
            of the HerTechTrail Academy Cohort 15 Mid Cohort assessment.
            Implemented using semantic HTML and TailwindCSS, with attention to
            spacing, layout accuracy, and mobile responsiveness.
          </p>

          <p className="uppercase text-green-500 font-semibold mb-3">
            Project Info
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Year</span>
              <span className="text-gray-200">2026</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Role</span>
              <span className="text-gray-200">Frontend Developer</span>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://responsive-design-mid-cohort.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/AishaArowoloGit/Responsive_Design_MidCohort"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-green-700 text-green-700 rounded-md hover:bg-green-50"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECT 2 — PERSONAL PORTFOLIO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
        {/* IMAGE */}
        <div className="bg-neutral-900 rounded-3xl p-6">
          <img
            src="/Images/Portfolio.png"
            alt="Portfolio Project"
            className="rounded-2xl w-full max-h-90 shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="text-2xl font-bold text-green-300 mb-4">
            HTT Capstone Project — Personal Portfolio
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            A modern, responsive personal portfolio website built with React and
            TailwindCSS as part of the HerTechTrail Cohort 15 Capstone Project.
            Features reusable components, clean UI, accessibility best practices,
            and sections for projects, skills, and contact.
          </p>

          <p className="uppercase text-green-500 font-semibold mb-3">
            Project Info
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Year</span>
              <span className="text-gray-200">2026</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Role</span>
              <span className="text-gray-200">Frontend Developer</span>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://aisha-arowolo-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/AishaArowoloGit/Aisha-Arowolo-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-green-700 text-green-700 rounded-md hover:bg-green-50"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECT 3 — POWER BI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
        {/* IMAGE */}
        <div className="bg-neutral-900 rounded-3xl p-6">
          <img
            src="Images/PowerBI_Dashboard.png"
            alt="Power BI Dashboard"
            className="rounded-2xl w-full max-h-90 shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="text-2xl font-bold text-green-300 mb-4">
            Data Dashboard — Power BI
          </h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            An interactive data visualization dashboard built using
            Power BI including slicers, KPIs, trend analysis, and clean visual
            storytelling for data insights.
          </p>

          <p className="uppercase text-green-500 font-semibold mb-3">
            Project Info
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Year</span>
              <span className="text-gray-200">2026</span>
            </div>

            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span className="text-gray-400">Role</span>
              <span className="text-gray-200">Data Analyst</span>
            </div>
          </div>

          <a
            href="https://github.com/AishaArowoloGit/Aisha-Arowolo-Portfolio/raw/master/data-analytics-projects/HTT DATA ANALYTICS STARTER GROUP 2 CAPSTONE PROJECT_Visualization_Part 1.pbix"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800"
          >
            View Project
          </a>
        </div>
      </div>

      {/* VIEW FULL PORTFOLIO */}
      <div className="mt-8 text-center">
        <Link
          to="/portfolio"
          className="text-green-400 font-semibold hover:underline"
        >
          View Full Portfolio →
        </Link>
      </div>
    </section>
  );
}

export default Projects;
