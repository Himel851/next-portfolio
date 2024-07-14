import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const menuItems = [
        { name: "Home", href: "home" },
        // { name: "About", href: "about" },
        { name: "Skills", href: "skills" },
        { name: "Project", href: "project" },
    ];
    return (
        <div>
            <Navbar menuItems={menuItems} />
            <HeroSection />
            <Skill />
            <Projects />
        </div>
    );
}
