import Image from "next/image";
import HeroSection from "./components/hero/hero";
import AboutSection from "./components/about/page";
import ProjectSection from "./components/projects/project";
import ExperienceSection from "./components/experience/page";
import Qualification from "./components/qualification/page";
import Skills from "./components/skills/page";
import Blogs from "./components/blogs/page";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col pb-20 gap-16 lg:gap-32 px-10 lg:p-20 sm:pt-16">
      <div
        className="absolute inset-0 h-full bg-center -z-10 opacity-75 ml-[10%]"
        style={{ backgroundImage: "url('/assets/hero/looperGroup.png')" }}
      ></div>
      {/* 
      <div class="absolute inset-0 -z-10">
        <div class="animate-gradient w-full h-full opacity-10"></div>
      </div> */}

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Skills />
      <ExperienceSection />
      {/* <Blogs /> */}
      {/* <Qualification /> */}

      <div className="lg:max-w-[90%] mx-auto px-7 py-6 md:py-8 lg:py-10 xl:py-14 w-full rounded-xl  bg-[#8e8e8e0f] box-shadow-header mt-4 std-backdrop-blur flex justify-between items-center gap-2">
        <span className="text-sm sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold uppercase tracking-wider">
          Got a project in mind?
        </span>

        <div className="border border-teal-400 text-teal-400 rounded-2xl py-3 md:py-4 font-medium px-4 text-xs sm:text-base md:text-lg lg:text-2xl lg:px-10 uppercase cursor-pointer hover:bg-teal-500 hover:text-white transform transition-all ease-in-out duration-300 text-center whitespace-nowrap">
          Contact me
        </div>
      </div>
    </div>
  );
}
