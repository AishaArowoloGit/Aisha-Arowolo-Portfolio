function Academic() {
  return (
    <section
  id="academic"
  className="scroll-mt-24 bg-black text-white pt-10 pb-20 px-8 border-b border-gray-700"
>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
    ACADEMIC AND RESEARCH WORK
  </h2>

  <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed ">
    As a Senior Lecturer in Agricultural Economics and Farm Management at FUNAAB,
    my research focuses on environmental and resource economics — exploring sustainable
    agricultural practices, resource valuation, and climate adaptation strategies.
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
        <li>Production Economics</li>
        <li>Farm Management</li>
        <li>Agricultural Policy & Development</li>
        <li>Quantitative Methods</li>
      </ul>

      <a href="/courses" className="inline-flex items-center mt-4 text-green-400 hover:text-green-500 transition">
        Read More <span className="ml-1">→</span>
      </a>
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
