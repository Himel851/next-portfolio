import Link from 'next/link';
import React from 'react';


const projectData = [
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


const Projects = () => {
    return (
        <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FC9A03]'>
                        Project
                    </p>
                    <p className='py-6'> Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {projectData?.map((project, index) => (
                        <div
                        key={index}
                            style={{ backgroundImage: `url(${project?.image})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        >
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    {project?.title}
                                </span>
                                <div className='pt-8 text-center'>
                                    <Link href={project?.websiteLink} target="_blank" rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Website
                                        </button>
                                    </Link>
                                    <Link href={project?.githubLink} target="_blank" rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                            Github
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects