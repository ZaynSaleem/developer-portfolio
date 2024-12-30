"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const navItems = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "About",
      link: "",
    },
    {
      title: "Career",
      link: "",
    },
    {
      title: "Projects",
      link: "",
    },
    {
      title: "Blogs",
      link: "",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex sticky top-0 justify-center items-center transition-all duration-300 ease-in-out z-50 ${
        isScrolled ? "z-50 py-1" : "py-2"
      }`}
      style={{ transition: "all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)" }}
    >
      <div className="w-full max-w-[90%] flex justify-between items-center px-2 py-2 rounded-2xl bg-[#8e8e8e0f] border border-[#e2e8ff1a] box-shadow-header mt-4 std-backdrop-blur xl:max-w-[1223px]">
        {/* Logo */}
        <div className="text-xl leading-normal pl-5 md:text-2xl lg:text-3xl">
          <span className="text-gray-300"> {"<"} </span>
          <span className="font-agustina capitalize font-medium text-teal-400">
            zain saleem{" "}
          </span>
          <span className="text-gray-300"> {" />"} </span>
        </div>

        <div className="flex items-center gap-3 text-sm md:gap-5 lg:gap-6 lg:text-base">
          {navItems && navItems?.length
            ? navItems?.map((content, index) => {
                return (
                  <span
                    className="font-medium text-gray-300 cursor-pointer"
                    key={index}
                  >
                    {content?.title}
                  </span>
                );
              })
            : null}
        </div>

        {/* ============== NAV ITEMS ============== */}
        {/* linear-gradient-header */}
        <div className="border border-teal-400 text-teal-400 rounded-xl py-2 font-medium sm:px-4 lg:text-lg lg:px-8">
          Hire me
        </div>
      </div>
    </div>
  );
};
