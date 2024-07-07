import React from 'react';


const projectData = [
    {
        image: '/path/to/hotel.jpg',
        title: 'Hotel Booking App',
        websiteLink: 'https://himelhotel851.netlify.app/',
        githubLink: 'https://github.com/Himel851/Hotel-Booking-App',
    },
    {
        image: '/path/to/movie.jpg',
        title: 'Movie App',
        websiteLink: 'https://movieapp851.netlify.app/',
        githubLink: 'https://github.com/Himel851/Movie-App',
    },
    {
        image: '/path/to/ecom.jpg',
        title: 'E-Commerce Website',
        websiteLink: 'https://himel-shopping-cart851.netlify.app/',
        githubLink: 'https://github.com/Himel851/E-Commerece-Shopping-Cart',
    },
    {
        image: '/path/to/youtube.jpg',
        title: 'YouTube Clone Application',
        websiteLink: 'https://himelyoutube851.netlify.app/',
        githubLink: 'https://github.com/Himel851/Youtube-Clone-Application',
    },
    {
        image: '/path/to/diu.jpg',
        title: 'DIU',
        websiteLink: 'https://himel851.github.io/Daffodil-International-University/',
        githubLink: 'https://github.com/Himel851/Daffodil-International-University',
    },
    {
        image: '/path/to/edu.jpg',
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

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${hotel})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Hotel Booking App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://himelhotel851.netlify.app/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Website
                                    </button>
                                </a>
                                <a href='https://github.com/Himel851/Hotel-Booking-App' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${movie})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Movie App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://movieapp851.netlify.app/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Website
                                    </button>
                                </a>
                                <a href='https://github.com/Himel851/Movie-App' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${ecom})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                E-Commerce Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://himel-shopping-cart851.netlify.app/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Website
                                    </button>
                                </a>
                                <a href='https://github.com/Himel851/E-Commerece-Shopping-Cart' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${youtube})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                YouTube Clone Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://himelyoutube851.netlify.app/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Website
                                    </button>
                                </a>
                                <a href='https://github.com/Himel851/Youtube-Clone-Application' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${diu})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                DIU
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://himel851.github.io/Daffodil-International-University/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Website
                                    </button>
                                </a>
                                <a href='https://github.com/Himel851/Daffodil-International-University' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${edu})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Online Education
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://himel851.github.io/Online-Education/' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Website
                                    </button>
                                </a>
                                <a href='https://github.com/Himel851/Online-Education' target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Projects