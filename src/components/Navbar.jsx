import Link from 'next/link';
import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div></div>

            {/* Menu */}
            <ul className="hidden md:flex ">
                <li>
                    <Link
                        href="home"
                        smooth={true}
                        duration={500}
                        className="hover:border-b-4 border-[#FC9A03]"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="about"
                        smooth={true}
                        duration={500}
                        className="hover:border-b-4 border-[#FC9A03]"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="skills"
                        smooth={true}
                        duration={500}
                        className="hover:border-b-4 border-[#FC9A03]"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        href="project"
                        smooth={true}
                        duration={500}
                        className="hover:border-b-4 border-[#FC9A03]"
                    >
                        Project
                    </Link>
                </li>
                <li>
                    <Link
                        href="contact"
                        smooth={true}
                        duration={500}
                        className="hover:border-b-4 border-[#FC9A03]"
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Menu Icon */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile View */}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} href="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} href="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} href="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} href="project" smooth={true} duration={500}>
                        Project
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleClick} href="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <button className="text-white group border-2 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600">
                        <a
                            href="https://drive.google.com/file/d/1_EEl-IJTNr8Az29TibjFwbI9K4OFxIPU/view?usp=sharing"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </button>
                </li>
            </ul>

            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/nazmulhimel96/"
                            target="_blank"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/Himel851"
                            target="_blank"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6f39eb]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://drive.google.com/file/d/1_EEl-IJTNr8Az29TibjFwbI9K4OFxIPU/view?usp=sharing"
                            target="_blank"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
