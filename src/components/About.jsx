import { FaFileExcel, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbChartBar } from "react-icons/tb";




function About() {
  return (
    <section id="about" className="px-8 bg-black text-white scroll-mt-24 pt-10 pb-20 border-b border-gray-700">

      {/* FIXED TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 items-center">

        {/* LEFT COLUMN — TITLE */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          ABOUT ME
        </h2>

        {/* RIGHT COLUMN — TEXT + SKILLS */}
        <div>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-4">
            I am an Associate Professor of Environmental and Welfare Economics in the Department of Agricultural Economics and Farm Management, Federal University of Agriculture, Abeokuta (FUNAAB).
            My research focuses on environmental and resource economics, exploring sustainable
            agricultural practices and resource allocation.
          </p>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-6">
            I also specialize in data analysis using Excel <FaFileExcel className="inline text-green-400 mx-1" />, PowerBI <TbChartBar className="inline text-yellow-500 mx-1" /> and SQL 
            <SiMysql className="inline text-blue-400 mx-1" />, and develop modern web interfaces using HTML <FaHtml5 className="inline text-orange-500 mx-1" />, CSS 
            <FaCss3Alt className="inline text-blue-500 mx-1" />, JavaScript <FaJs className="inline text-yellow-400 mx-1" />, and React
            <FaReact className="inline text-blue-300 mx-1" />.
          </p>

        </div>

      </div>

      {/* CV Button */}
      <div className="mt-10 text-center">
        <a
          href="/AishaCV.pdf"
          download
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
}

export default About;
