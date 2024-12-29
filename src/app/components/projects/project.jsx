import Heading from "@/components/heading/heading";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "OTO Work Website",
      description:
        "OTO Work is a professional blog website designed to promote its powerful CMS application, the OTO App — an all-in-one solution for managing automated proposals, contracts, and invoices.",
      thumbnailImage: "/assets/projects/otoBlog.jpeg",
    },
    {
      title: "Graphinox Website",
      description:
        "Graphinox website designed to promote its powerful CMS application, the OTO App — an all-in-one solution for managing automated proposals, contracts, and invoices.",
      thumbnailImage: "/assets/projects/graphinox.jpeg",
    },
  ];

  return (
    <div className="flex flex-col gap-8 container">
      <Heading title={"PROJECTS"} />

      <div className=" grid grid-cols-2 gap-6">
        {projects && projects?.length
          ? projects?.map((content, index) => {
              return (
                <div
                  key={index}
                  className="col-span-1 w-full rounded-xl flex flex-col gap-2 overflow-hidden shadow-xl p-4 border border-gray-700"
                >
                  {/* ----------- IMAGE ----------- */}
                  <div className="max-h-56 h-56 bg-slate-400 rounded-xl overflow-hidden relative">
                    <Image
                      alt={"projectImage-" + index}
                      src={content?.thumbnailImage}
                      layout="fill"
                      priority
                      objectFit="cover"
                      quality={100}
                      className="opacity-85"
                    />
                  </div>

                  {/* ----------- TITLE ----------- */}
                  <div className="text-lg font-bold pt-3 capitalize">
                    {content?.title || "Title"}
                  </div>

                  {/* ----------- DESCRIPTION ----------- */}
                  <div className="text-gray-300 text-sm">
                    {content?.description || "Description Here"}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Projects;
