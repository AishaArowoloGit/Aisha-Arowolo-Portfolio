import MyPhotoImg from "../assets/MyPhoto.png";

function Hero() {
  return (
    <section id="home" className="bg-black flex flex-col w-full md:flex-row items-center gap-14 md:gap-20 lg:gap-28 px-8 md:px-12 lg:px-16 py-20 scroll-mt-24 border-b border-gray-700">
      {/* Hero Text */}
      <div>
        <h1 className="text-3xl md:text-[35px] lg:text-5xl font-bold mb-12 text-white leading-tight">
          Hi, I am <br /> AISHA AROWOLO
        </h1>

        <p className="text-base md:text-md lg:text-lg mb-12 text-gray-300 max-w-md">
          An Associate Professor of Environmental and Resource Economics passionate about crafting intelligent solutions through research, analytics, and modern web development.
        </p>

        <div className="flex items-center gap-4">
          <a href="#contact" className="bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-500 transition">
            Get in Touch
          </a>

          <a
            href="/AishaCV.pdf"
            download
            className="bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-500 transition"
          >
            Download My CV
          </a>
        </div>
        
      </div>
      

      {/* My Photo */}
  
      <img src={MyPhotoImg} alt="Aisha Arowolo" className="w-60 h-60 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] object-contain shadow-lg rotate-6"/>


    </section>
  );
}

export default Hero;
