import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ menuItems }) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [activeSection, setActiveSection] = useState(menuItems[0].href);

    const handleSetActive = (section) => {
        setActiveSection(section);
    };



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
            href: "https://drive.google.com/file/d/1xrgaGEAsM6Mfl8Tpl4Bm1mA7ry_TNZFe/view?usp=drive_linkhttps://drive.google.com/file/d/1_EEl-IJTNr8Az29TibjFwbI9K4OFxIPU/view?usp=sharing",
            bg: "bg-[#6f39eb]",
            icon: <BsFillPersonLinesFill size={30} />,
            label: "Resume",
        },
    ];

    return (
        <div className="fixed  w-full h-[80px] flex justify-center items-center px-4 bg-[#050816] z-50 border-b-[1px] border-[#7f7d7d7a] text-gray-300">
            <div></div>

            {/* Menu */}
            <ul className="flex">
                {menuItems.map((item, index) => (
                    <li
                        key={index}

                    >
                        <ScrollLink
                            to={item.href}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className={`cursor-pointer ${activeSection === item.href ? "border-b-4 border-pink-600" : ""
                                }`}
                            activeClass="active"
                            onSetActive={() => handleSetActive(item.href)}
                        >
                            {item.name}
                        </ScrollLink>
                    </li>
                ))}

                {/* add resume button  */}
                <li>
                    <Link
                        href="https://drive.google.com/file/d/1xrgaGEAsM6Mfl8Tpl4Bm1mA7ry_TNZFe/view?usp=drive_link"
                        target="_blank"
                        className="group border-2 border-pink-600 px-6 py-3 my-2 items-center hover:bg-pink-600 hover:border-pink-600 rounded-md"
                    >
                        Resume
                    </Link>
                </li>
            </ul>

            {/* Menu Icon */}
            {/* <div onClick={handleClick} className="md:hidden z-[99999]">
                {!nav ? <FaBars /> : <FaTimes />}
            </div> */}

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
                            <Link
                                className="flex justify-between items-center w-full text-gray-300"
                                href={icon.href}
                                target="_blank"
                            >
                                {icon.label} {icon.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
