import Heading from "@/components/heading/heading";
import React from "react";

const Blogs = () => {
  return (
    <section class="py-16">
      <div class="container mx-auto">
       <Heading title={'Blogs & Insights'}/>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Blog Card --> */}
          <div class="bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600">
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
