const toggleDropdown = () => {
  const element = document.getElementById("coursesDropdown");
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
    As an Associate Professor of Environmental and Welfare Economics at FUNAAB,
    my research centers on the sustainable management of natural resources, 
    the valuation of environmental goods and services, and the economic analysis of policies 
    that promote social welfare. I explore the interactions between economic activities and environmental systems, 
    focusing on optimizing resource allocation to balance economic growth with ecological sustainability.
  </p>

  {/* 3‑Column Academic Cards */}
  <div className="grid md:grid-cols-3 gap-8">

    {/* COURSES TAUGHT */}
    <div className="bg-neutral-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition">
      <h3 className="text-xl font-semibold text-green-300 mb-3">
        Courses Taught
      </h3>

      <ul className="text-gray-300 space-y-1 text-sm md:text-base">
        <li>Environmental & Resource Economics</li>
        <li>Economics of Renewable Natural Resources</li>
        <li>Econometric Methods</li>
        <li>Statistical Theory and Analysis</li>
      </ul>

      {/* DROPDOWN */}
      <div className="mt-4">
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center text-green-400 hover:text-green-500 transition"
        >
          Read More <span className="ml-1">→</span>
        </button>

        <div
          id="coursesDropdown"
          className="hidden mt-3 text-gray-300 transition-all duration-300 ease-in-out"
        >
          <ul className="text-gray-300 space-y-1 text-sm md:text-base">
            <li>Computer Applications in Agriculture</li>
            <li>Agricultural Production Economics</li>
            <li>Principles of Agricultural Economics</li>
            <li>Principles of Economics</li>
          </ul>
        </div>
      </div>
    </div>


    {/* RESEARCH INTERESTS */}
    <div className="bg-neutral-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition">
      <h3 className="text-xl font-semibold text-green-300 mb-3">
        Research Interests
      </h3>

      <ul className="text-gray-300 space-y-1 text-sm md:text-base">
        <li>Environmental valuation & resource management</li>
        <li>Economic modeling for sustainable agriculture</li>
        <li>Climate adaptation & rural livelihoods</li>
        <li>Policy evaluation for resource allocation</li>
      </ul>

      <a href="/research-interests" className="inline-flex items-center mt-4 text-green-400 hover:text-green-500 transition">
        Read More <span className="ml-1">→</span>
      </a>

    </div>

    {/* PUBLICATIONS */}
    <div className="bg-neutral-900 border border-gray-700 p-6 rounded-lg hover:border-green-500 transition">
      <h3 className="text-xl font-semibold text-green-300 mb-3">
        Publications
      </h3>

      <ul className="text-gray-300 space-y-1 text-sm md:text-base">
        <li>Peer‑reviewed journal articles</li>
        <li>Conference papers</li>
        <li>Working papers</li>
        <li>Policy briefs</li>
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
