import Heading from "@/components/heading/heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    // <section className="py-16">
    //   <div className="container mx-auto px-4 w-full flex flex-col gap-10">
    //     <Heading title={"Blogs And Insights"} />
    //     <div className="flex flex-col justify-start gap-10 relative w-full">
    //       {/* Blog Image */}
    //       <div className="relative left-0 top-0 w-full lg:w-4/5 rounded-lg overflow-hidden shadow-lg">
    //         <Image
    //           src="/assets/blogs/NextVsReact.jpg" // Replace with your image path
    //           alt="Blog Image"
    //           className="w-full h-full object-cover"
    //           width={800}
    //           height={500}
    //         />
    //         <div className="absolute top-4 left-4 bg-teal-400 text-white text-sm px-3 py-1 rounded-md font-medium shadow-md">
    //           10 April, 2024
    //         </div>
    //       </div>

    //       {/* Blog Content */}
    //       <div className="w-full rounded-xl flex flex-col gap-4 overflow-hidden shadow-lg p-4 border bg-[#8e8e8e0f] border-[#e2e8ff1a] box-shadow-header std-backdrop-blur cursor-pointer group transition-transform transform lg:w-3/5 absolute bottom-0 right-0">
    //         <h3 className="text-xl md:text-2xl font-bold mb-4">
    //           Alonso Kelina Falao Asiano Pero
    //         </h3>
    //         <p className="text-gray-600 mb-6">
    //           With over a decade experience, we’ve established ourselves as one
    //           of the pioneering agencies in the region. We understand the
    //           importance of approaching each work integrally and believe in the
    //           power of...
    //         </p>
    //         <button className="bg-teal-400 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-600 transition">
    //           Read more
    //         </button>
    //       </div>
    //       {/* Pagination */}
    //       <div className="flex space-x-4 mt-8">
    //         <button className="bg-teal-400 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M15.75 19.5L8.25 12l7.5-7.5"
    //             />
    //           </svg>
    //         </button>
    //         <button className="bg-teal-400 text-white p-2 rounded-full shadow-md hover:bg-teal-600 transition">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth={1.5}
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M8.25 4.5l7.5 7.5-7.5 7.5"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="container flex flex-col gap-16 mx-auto" id="blogs">
      {/* <!-- Section Title --> */}
      <Heading title={"Blogs And Insights"} />

      {/* <!-- Blog Content --> */}
      <div className="relative">
        <div className="blog-card bg-gradient-to-br from-[#8e8e8e0f] via-gray-900 to-gray-800 box-shadow-header std-backdrop-blur rounded-lg shadow-lg overflow-hidden">
          {/* <!-- Blog Image --> */}
          <div className="border-b-2 border-teal-500">
            <Image
              src="/assets/blogs/NextVsReact.jpg"
              alt="Blog Post"
              width={600}
              height={300}
              quality={100}
              className="object-cover w-full h-60"
            />
          </div>
          {/* <!-- Blog Details --> */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Next.js vs. React.js: Which One Should You Choose for Your
              Project?
            </h3>
            <p className="text-gray-400 mb-6">
              When it comes to building powerful and dynamic web applications,
              developers often find themselves choosing between React.js and
              Next.js. Both are exceptional, but each has its own strengths,
              making them suited to different use cases.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>By Zain Saleem</span>
              <span>Nov 11, 2024</span>
            </div>
            <Link
              href="https://medium.com/@zainsaleem456/next-js-vs-react-js-which-one-should-you-choose-for-your-project-95cba7d69065"
              className="inline-block mt-4 px-6 py-2 bg-teal-500 text-white font-medium rounded-lg hover:shadow-lg transition"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* <!-- Navigation Arrows --> */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 border-2 border-teal-500 hover:bg-teal-500 transition-all ease-in-out duration-150 rounded-full p-3 text-teal-500 hover:text-white font-bold shadow-2xl">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border-2 border-teal-500 hover:bg-teal-500 transition-all ease-in-out duration-150 rounded-full p-3 text-teal-500 hover:text-white font-bold shadow-2xl">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Blogs;
