import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from './framer/Variant';
import ProjectCard from './ProjectCard';


const projectData = [
    {
        image: './images/deshify.png',
        title: 'Deshify - Ecommerce App',
        websiteLink: 'https://deshify.com/',
    },
    {
        image: './images/hotel.jpg',
        title: 'Hotel Booking App',
        websiteLink: 'https://himelhotel851.netlify.app/',
        githubLink: 'https://github.com/Himel851/Hotel-Booking-App',
    },
    {
        image: './images/movie.jpg',
        title: 'Movie App',
        websiteLink: 'https://movieapp851.netlify.app/',
        githubLink: 'https://github.com/Himel851/Movie-App',
    },
    {
        image: './images/ecom.png',
        title: 'E-Commerce Website',
        websiteLink: 'https://himel-shopping-cart851.netlify.app/',
        githubLink: 'https://github.com/Himel851/E-Commerece-Shopping-Cart',
    },
    {
        image: './images/youtube.PNG',
        title: 'YouTube Clone Application',
        websiteLink: 'https://himelyoutube851.netlify.app/',
        githubLink: 'https://github.com/Himel851/Youtube-Clone-Application',
    },
    {
        image: './images/diu.jpeg',
        title: 'DIU',
        websiteLink: 'https://himel851.github.io/Daffodil-International-University/',
        githubLink: 'https://github.com/Himel851/Daffodil-International-University',
    },
    {
        image: './images/edu.jpeg',
        title: 'Online Education',
        websiteLink: 'https://himel851.github.io/Online-Education/',
        githubLink: 'https://github.com/Himel851/Online-Education',
    },
];

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
        netlify_link: "https://randomquotegeneratorbyom.netlify.app/",
    },
    {
        name: "Travel World",
        description:
            "Travel World features customizable categories, advanced filters, detailed hotel pages, and integrated travel information and navigation.",
            tags: [
                {name: "next.js"},
                {name: "tailwind css"},
                {name: "swiper.js"},
                {name: "react-slick-slider"},
    
            ],
        image: "/images/travel.png",
        netlify_link: "https://himel851-travel-world.netlify.app/",
    },
    {
        name: "Photo Editing Service Website",
        description:
            "Developed a photo editing site with FAQs, service details, testimonials, and a portfolio gallery.",
        tags: [
            {name: "next.js"},
            {name: "tailwind css"},
            {name: "react-slick"},
            {name: "react-compare-slider"},
            {name: "luicide-react"},
        ],
        image: "/images/black-fox.png",
        netlify_link: "https://hoobankbyom.netlify.app/",
    },
];


const Projects = () => {
    return (
        <div className='base-container  text-gray-300 mt-20 base-padding '>
            <div className=' flex flex-col justify-center '>
                <motion.div variants={textVariant()}>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FC9A03]'>Project</p>
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
        // <div name='project' className='w-full  text-gray-300 bg-[#050816]'>
        //     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        //         <div className='pb-8'>
        //             <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FC9A03]'>
        //                 Project
        //             </p>
        //             <p className='py-6'> Check out some of my recent work</p>
        //         </div>

        //         {/* Container */}
        //         <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        //             {projectData?.map((project, index) => (
        //                 <div
        //                     key={index}
        //                     style={{ backgroundImage: `url(${project?.image})` }}
        //                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        //                 >
        //                     <div className='opacity-0 group-hover:opacity-100'>
        //                         <span className='text-2xl font-bold text-white tracking-wider'>
        //                             {project?.title}
        //                         </span>
        //                         <div className='pt-8 text-center'>
        //                             <Link href={project?.websiteLink} target="_blank" rel="noopener noreferrer">
        //                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Website
        //                                 </button>
        //                             </Link>
        //                             {project?.githubLink && <Link href={project?.githubLink} target="_blank" rel="noopener noreferrer">
        //                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        //                                     Github
        //                                 </button>
        //                             </Link>}

        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Projects