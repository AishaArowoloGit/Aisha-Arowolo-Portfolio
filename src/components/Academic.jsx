const toggleDropdown = (id) => {
  const element = document.getElementById(id);
  element.classList.toggle("hidden");
};



function Academic() {
  return (
    <section
  id="academic"
  className="scroll-mt-24 bg-black text-white pt-10 pb-20 px-8 border-b border-gray-700"
>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
    ACADEMIC AND RESEARCH WORK
  </h2>

  <p className="text-base md:text-md lg:text-lg text-gray-300 mb-10 leading-relaxed ">
    In the course of my academic journey, I have taught/co-taught several undergraduate and postgraduate courses.
    My research centers on the sustainable management of natural resources, the valuation of environmental goods and services,
    and the economic analysis of policies that promote social welfare. I explore the interactions between economic activities 
    and environmental systems, focusing on optimizing resource allocation to balance economic growth with ecological sustainability.
  </p>

  {/* 3‑Column Academic Cards */}
  <div className="grid md:grid-cols-3 gap-8">

    {/* COURSES TAUGHT */}
    <div className="bg-neutral-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition">
      <h3 className="text-xl font-semibold text-green-300 mb-3">
        Courses Taught
      </h3>

      <ul className="text-gray-300 space-y-1 text-sm md:text-base">
        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Environmental & Resource Economics</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Economics of Renewable Natural Resources</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Econometric Methods</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Statistical Theory and Analysis</span>
        </li>
      </ul>


      {/* DROPDOWN */}
      <div >
        <button
          onClick={() => toggleDropdown("coursesDropdown")}
          className="inline-flex items-center mt-4 text-green-400 hover:text-green-500 transition"
        >
          Read More <span className="ml-1">→</span>
        </button>

        <div
          id="coursesDropdown"
          className="hidden mt-3 text-gray-300 transition-all duration-300 ease-in-out"
        >
          <ul className="text-gray-300 space-y-1 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Computer Applications in Agriculture</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Agricultural Production Economics</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Principles of Agricultural Economics</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Principles of Economics</span>
            </li>
          </ul>

        </div>
      </div>
    </div>


    {/* RESEARCH INTERESTS */}
    <div className="bg-neutral-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition">
      <h3 className="text-xl font-semibold text-green-300 mb-3">
        Research Interests
      </h3>

      <ul className="text-gray-300 text-sm md:text-base space-y-1">
        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Environmental valuation & ecosystem services</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Poverty–environment linkages & welfare economics</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Climate change & agricultural sustainability</span>
        </li>
        
      </ul>

      {/* DROPDOWN */}
      <div >
        <button
          onClick={() => toggleDropdown("researchDropdown")}
          className="inline-flex items-center mt-4 text-green-400 hover:text-green-500 transition"
        >
          Read More <span className="ml-1">→</span>
        </button>

        <div
          id="researchDropdown"
          className="hidden mt-3 text-gray-300 transition-all duration-300 ease-in-out"
        >
          <ul className="text-gray-300 space-y-1 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Climate change adaptation & rural livelihoods</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-400">•</span>
              <span>Incentive‑based environmental policies</span>
            </li>

            <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Policy evaluation for resource allocation</span>
          </li>
          </ul>
        </div>  
      </div>

    </div>

    {/* PUBLICATIONS */}
    <div className="bg-neutral-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition">
      <h3 className="text-xl font-semibold text-green-300 mb-3">
        Publications
      </h3>

      <ul className="text-gray-300 space-y-1 text-sm md:text-base">
        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Peer‑reviewed journal articles</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Conference papers</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Working papers</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="text-green-400">•</span>
          <span>Policy briefs</span>
        </li>
      </ul>

      {/* Google Scholar Link */}    
      <a
        href="https://scholar.google.com/citations?user=th1C6nkAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-8 text-green-400 hover:text-green-500 transition text-lg">
        View Full Publications on Google Scholar →
      </a>


    </div>

  </div>

  
</section>

  );
}

export default Academic;
