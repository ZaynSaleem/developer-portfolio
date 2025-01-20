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
    <div className="relative min-h-screen flex flex-col pb-20 gap-32 px-10 lg:p-20 sm:pt-16">
      <div
        className="absolute inset-0 h-full bg-center -z-10 opacity-75 ml-[10%]"
        style={{ backgroundImage: "url('/assets/hero/looperGroup.png')" }}
      ></div>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <Blogs />
      {/* <Qualification /> */}
      {/* <Skills/> */}

      <div className="max-w-[90%] mx-auto px-7 py-14 w-full rounded-xl  bg-[#8e8e8e0f] box-shadow-header mt-4 std-backdrop-blur flex justify-between items-center">
        <span className="text-5xl font-semibold uppercase tracking-wider">
          Got a project in mind?
        </span>

        <div className="border border-teal-400 text-teal-400 rounded-2xl py-4 font-medium sm:px-4 lg:text-2xl lg:px-10 uppercase cursor-pointer hover:bg-teal-500 hover:text-white transform transition-all ease-in-out duration-300">
          Contact me
        </div>
      </div>
    </div>
  );
}
