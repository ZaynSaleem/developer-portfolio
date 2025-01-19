"use client";
import anime from "animejs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoIosClose, IoIosMenu, IoMdClose } from "react-icons/io";

export const Header = () => {
  const sidebarRef = useRef();

  const navItems = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Projects",
      link: "projects",
    },
    {
      title: "Career",
      link: "career",
    },
    {
      title: "Blogs",
      link: "blogs",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, SetIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("");

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

  // Function to handle scroll and detect the active section
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item?.link);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offset = window.innerHeight / 3; // Adjust based on when it should be active
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(item?.link);
          }
        }
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  // Smooth scroll on click
  const handleSmoothScroll = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      animateSidebarText();
    }
  }, [isSidebarOpen]);

  const toggleSideBar = () => {
    SetIsSidebarOpen(!isSidebarOpen);
  };

  const animateSidebarText = () => {
    if (!sidebarRef.current) return;
    const items = sidebarRef.current.querySelectorAll(".animatable-text");
    console.log({ items });
    anime({
      targets: items,
      translateY: [50, 0], // Start from 50px above to original position
      opacity: [0, 1], // Fade in
      scale: [0.9, 1], // Slight zoom-in effect
      easing: "easeOutExpo",
      duration: 800, // Duration of animation for each element
      delay: anime.stagger(150), // Add delay between animations
    });
  };

  return (
    <>
      <div
        className={`w-full flex sticky top-0 justify-center items-center transition-all duration-300 ease-in-out z-50 ${
          isScrolled ? "z-50 py-1" : "py-2"
        }`}
        style={{ transition: "all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)" }}
      >
        <div className="w-full max-w-[90%] px-2 py-2 rounded-2xl bg-[#8e8e8e0f] border border-[#e2e8ff1a] box-shadow-header mt-4 std-backdrop-blur xl:max-w-[1223px] z-10">
          <div className="hidden md:flex md:justify-between md:items-center">
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
                        className={`font-medium cursor-pointer transform transition-all ease-in-out duration-500 px-1 ${
                          activeSection === content?.link
                            ? "text-teal-500"
                            : "text-gray-300 hover:text-teal-400"
                        }`}
                        onClick={() => handleSmoothScroll(content?.link)}
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

          {/* ====================================== MOBILE NAV ====================================== */}

          {/* Sidebar for mobile */}
          <div
            className={`md:hidden w-full h-full py-2 bg-grey-700 z-50 transition-transform ease-in-out duration-500 transform overflow-scroll`}
          >
            {/* Close Button */}
            <div className="container flex h-full flex-col justify-between">
              {/* Close Button */}
              <div className="flex justify-between items-center md:hidden">
                {/* Logo */}
                <div className="text-2xl leading-normal md:text-2xl lg:text-3xl">
                  <span className="text-gray-300"> {"<"} </span>
                  <span className="font-agustina capitalize font-medium text-teal-400">
                    zain saleem
                  </span>
                  <span className="text-gray-300"> {" />"} </span>
                </div>

                <div
                  className={`transform transition-all ease-in-out duration-500 ${
                    isSidebarOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {isSidebarOpen ? (
                    <IoIosClose
                      className="transition-all ease-in-out duration-200"
                      size={36}
                      color="#2dd4bf"
                      onClick={toggleSideBar}
                    />
                  ) : (
                    <IoIosMenu
                      className="transition-all ease-in-out duration-200"
                      size={36}
                      color="#2dd4bf"
                      onClick={toggleSideBar}
                    />
                  )}
                </div>
              </div>
              {/* Sidebar Links */}
            </div>
          </div>
        </div>

        <div
          ref={sidebarRef}
          className={`bg-[#28a69b0d] backdrop-blur-2xl border border-[#e2e8ff1a] box-shadow-header w-full py-9 absolute max-w-[90%] mt-4 mx-auto rounded-b-2xl z-0 transform transition-all ease-in-out duration-300 md:hidden ${
            isSidebarOpen
              ? "min-h-[90vh] max-h-[90vh] top-6 visible opacity-100"
              : "min-h-[0vh] top-4 invisible opacity-0"
          }`}
        >
          <div className="container mt-8  h-[70vh] overflow-y-auto ">
            <div className="flex flex-col gap-3 padding-top-64 padding-bottom-148">
              {navItems && navItems?.length
                ? navItems?.map((item, index) => (
                    <Link
                      key={index}
                      href={item?.url || "#"}
                      className="animatable-text text-teal-500 text-80 uppercase font-medium opacity-0 hover:transform hover:transition-all hover:ease-in-out hover:duration-300 hover:text-gold-200"
                    >
                      {/* onClick={toggleSidebar} */}
                      {item?.title}
                    </Link>
                  ))
                : null}
            </div>

            <div className="flex flex-col gap-20 padding-top-64 ">
              {/* ==================== SOCIAL ==================== */}
              <div className="flex flex-col gap-5 animatable-text opacity-0">
                <span className="text-teal-500/75 text-sm font-medium uppercase">
                  Interest
                </span>
                <div className="flex flex-col gap-2 text-26 font-medium tracking-tight">
                  <span>Looking for something specific?</span>
                  <span className="tracking-tighter flex items-center gap-2 uppercase text-base underline">
                    Submit your interest
                  </span>
                </div>
              </div>
              {/* ==================== INTEREST ==================== */}
              <div className="flex flex-col gap-5 animatable-text opacity-0">
                <span className="text-teal-500/75 text-sm font-medium uppercase">
                  Social
                </span>
                <div className="flex flex-col gap-2 text-26 font-medium tracking-tight">
                  <span>Instagram</span>
                  <span>LinkedIn</span>
                  <span>Facebook</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div className="flex justify-between items-center">
                <div className="hidden sm:flex animatable-text">
                  Thara Designs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {/* {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 transform transition-all ease-out duration-200 lg:hidden"
            onClick={toggleSideBar}
          ></div>
        )} */}
      </div>
    </>
  );
};
