import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div name="home" className="pt-40 bg-[#050816] base-padding">
      {/* Container */}
      <div className="base-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <Image
              src="/images/himel.png"
              alt="Picture of the author"
              width={352}
              height={352}
              sizes="100"
              className="w-[22rem] h-[22rem] object-cover rounded-md shadow-lg"
            />
            <div className="text-center lg:text-left mt-4">
              <h3 className="text-3xl font-bold text-[#babdc7]">Nazmul Hasan Himel</h3>
              <p className="text-xl font-bold text-[#8892b0]">Uttara, Dhaka</p>
              <p className="text-xl font-bold text-[#8892b0]">01687454958</p>
            </div>
          </div>
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ffffff]">
              I'm a Front-End <br className="hidden lg:block" /> Developer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px] mx-auto lg:mx-0">
              I’m a front-end developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Link href="/project">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition duration-300 ease-in-out">
                  View Work
                  <span className="group-hover:rotate-90 duration-300 ml-3">
                    <HiArrowNarrowRight />
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
