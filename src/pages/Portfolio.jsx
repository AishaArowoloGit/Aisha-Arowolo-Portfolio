function Portfolio() {
  const projects = [
    {
      title: "Excel Data Analysis",
      description:
        "Agricultural production dataset cleaned and analyzed using Excel formulas, pivot tables, and charts.",
      tech: ["Excel", "Data Cleaning", "Visualization"],
      link: "YOUR_EXCEL_GITHUB_LINK",
      image: "/images/excel-analysis.jpg",
    },
    {
      title: "Power BI Dashboard",
      description:
        "Interactive dashboard visualizing resource economics data with dynamic filters and KPIs.",
      tech: ["Power BI", "Data Modeling", "DAX"],
      link: "YOUR_POWERBI_GITHUB_LINK",
      image: "/images/powerbi-dashboard.jpg",
    },
    {
      title: "SQL Query Automation",
      description:
        "Automated data extraction and transformation for research datasets using SQL joins and subqueries.",
      tech: ["SQL", "Database Management", "ETL"],
      link: "YOUR_SQL_GITHUB_LINK",
      image: "/images/sql-automation.jpg",
    },
    {
      title: "React Frontend App",
      description:
        "Responsive web app showcasing academic and data projects, built with React and Tailwind CSS.",
      tech: ["ReactJS", "TailwindCSS", "JavaScript"],
      live: "YOUR_REACT_APP_LIVE_LINK",
      code: "YOUR_REACT_APP_GITHUB_LINK",
      image: "/images/react-app.jpg",
    },
    {
      title: "Figma UI Replication (HTT Mid‑Cohort Project)",
      description:
        "A pixel‑accurate recreation of a Figma design using semantic HTML and TailwindCSS. Fully responsive and deployed on Vercel.",
      tech: ["HTML", "TailwindCSS", "Responsive Design"],
      live: "https://responsive-design-mid-cohort.vercel.app",
      code: "https://github.com/AishaArowoloGit/Responsive_Design_MidCohort",
      image: "/images/figma-project.jpg",
    },
    {
      title: "Personal Portfolio (HTT Capstone Project)",
      description:
        "A modern, responsive personal portfolio website built with React and TailwindCSS, featuring reusable components and clean UI.",
      tech: ["ReactJS", "TailwindCSS", "Vercel Deployment"],
      live: "YOUR_PORTFOLIO_LIVE_LINK",
      code: "YOUR_PORTFOLIO_GITHUB_LINK",
      image: "/images/portfolio-project.jpg",
    },
  ];

  return (
    <section className="p-8 pt-20 bg-black text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-green-700">My Portfolio</h2>
      <p className="text-gray-300 mb-8">
        Below are selected projects demonstrating my expertise in data analysis, visualization,
        and frontend development. Each project reflects my commitment to clean design,
        interactive functionality, and professional deployment workflows.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-neutral-900 border border-gray-700 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 text-green-300">{proj.title}</h3>
              <p className="text-gray-300 mb-3">{proj.description}</p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              {(proj.live || proj.link || proj.code) && (
                <div className="flex gap-3 mt-2 flex-wrap">

                  {/* Live Demo */}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
                    >
                      Live Demo
                    </a>
                  )}

                  {/* View Project (non‑coding) */}
                  {proj.link && !proj.live && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
                    >
                      View Project
                    </a>
                  )}

                  {/* Source Code (coding projects only) */}
                  {proj.code && proj.live && (
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-green-700 text-green-700 rounded-md hover:bg-green-50"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT BUTTON */}
      <div className="mt-12 text-center">
        <a
          href="/#contact"
          className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
