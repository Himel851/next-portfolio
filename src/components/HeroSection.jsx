import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div name="home" className="pt-40 bg-[#050816] base-padding">
      {/* Container */}

      <div className="base-container ">
        <div className="grid grid-cols-2 items-center">
        <div className="flex flex-col">
            <Image
              src="/images/himel.png"
              alt="Picture of the author"
              width={0}
              height={0}
              sizes="100"
              className=" w-[22rem] h-full object-contain rounded-md"
            />
            <h3 className="mt-4 text-3xl font-bold text-[#babdc7]">
              Nazmul Hasan Himel
            </h3>
            <p className="mt-1 text-xl font-bold text-[#8892b0]">
              01687454958
            </p>
          </div>
          <div>            
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
              I{"'"}m a Front-End Developer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a front-end developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive full-stack web
              applications.
            </p>
            <div>
              <Link href="project" smooth={true} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
