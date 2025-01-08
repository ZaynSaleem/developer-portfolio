"use client";
import Heading from "@/components/heading/heading";
import React, { useEffect, useState } from "react";

const Qualification = () => {
  const resumeData = {
    education: [
      {
        title: "CoderHouse Courses",
        subtitle: "Backend Programming",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2014 - 2016",
      },
      {
        title: "Lviv National Academy of Arts",
        subtitle: "Faculty of Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2012 - 2014",
      },
    ],
    certificates: [
      {
        title: "Mern Essential training",
        company: "LinkedIn Learning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024",
      },
      {
        title: "Full Stack Development",
        company: "LinkedIn Learning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "2024",
      },
    ],
  };

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#resume-section");
    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    //     <section class="py-16">
    //   <div class="container mx-auto">
    //     <h2 class="text-4xl text-[#66e3c4] font-bold text-center mb-12 uppercase tracking-widest">
    //       Qualifications
    //     </h2>
    //     <div class="relative">
    //       <div class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#66e3c4] to-[#0e0e38]"></div>
    //       <div class="space-y-10">
    //         {/* <!-- Qualification --> */}
    //         <div class="flex items-start">
    //           <div class="bg-[#66e3c4] w-6 h-6 rounded-full"></div>
    //           <div class="ml-6">
    //             <h3 class="text-white text-2xl font-bold">Bachelor of Science</h3>
    //             <p class="text-gray-300">Computer Science - 2022</p>
    //           </div>
    //         </div>
    //         {/* <!-- Certification --> */}
    //         <div class="flex items-start">
    //           <div class="bg-[#66e3c4] w-6 h-6 rounded-full"></div>
    //           <div class="ml-6">
    //             <h3 class="text-white text-2xl font-bold">Full-Stack Developer Certification</h3>
    //             <p class="text-gray-300">Awarded in 2023</p>
    //           </div>
    //         </div>
    //         {/* <!-- Add more qualifications --> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="resume-section" className=" text-white py-16">
      <div className="container mx-auto px-4">
        <Heading title={'Resume'}/>
        {/* <h2 className="text-center text-2xl font-bold mb-8">Resume</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="border-y p-6 shadow-lg mb-4 flex flex-col gap-2"
              >
                <h4 className="text-xl font-bold">{edu.title}</h4>
                <p className="italic text-base">{edu.subtitle}</p>
                <p className="text-gray-400">{edu.description}</p>
                <span className="block mt-4 text-sm text-gray-500">
                  {edu.date}
                </span>
              </div>
            ))}
          </div>

          {/* certificates */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">certificates</h3>
            {resumeData.certificates.map((exp, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4"
              >
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="italic text-lg">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
                <span className="block mt-4 text-sm text-gray-500">
                  {exp.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
