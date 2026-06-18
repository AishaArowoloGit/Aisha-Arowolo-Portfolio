import MyPhotoImg from "../assets/MyPhoto.png";

function Hero() {
  return (
    <section id="home" className="bg-black flex flex-col w-full md:flex-row items-center gap-10 md:gap-28 px-4 md:px-12 py-10 scroll-mt-24 border-b border-gray-700">
      {/* Hero Text */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-white leading-tight">
          Hi, I am <br /> AISHA AROWOLO
        </h1>

        <p className="text-base md:text-md lg:text-lg mb-12 text-gray-300 max-w-sm">
          An Associate Professor of Environmental and Resource Economics passionate about crafting intelligent solutions through research, analytics, and modern web development.
        </p>

        <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 transition">
          Get in Touch
        </a>
      </div>
      

      {/* hero Image */}
      <img src={MyPhotoImg} alt="Aisha Arowolo" className="w-60 h-60 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] object-contain shadow-lg rotate-6"/>


    </section>
  );
}

export default Hero;
