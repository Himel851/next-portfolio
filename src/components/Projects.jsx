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
            "A Fully Responsive Random Quote generating website project given by Free Code Camp while completing Front-End Libraries Certifications built using React.JS , Bootstrap CSS and HTML.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "quoteapi",
                color: "orange-text-gradient",
            },
        ],
        image: "/images/deshify.png",
        netlify_link: "https://randomquotegeneratorbyom.netlify.app/",
    },
    {
        name: "Admin Dashboard UI",
        description:
            "React Admin Dashboard is a stunning web application that has a beautiful User Interface and has been built using advanced JavaScript concepts, React, and Tailwind CSS which has different graphs, stats and themes.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Syncfusion UI",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: "/projectimg/dashboard.webp",
        source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
        netlify_link: "https://reactadmindashboardbyom.netlify.app/",
    },
    {
        name: "HooBank",
        description:
            "A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: "/projectimg/hoobank.webp",
        source_code_link: "https://github.com/omunite215/hoobank",
        netlify_link: "https://hoobankbyom.netlify.app/",
    },
    {
        name: "Provid A Youtube Clone",
        description:
            "Provid is a YouTube clone project built with React, Material UI, and Tailwind CSS. The platform has been designed with a stunning dark mode that enhances the viewing experience. The user interface is intuitive and easy to navigate, ensuring that users can easily find the content they're looking for.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "materialui",
                color: "orange-text-gradient",
            },
            {
                name: "rapidapi",
                color: "blue-text-gradient",
            },
        ],
        image: "/projectimg/provid.webp",
        source_code_link: "https://github.com/omunite215/Provid-A-YouTube-Clone",
        netlify_link: "https://providbyom.netlify.app/",
    },
    {
        name: "A 3D Developer Portfolio",
        description:
            "A responsive 3D Portfolio website which is made using Three.js a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "threejs",
                color: "orange-text-gradient",
            },
            {
                name: "emailjs",
                color: "pink-text-gradient",
            },
        ],
        image: "/projectimg/portfoliosample.webp",
        source_code_link: "https://github.com/omunite215/portfolio",
        netlify_link: "https://portfoliobyompatel.netlify.app/",
    },
];


const Projects = () => {
    return (
        <div className='base-container  text-gray-300 mt-20 '>
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