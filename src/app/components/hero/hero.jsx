"use client";
import Image from "next/image";

const HeroSection = () => {
  const handleClick = () => {
    window.location.href = `mailto:zainsaleem456@gmail.com`;
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center" id="home">
      {/* ============= AVATAR ============= */}
      <div className="overflow-hidden rounded-full">
        <Image
          alt="img"
          src={"/assets/hero/avatar1.png"}
          width={200}
          height={200}
        />
      </div>

      {/* ============= HEADLINE ============= */}
      <div className="text-center text-2xl !leading-tight font-extrabold sm:text-4xl lg:text-6xl lg:max-w-[60%]">
        <span className="text-gray-300"> Hi, I’m </span>{" "}
        {/* <span className="bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent"> */}
        <span className="text-teal-400"> Zain Saleem</span> <br /> a Software
        Engineer
      </div>

      {/* ============= DESCRIPTION ============= */}

      <p className="text-center container">
        {/* With over 3 years of experience in designing
        and developing modern web applications. I specialize in both frontend
        and backend development, offering expertise in creating visually
        appealing, responsive, and user-friendly interfaces while ensuring
        robust and efficient backend systems. */}
        With 3 years of experience crafting seamless user experiences and robust
        backend systems. I specialize in building modern, scalable web
        applications that combine creativity with functionality to deliver
        exceptional results.
      </p>

      <div className="flex gap-3 items-center">
        <button
          type="button"
          onClick={handleClick}
          className="border border-white text-white font-medium rounded-xl py-3 px-5 transform transition-all ease-in-out duration-500 hover:text-black hover:bg-white"
        >
          Get in touch
        </button>
        <div className="border border-white bg-white text-black font-medium rounded-xl py-3 px-5 transform transition-all ease-in-out duration-500 hover:text-white hover:bg-transparent">
          <a
            href="/assets/resume/MuhammadZainResume-updated.pdf"
            download="MuhammadZainResume.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
