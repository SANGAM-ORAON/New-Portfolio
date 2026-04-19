import React from "react";
import Resume from '../assets/resume.pdf'

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-28">
      <div className="flex flex-col items-center w-full mt-24 md:mt-32 lg:mt-40 gap-6 md:gap-8 lg:gap-10">
          <a href="#connect">
        <h4 className="border border-gray-800 rounded-2xl px-3 py-1 text-sm md:text-base font-mono bg-[#131313]">
          <span className="text-green-500 mr-2 fade">●</span>AVAILABLE FOR NEW PROJECTS
        </h4>
        </a>
        <div className="flex flex-col items-center gap-8 md:gap-6 lg:gap-8 text-center">
          <h2 className="text-3xl sm:text-3xl md:text-7xl font-semibold font-[naam] h-auto w-auto">
            SANGAM ORAON
          </h2>

          <h2 className="text-2xl sm:text-xl md:text-8xl font-[name] text-[#3c096c] h-auto w-auto">
            SOFTWARE DEVELOPER
          </h2>
          <p className="px-2 sm:px-6 md:px-10 lg:px-20 text-sm sm:text-lg md:text-2xl max-w-3xl text-gray-400 ">
            I combine{" "}
            <p className="inline text-[#faf9f9]">
              problem-solving, clean code, and modern technologies
            </p>{" "}
            to build scalable applications that deliver real-world impact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-8 md:gap-6">
          <button className="text-lg font-mono md:text-2xl rounded-4xl px-10 py-4 w-full hover:bg-black hover:border-gray-400 hover:border sm:w-auto bg-[#3c096c]">
            <a href={Resume}>Resume</a>
          </button>
          <button className="text-lg font-mono md:text-2xl border border-gray-500 rounded-4xl px-10 py-4 w-full sm:w-auto hover:bg-[#3c096c] hover:border-0">
            <a href={"#contact"}>Hire Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
