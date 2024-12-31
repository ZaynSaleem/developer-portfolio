import React from "react";

const Blogs = () => {
  return (
    <section class="py-16">
      <div class="container mx-auto">
        <h2 class="text-4xl text-[#66e3c4] font-bold text-center mb-12 uppercase tracking-widest">
          Blogs & Insights
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Blog Card --> */}
          <div class="relative group bg-gradient-to-b from-[#0e0e38] to-[#0b0b29] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform duration-300">
            <img
              src="/blog1.jpg"
              alt="Blog 1"
              class="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2">
                How to Use Next.js
              </h3>
              <p class="text-gray-400 text-sm mb-4">
                Learn the fundamentals of building modern web applications with
                Next.js.
              </p>
              <button class="bg-[#66e3c4] text-[#05051e] px-4 py-2 rounded-full hover:bg-[#50b899]">
                Read More
              </button>
            </div>
          </div>
          {/* <!-- Repeat Blog Cards --> */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
