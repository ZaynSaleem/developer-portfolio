import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      {/* ============= AVATAR ============= */}
      <div>
        <Image
          alt="img"
          src={"/assets/hero/avatar.png"}
          width={200}
          height={200}
        />
      </div>

      {/* ============= HEADLINE ============= */}
      <div className="text-center text-2xl !leading-tight font-extrabold lg:text-6xl lg:max-w-[60%]">
        <span className="text-gray-300"> Hi, I’m </span>{" "}
        {/* <span className="bg-clip-text bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent"> */}
        <span className="text-teal-400">
          {" "}
          Zain Saleem
        </span>{" "}
        <br /> a Software Engineer
      </div>

      {/* ============= DESCRIPTION ============= */}

      <p className="text-center lg:max-w-[50%]">
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </p>

      <div className="flex gap-3 items-center">
        <button
          type="button"
          className="border border-white text-white font-medium rounded-full py-3 px-5 transform transition-all ease-in-out duration-500 hover:text-black hover:bg-white"
        >
          Get in touch
        </button>
        <button className="border border-white bg-white text-black font-medium rounded-full py-3 px-5 transform transition-all ease-in-out duration-500 hover:text-white hover:bg-transparent">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
