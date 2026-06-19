import { FaFileExcel, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbChartBar } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";


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
      
        <p className="text-base md:text-md lg:text-lg leading-relaxed text-gray-300 mb-4">
          I am an Associate Professor of Environmental and Welfare Economics who enjoys turning complex ideas into clear, 
          meaningful insights. My work blends research, data analysis, and front‑end development, from analysing datasets 
          with Excel <FaFileExcel className="inline text-green-400 mx-1" />, Power BI <TbChartBar className="inline text-yellow-500 mx-1" />, 
          and SQL <SiMysql className="inline text-blue-400 mx-1" /> to building intuitive, responsive web interfaces with HTML 
          <FaHtml5 className="inline text-orange-500 mx-1" />, CSS <FaCss3Alt className="inline text-blue-500 mx-1" />, 
          JavaScript <FaJs className="inline text-yellow-400 mx-1" />, and React <FaReact className="inline text-blue-300 mx-1" />. 
          I’m passionate about clarity, user experience, and using technology to make information easier to understand and more impactful.  
        </p>

        

      </div>


      {/* Full Bio Link */}
      <div className="mt-10 text-center">
        <Link
          to="/about-full"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
        >
          <span className="text-xl">Read Full Bio</span>
          <TbExternalLink className="w-6 h-6" />
        </Link>
      </div>

    </section>
    
  );
}

export default About;
