"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

import Heading from "@/components/heading/heading";
import skillsJsonData from "@/json/skills/skills.json";

const Skills = () => {
  const [skills] = useState([...skillsJsonData]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="container flex flex-col gap-14 justify-center items-center"
      id="skills"
    >
      {/* Heading */}
      <Heading title={"Skills"} />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between gap-x-20">
        {/* Skill Boxes */}
        <div className="w-full overflow-hidden relative h-[400px] group">
          <div className="flex flex-col animate-scrollY group-hover:paused">
            {[...skills, ...skills, ...skills, ...skills].map(
              (skill, index) => (
                <div
                  key={index}
                  className="skill-item flex items-start space-x-4 mb-6 bg-[#8e8e8e0f] border-[#e2e8ff1a] 
            box-shadow-header std-backdrop-blur p-5 rounded-xl  animate-scroll"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex justify-center items-center bg-opacity-10 relative ${skill.color}`}
                  >
                    <Image
                      src={skill.icon}
                      layout="fill"
                      className="object-cover w-full h-full"
                      alt="skills-icon"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col gap-1">
                    <strong className="text-white text-sm">
                      {skill.title}
                    </strong>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                    {/* Progress Bar */}
                    <div className="relative h-2 w-full bg-gray-800 rounded-md shadow-inner mt-2">
                      <div
                        className="absolute h-full rounded-md bg-gradient-to-r from-blue-400 to-indigo-600"
                        style={{ width: skill.progress }}
                      >
                        <span className="absolute -top-2 right-0 text-xs bg-blue-600 text-white px-2 py-1 rounded-md">
                          {skill.progress}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full col-span-1 hidden lg:flex">
          <Image
            data-aos="fade"
            src="/assets/skills/skillsGif.gif"
            alt="Skills Illustration"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Skill Image Section */}
    </div>
  );
};

export default Skills;
