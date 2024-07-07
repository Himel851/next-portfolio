import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const menuItems = [
        { name: "Home", href: "home" },
        { name: "About", href: "about" },
        { name: "Skills", href: "skills" },
        { name: "Project", href: "project" },
        { name: "Contact", href: "contact" },
    ];

    const socialIcons = [
        {
            href: "https://www.linkedin.com/in/nazmulhimel96/",
            bg: "bg-blue-600",
            icon: <FaLinkedin size={30} />,
            label: "Linkedin",
        },
        {
            href: "https://github.com/Himel851",
            bg: "bg-[#333333]",
            icon: <FaGithub size={30} />,
            label: "Github",
        },
        {
            href: "https://drive.google.com/file/d/1_EEl-IJTNr8Az29TibjFwbI9K4OFxIPU/view?usp=sharing",
            bg: "bg-[#6f39eb]",
            icon: <BsFillPersonLinesFill size={30} />,
            label: "Resume",
        },
    ];

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div></div>

            {/* Menu */}
            <ul className="hidden md:flex">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href}
                            smooth={true}
                            duration={500}
                            className="hover:border-b-4 border-[#FC9A03]"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Menu Icon */}
            <div onClick={handleClick} className="md:hidden z-[99999]">
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
                {menuItems.map((item, index) => (
                    <li key={index} className="py-6 text-4xl">
                        <Link onClick={handleClick} href={item.href} smooth={true} duration={500}>
                            {item.name}
                        </Link>
                    </li>
                ))}
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
                    {socialIcons.map((icon, index) => (
                        <li
                            key={index}
                            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${icon.bg}`}
                        >
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href={icon.href}
                                target="_blank"
                            >
                                {icon.label} {icon.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
