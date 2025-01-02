"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import Heading from "@/components/heading/heading";
import { ProjectDetailModal } from "@/components/modal/projectDetailModal/projectDetailModal";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "OTO Work Website",
      description:
        "OTO Work is a professional blog website CMS application, the OTO App — an all-in-one solution",
      thumbnailImage: "/assets/projects/otoBlog.jpeg",
      technologies: ["React Js", "Tailwind CSS", "Strapi"],
    },
    {
      title: "Graphinox Website",
      description:
        "Graphinox website designed to promote its powerful CMS application, the OTO App — an all-in-one solution",
      thumbnailImage: "/assets/projects/graphinox.jpeg",
      technologies: ["Next Js", "Tailwind CSS"],
    },
    {
      title: "Budget Collector",
      description:
        "Budget Collector website designed to promote its powerful CMS application, the Budget Collector App — an all-in-one solution",
      thumbnailImage: "/assets/projects/budgetCollector.jpeg",
      technologies: ["Next Js", "Tailwind CSS", "Rest API", "Mongo DB"],
    },
    {
      title: "AAHMB Real Estate",
      description:
        "AAHMB Real Estate website designed to promote its powerful CMS application, the Real Estate App — an all-in-one solution",
      thumbnailImage: "/assets/projects/aahmbRealEstate.jpeg",
      technologies: ["Next Js", "Tailwind CSS"],
    },
  ];

  return (
    <div className="flex flex-col gap-8 container relative">
      <Heading title={"PROJECTS"} />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects && projects?.length
          ? projects?.map((content, outerIndex) => {
              return (
                <div
                  key={outerIndex}
                  className="col-span-1 w-full rounded-xl flex flex-col gap-4 overflow-hidden shadow-xl p-4 border bg-[#8e8e8e0f] border-[#e2e8ff1a] box-shadow-header std-backdrop-blur cursor-pointer group"
                >
                  {/* ----------- IMAGE ----------- */}
                  <div className="max-h-56 h-56 bg-slate-400 rounded-xl overflow-hidden relative">
                    <Image
                      alt={"projectImage-" + outerIndex}
                      src={content?.thumbnailImage}
                      layout="fill"
                      priority
                      objectFit="cover"
                      quality={100}
                      className="opacity-70 transform transition-all ease-in-out duration-700 group-hover:opacity-100 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-2 flex-1">
                    {/* ----------- TITLE ----------- */}
                    <div className="text-lg font-bold capitalize">
                      {content?.title || "Title"}
                    </div>

                    {/* ----------- DESCRIPTION ----------- */}
                    <div className="text-gray-300 text-sm">
                      {content?.description || "Description Here"}
                    </div>

                    {/* ----------- TECHNOLOGIES USED ----------- */}
                    <div className="flex gap-2 pt-2">
                      {content &&
                        content?.technologies?.length &&
                        content?.technologies?.map((technology, innerIndex) => {
                          return (
                            <span
                              key={innerIndex}
                              className="text-xs border border-gray-500 text-gray-300 rounded-full py-1 px-3"
                            >
                              {technology}
                            </span>
                          );
                        })}
                    </div>

                    <button
                      className="flex gap-2 items-center pt-3 cursor-pointer group"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <span className="rounded-full w-7 h-7 border flex justify-center items-center group-hover:bg-white group-hover:text-black group-hover:-rotate-45 transform transition-all ease-in-out duration-500">
                        <MdArrowForward size={20} />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      <ProjectDetailModal
        isModalOpen={isModalOpen}
        setIsModalOpen={(value) => setIsModalOpen(value)}
      />
    </div>
  );
};

export default Projects;
