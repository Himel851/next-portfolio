import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Skill from "@/components/Skill/Skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div>
          <HeroSection />
          <Skill />
          {/* https://github.com/Infvyr/nextjs-portfolio
          https://github.com/Infvyr/Portfolio
          https://github.com/iamshiv007/NextJS-Portfolio
          https://github.com/iamhiman/personal-webpage-v2
          https://github.com/said7388/developer-portfolio-nextjs
          https://github.com/omunite215/Project_3DPortfolio
          https://github.com/fazle-rabbi-dev/fazle-rabbi-dev.vercel.app
          https://github.com/bbyc4kes/portfolio */}
      </div>
  );
}
