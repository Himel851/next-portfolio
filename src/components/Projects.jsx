import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from './framer/Variant';
import ProjectCard from './ProjectCard';


const projects = [
    {
        name: "Deshify - Ecommerce App",
        description:
            "Deshify is an E-Commerce app with secure authentication, product listings, cart, checkout, and a blog.",
        tags: [
            {
                name: "next.js",
            },
            {
                name: "react-bootstrap",
            },
            {
                name: "context-api",
            },
            {
                name: "google-chapcha",
            },
            {
                name: "toastify",
            },
            {
                name: "slick-carousel",
            },
        ],
        image: "/images/deshify.png",
        netlify_link: "https://deshify.com/",
    },
    {
        name: "Kendrobindu",
        description:
            "Kendrobindu is a book e-commerce site with a user-friendly interface, secure authentication, and a blog.",
        tags: [
            {
                name: "next.js",
            },
            {
                name: "tailwind css",
            },
            {
                name: "redux toolkit",
            },
            {
                name: "react-pdf",
            },
            {
                name: "toastify",
            },
            {
                name: "swiper js",
            },
        ],
        image: "/images/kendrobindu.png",
        netlify_link: "https://kendrobindu.com.bd/",
    },
    {
        name: "Travel World",
        description:
            "Travel World features customizable categories, advanced filters, detailed hotel pages, and integrated travel information and navigation.",
        tags: [
            { name: "next.js" },
            { name: "tailwind css" },
            { name: "swiper.js" },
            { name: "react-slick-slider" },

        ],
        image: "/images/travel.png",
        netlify_link: "https://himel851-travel-world.netlify.app/",
    },
    {
        name: "Photo Editing Service Website",
        description:
            "Developed a photo editing site with FAQs, service details, testimonials, and a portfolio gallery.",
        tags: [
            { name: "next.js" },
            { name: "tailwind css" },
            { name: "react-slick" },
            { name: "react-compare-slider" },
            { name: "luicide-react" },
        ],
        image: "/images/black-fox.png",
        netlify_link: "https://himel851-black-fox.netlify.app/",
    },
];


const Projects = () => {
    return (
        <div id="project" className='base-container  text-gray-300 mt-20 pb-52 '>
            <div className=' flex flex-col justify-center '>
                <motion.div variants={textVariant()}>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Project</p>
                    <p className='py-6'> Check out some of my recent work</p>
                </motion.div>


                <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <ProjectCard index={index} project={project} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
       
    );
};

export default Projects