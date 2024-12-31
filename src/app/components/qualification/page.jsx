import React from "react";

const Qualification = () => {
  return (
    <section class="py-16">
  <div class="container mx-auto">
    <h2 class="text-4xl text-[#66e3c4] font-bold text-center mb-12 uppercase tracking-widest">
      Qualifications
    </h2>
    <div class="relative">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#66e3c4] to-[#0e0e38]"></div>
      <div class="space-y-10">
        {/* <!-- Qualification --> */}
        <div class="flex items-start">
          <div class="bg-[#66e3c4] w-6 h-6 rounded-full"></div>
          <div class="ml-6">
            <h3 class="text-white text-2xl font-bold">Bachelor of Science</h3>
            <p class="text-gray-300">Computer Science - 2022</p>
          </div>
        </div>
        {/* <!-- Certification --> */}
        <div class="flex items-start">
          <div class="bg-[#66e3c4] w-6 h-6 rounded-full"></div>
          <div class="ml-6">
            <h3 class="text-white text-2xl font-bold">Full-Stack Developer Certification</h3>
            <p class="text-gray-300">Awarded in 2023</p>
          </div>
        </div>
        {/* <!-- Add more qualifications --> */}
      </div>
    </div>
  </div>
</section>

  );
};

export default Qualification;
