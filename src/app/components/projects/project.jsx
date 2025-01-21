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
      subheading:
        "OTO Work is a professional blog website CMS application, the OTO App — an all-in-one solution",
      description:
        "OTO Work is a professional blog website designed to promote its powerful CMS application, the OTO App — an all-in-one solution for managing automated proposals, contracts, and invoices. The platform showcases key features like easy client management, time tracking, and expense management, offering businesses a seamless way to streamline their workflow. The website was built using React.js for a fast, responsive, and dynamic user experience, while Tailwind CSS ensured a modern, clean, and fully responsive design. I collaborated closely with the client to translate their vision into a stunning design, starting with detailed Figma prototypes and delivering a highly optimized and functional final product. This project not only highlights the OTO App's features but also serves as a hub for valuable content, driving user engagement and interest in the CMS",
      thumbnailImage: "/assets/projects/otoBlog.jpeg",
      images: [
        "/assets/projects/otoWorkHeroSection.png",
        "/assets/projects/otoWorkManageSection.png",
        "/assets/projects/otoWorkLastSection.png",
      ],
      technologies: ["React Js", "Tailwind CSS", "Strapi"],
    },
    {
      title: "Graphinox Agency Website",
      subheading:
        "Graphinox is a creative design agency that offers top-notch services such as logo design, animations, and branding solutions.",
      description:
        "Graphinox is a creative design agency that offers top-notch services such as logo design, animations, and branding solutions. The client’s primary goal was to establish a professional, visually engaging online presence to showcase their services and attract potential clients. project Highlights: - Stunning Visuals - A clean, professional layout with eye-catching animations to reflect the agency’s creative expertise.- Responsive Design - The website is optimized for all devices, ensuring a smooth user experience on mobile, tablet, and desktop. - Service Showcase – Dedicated sections for their core offerings like Logo Design, Animations, UX/UI -Design, and Online Marketing. - Engaging UI/UX – Designed with a focus on user engagement and ease of navigation. - Speed & Performance – Leveraging Next.js for blazing-fast performance and seamless transitions.",
      thumbnailImage: "/assets/projects/graphinox.jpeg",
      images: [
        "/assets/projects/graphinox/graphinoxHeroSection.png",
        "/assets/projects/graphinox/graphinoxProjectsSection.png",
        "/assets/projects/graphinox/graphinoxMidSection.png",
        "/assets/projects/graphinox/graphinoxLastSection.png",
      ],
      technologies: ["Next Js", "Tailwind CSS"],
    },
    {
      title: "Budget Collector Mobile App and CMS",
      subheading:
        "Budget Collector is a comprehensive platform designed for art enthusiasts and museums, combining a mobile app and a powerful content management system (CMS)",
      description:
        "Budget Collector is a comprehensive platform designed for art enthusiasts and museums, combining a mobile app and a powerful content management system (CMS). The mobile app allows users to explore, showcase, and purchase art, while the CMS empowers museums to manage their collections, track statistics, and add new artwork seamlessly. Built with React Native for the mobile app and Next.js for the CMS, the platform delivers a sleek, user-friendly interface, enhanced by Tailwind CSS for responsive design and MongoDB for robust data management. The design, crafted in Figma, ensures a visually stunning and intuitive user experience.",
      thumbnailImage: "/assets/projects/budgetCollector.jpeg",
      technologies: ["Next Js", "React Native", "Tailwind CSS", "Rest API", "Mongo DB"],
    },
    {
      title: "AAHMB Real Estate Website",
      subheading:
        "AAHMB Real Estate is a professional website designed to showcase real estate projects for builders and developers.",
      description:
        "AAHMB Real Estate is a professional website designed to showcase real estate projects for builders and developers. The client wanted a modern platform to highlight their past work and attract potential clients. To enhance the website's appeal, I incorporated custom animations that bring their portfolio to life.",
      thumbnailImage: "/assets/projects/aahmbRealEstate.jpeg",
      technologies: ["Next Js", "Tailwind CSS"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelection = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-14 container relative" id="projects">
      <Heading title={"PROJECTS"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects && projects?.length
          ? projects?.map((content, outerIndex) => {
              return (
                <div
                  key={outerIndex}
                  className="col-span-1 w-full rounded-xl flex flex-col gap-4 overflow-hidden shadow-lg p-4 border bg-[#8e8e8e0f] border-[#e2e8ff1a] box-shadow-header std-backdrop-blur cursor-pointer group transition-transform transform hover:scale-105"
                >
                  {/* ----------- IMAGE ----------- */}
                  <div className="h-48 sm:h-56 bg-slate-400 rounded-xl overflow-hidden relative">
                    <Image
                      alt={"projectImage-" + outerIndex}
                      src={content?.thumbnailImage}
                      layout="fill"
                      priority
                      objectFit="cover"
                      quality={100}
                      className="opacity-80 transform transition-all ease-in-out duration-700 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>

                  {/* ----------- CONTENT ----------- */}
                  <div className="flex flex-col justify-between gap-2 flex-1">
                    {/* ----------- TITLE ----------- */}
                    <div className="text-lg font-bold capitalize text-gray-100">
                      {content?.title || "Title"}
                    </div>

                    {/* ----------- subheading ----------- */}
                    <div className="text-gray-300 text-sm">
                      {content?.subheading || "subheading Here"}
                    </div>

                    {/* ----------- TECHNOLOGIES USED ----------- */}
                    {content?.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {content?.technologies?.map(
                          (technology, innerIndex) => (
                            <span
                              key={innerIndex}
                              className="text-xs border border-gray-500 text-gray-300 rounded-full py-1 px-3"
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>
                    )}

                    {/* ----------- VIEW PROJECT BUTTON ----------- */}
                    <button
                      className="flex gap-2 items-center pt-3 cursor-pointer group"
                      onClick={() => handleProjectSelection(content)}
                    >
                      <span className="text-sm font-medium text-gray-200">
                        View Project
                      </span>
                      <span className="rounded-full w-7 h-7 border border-gray-500 flex justify-center items-center group-hover:bg-white group-hover:text-black group-hover:-rotate-45 transform transition-all ease-in-out duration-500">
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
        selectedProject={selectedProject}
        isModalOpen={isModalOpen}
        setIsModalOpen={(value) => setIsModalOpen(value)}
      />
    </div>
  );
};

export default Projects;
