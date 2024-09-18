import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div id="home" className="py-20 md:py-56 bg-[#050816] base-padding">
      <div className="base-container">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 ">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="text-white flex flex-col items-center md:items-start">
              <p className="text-lg md:text-xl">WELCOME TO MY WORLD</p>
              <h1 className="text-4xl lg:text-6xl font-bold mt-4">
                Hi, I{"'"}m <span className="text-pink-600">Nazmul Hasan Himel</span>
              </h1>
              <h2 className="text-xl lg:text-3xl mt-2">a Front End Developer.</h2>
              <p className="text-md lg:text-xl mt-4 px-2 md:px-0">
                Passionate frontend developer with expertise in modern web technologies, creating responsive, dynamic, and user-friendly web applications. Dedicated to continuous learning and delivering high-quality software solutions.
              </p>
              <div className="flex space-x-4 mt-8">
                <Link target="_blank" href="https://www.linkedin.com/in/nazmulhimel96/" className="bg-gray-800 p-3 rounded-full">
                  <Image src="/images/linkedin.webp" alt="linkedin" width={30} height={30} />
                </Link>
                <Link target="_blank" href="https://github.com/Himel851" className="bg-gray-800 p-3 rounded-full">
                  <Image src="/images/github.webp" alt="linkedin" width={30} height={30} />
                </Link>
                <Link href="mailto:himel.cse96@gmail.com" className="bg-gray-800 p-3 rounded-full">
                  <Image src="/images/gmail.jpg" alt="gmail" width={30} height={30} className="rounded-full" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/himel.png"
              alt="Profile Picture"
              height={0}
              width={0}
              sizes="100"
              className="w-[12rem] md:w-[18rem] h-full object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>


    // <div id="home"  className="pt-40 bg-[#050816] base-padding">
    //   <div className="base-container">
    //     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    //       <div className="lg:col-span-5 flex flex-col justify-center items-center ">
    //         <Image
    //           src="/images/himel.png"
    //           alt="Picture of the author"
    //           width={352}
    //           height={352}
    //           sizes="100"
    //           className="w-[12rem] h-full object-cover rounded-md shadow-lg"
    //         />
    //         <div className="text-center lg:text-left mt-4">
    //           <h3 className="text-3xl font-bold text-[#babdc7]">Nazmul Hasan Himel</h3>
    //           <p className="text-lg leading-6 text-center font-bold text-[#babdc7]">Uttara, Dhaka</p>
    //           <p className="text-lg leading-6 text-center font-bold text-[#babdc7]">01687454958</p>
    //         </div>
    //       </div>
    //       <div className="lg:col-span-7 text-center lg:text-left">
    //         <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ffffff]">
    //           I'm a Front-End <br className="hidden lg:block" /> Developer.
    //         </h2>
    //         <p className="text-[#8892b0] py-4 max-w-[700px] mx-auto lg:mx-0">
    //           I’m a front-end developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
    //         </p>
    //         <div className="mt-6 flex justify-center lg:justify-start">
    //           <Link href="/project">
    //             <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition duration-300 ease-in-out">
    //               View Work
    //               <span className="group-hover:rotate-90 duration-300 ml-3">
    //                 <HiArrowNarrowRight />
    //               </span>
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeroSection;
