import MyPhoto from "../assets/MyPhoto.png";
import { FaFileExcel, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { TbChartBar } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import Contact from "../components/Contact";


function AboutFull() {
  return (
    <section className="mx-auto py-12 text-gray-200">

      {/* About me text and my photo*/}
      <div className="mb-10 border-b border-gray-700 px-8 md:px-12 lg:px-24">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white my-10">
        ABOUT ME
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 ">

          {/* Left — About me */}
          <div className="flex-1 ">
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              I am an Associate Professor of Environmental and Welfare Economics in the Department of Agricultural Economics at the Federal University of Agriculture, Abeokuta (FUNAAB). My work explores how people interact with natural resources and how data‑driven insights can support better decisions, policies, and outcomes. I enjoy transforming complex academic questions into clear, meaningful findings that help improve understanding and guide action.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              I also work at the intersection of data and design. I analyse datasets using tools like Excel, Power BI, and SQL, uncovering patterns and translating raw information into insights that are both accurate and accessible. Alongside this analytical work, I build intuitive, responsive web interfaces using HTML, CSS, JavaScript, and React — creating digital experiences that make information easier to navigate and more impactful.
            </p>

            <p className="text-lg leading-relaxed text-gray-300 mb-12">
              Whether I am designing a study, analysing data, or developing a user‑friendly application, my approach is grounded in clarity, purpose, and user experience. I am passionate about simplifying complexity, supporting learning, and using technology to solve meaningful problems in practical, thoughtful ways.
            </p>

            {/* My CV */}
            <a
              href="/AishaCV.pdf"
              download
              className="bg-green-600 px-6 py-3 rounded-md text-white hover:bg-green-500 transition"
            >
              Download My CV
            </a>
            
          </div>

          {/* Right- My Photo */}
          <div className="flex-shrink-0">
            <img
              src={MyPhoto}
              alt="Aisha Arowolo"
              className="w-[380px] h-[550px] object-cover rounded-xl border border-gray-600 shadow-[0_0_25px_rgba(0,255,150,0.35)] sm:rotate-4 md:rotate-6 mb-12"
            /> 
          </div>

        </div>
      </div>
      


      {/* My capabilities and skill set */}
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[400px_1fr] gap-10 items-center mb-10 border-b border-gray-700 px-8 md:px-12 lg:px-24">

        {/* Left - Title */}
        <h2 className="text-3xl lg:text-5xl font-semibold text-white text-center md:text-left">
          MY CAPABILITIES AND SKILLS SET
        </h2>

        {/* Right - Capabilities and skills set */}
        <div className="space-y-10">

          {/* Reasearch and Methodolgy */}
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              Research & Methodology
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Designing rigorous studies, applying structured research frameworks, and analysing complex problems to uncover meaningful, actionable insights.
            </p>
          </div>

          {/* Data Analysis */}
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              Data Analysis, Modeling & Visualizations
            </h3>

            <p className="text-gray-300 leading-relaxed mb-3">
              Extracting, cleaning, transforming, and modelling data using analytical tools and programming languages.
            </p>

            {/* Icons */}
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <SiMysql className="text-blue-400 text-4xl" />
                <p className="text-gray-400 text-sm mt-1">SQL</p>
              </div>

              <div className="flex flex-col items-center">
                <FaFileExcel className="text-green-500 text-4xl" />
                <p className="text-gray-400 text-sm mt-1">Excel</p>
              </div>

              <div className="flex flex-col items-center">
                <TbChartBar className="text-yellow-500 text-4xl" />
                <p className="text-gray-400 text-sm mt-1">Power BI</p>
              </div>
            </div>
          </div>

          {/* Front-end web development*/}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              Front‑End Web Development 
            </h3>

            <p className="text-gray-300 leading-relaxed mb-3">
              Building responsive, accessible web interfaces that communicate research findings and data insights through intuitive, user‑friendly design.
            </p>

            {/* Icons */}
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-orange-500 text-4xl" />
                <p className="text-gray-400 text-sm mt-1">HTML</p>
              </div>

              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-blue-500 text-4xl" />
                <p className="text-gray-400 text-sm mt-1">CSS</p>
              </div>

              <div className="flex flex-col items-center">
                <FaJs className="text-yellow-400 text-4xl" />
                <p className="text-gray-400 text-sm mt-1">JavaScript</p>
              </div>

              <div className="flex flex-col items-center">
                <FaReact className="text-blue-300 text-4xl" />
                <p className="text-gray-400 text-sm mt-1">React</p>
              </div>
            </div>
          </div>

        </div>

      </div>


      {/* My Experience*/}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[430px_1fr] gap-4 items-center border-b border-gray-700 px-8 md:px-12 lg:px-24">

        {/* Left - Title */}

        <h2 className="text-3xl lg:text-5xl font-semibold text-white text-center md:text-left">
          MY EXPERIENCE
        </h2>

        {/* Right - Experience list */}
        <div className="space-y-4">

          <div className="flex justify-between items-start border-b border-gray-900">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Associate Professor (Environmental and Welfare Economics)</h3>
              <p className="text-gray-400 md:text-md lg:text-lg italic">
                Dept. of Agric. Econs and Farm Mgt., FUNAAB
              </p>
            </div>
            <p className="text-gray-500 text-sm md:text-md lg:text-lg whitespace-nowrap">
              2025 – present
            </p>
          </div>

          <div className="flex justify-between items-start border-b border-gray-900">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Senior Lecturer</h3>
              <p className="text-gray-400 md:text-md lg:text-lg italic">
                Dept. of Agric. Econs and Farm Mgt., FUNAAB
              </p>
            </div>
            <p className="text-gray-500 text-sm md:text-md lg:text-lg whitespace-nowrap">
              2022 – 2025
            </p>
          </div>

          <div className="flex justify-between items-start border-b border-gray-900">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Lecturer I</h3>
              <p className="text-gray-400 md:text-md lg:text-lg italic">
                Dept. of Agric. Econs and Farm Mgt., FUNAAB
              </p>
            </div>
            <p className="text-gray-500 text-sm md:text-md lg:text-lg whitespace-nowrap">
              2019 – 2022
            </p>
          </div>

          <div className="flex justify-between items-start border-b border-gray-900">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Lecturer II</h3>
              <p className="text-gray-400 md:text-md lg:text-lg italic">
                Dept. of Agric. Econs and Farm Mgt., FUNAAB
              </p>
            </div>
            <p className="text-gray-500 text-sm md:text-md lg:text-lg whitespace-nowrap">
              2016 – 2019
            </p>
          </div>

          <div className="flex justify-between items-start border-b border-gray-900">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Assistant Lecturer</h3>
              <p className="text-gray-400 md:text-md lg:text-lg italic">
                Dept. of Agric. Econs and Farm Mgt., FUNAAB
              </p>
            </div>
            <p className="text-gray-500 text-sm md:text-md lg:text-lg whitespace-nowrap">
              2012 – 2016
            </p>
          </div>

          <div className="flex justify-between items-start border-b border-gray-900 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-green-400">Junior Research Fellow</h3>
              <p className="text-gray-400 md:text-md lg:text-lg italic">
                Dept. of Agric. Econs and Farm Mgt., FUNAAB
              </p>
            </div>
            <p className="text-gray-500 text-sm md:text-md lg:text-lg whitespace-nowrap">
              2010 – 2012
            </p>
          </div>

        </div>
      </div>

      <Contact />


    </section>
  );
}

export default AboutFull;
