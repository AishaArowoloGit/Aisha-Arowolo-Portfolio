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
          <p className="text-base md:text-md lg:text-lg leading-relaxed text-gray-300 mb-4">
            I am Dr Aisha Olushola Arowolo, an educator, data analyst, and frontend developer who enjoys creating meaningful digital experiences 
            and making complex ideas easier to understand. My journey blends academic depth with hands‑on creativity. Over the years, 
            I’ve developed a strong passion for using technology to support learning, research, and problem‑solving in practical, 
            impactful ways.  
          </p>

          <p className="text-base md:text-md lg:text-lg leading-relaxed text-gray-300 mb-4">
            I love working at the intersection of data and design. On one side, I enjoy analysing datasets, uncovering 
            insights, and presenting information clearly using tools like Excel <FaFileExcel className="inline text-green-400 mx-1" />, 
            Power BI <TbChartBar className="inline text-yellow-500 mx-1" />, and SQL <SiMysql className="inline text-blue-400 mx-1" />. On the other side, I’m equally drawn 
            to the visual and structural side of the web — building responsive interfaces, translating Figma designs into clean code, and 
            crafting layouts that feel intuitive and accessible. I am skilled in using HTML <FaHtml5 className="inline text-orange-500 mx-1" />, CSS 
            <FaCss3Alt className="inline text-blue-500 mx-1" />, JavaScript <FaJs className="inline text-yellow-400 mx-1" />, and React
            <FaReact className="inline text-blue-300 mx-1" />.
          </p>

          <p className="text-base md:text-md lg:text-lg leading-relaxed text-gray-300 mb-6">
            My approach to work is simple: clarity, purpose, and user experience. Whether I’m coding a layout, preparing a dataset, or 
            guiding students through a concept, I focus on making information easy to navigate and meaningful to the people who use it.
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
