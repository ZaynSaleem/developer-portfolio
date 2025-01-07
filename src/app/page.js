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
      {/* Background Image */}
      {/* <Image
        src={"/assets/hero/looperGroup.png"}
        alt="looper-bg"
        objectFit="cover"
        quality={100}
        priority
        className="-z-10 opacity-75"
        layout="fill"
      /> */}
      <div
        className="absolute inset-0 h-full bg-center -z-10 opacity-75 ml-[10%]"
        style={{ backgroundImage: "url('/assets/hero/looperGroup.png')" }}
      ></div>

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      {/* <Qualification /> */}
      {/* <Skills/> */}
      {/* <Blogs/> */}
    </div>
  );
}
