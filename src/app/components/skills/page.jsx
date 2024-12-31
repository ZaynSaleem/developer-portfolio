import React from "react";

const Skills = () => {
  return (
    <section class="bg-[#05051e] py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl text-white font-bold mb-8">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-[#0e0e38] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <img src="/icons/react.svg" alt="React" class="w-12 h-12 mx-auto mb-4" />
          <h3 class="text-white text-xl font-semibold">React.js</h3>
          <p class="text-[#66e3c4] mt-2">Expert</p>
        </div>
        <div class="bg-[#0e0e38] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <img src="/icons/next.svg" alt="Next.js" class="w-12 h-12 mx-auto mb-4" />
          <h3 class="text-white text-xl font-semibold">Next.js</h3>
          <p class="text-[#66e3c4] mt-2">Expert</p>
        </div>
        {/* <!-- Repeat for other skills --> */}
      </div>
    </div>
  </section>
  
  );
};

export default Skills;
