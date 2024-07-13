import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Skill = () => {
    const skills = {
        Frontend: [
            {
                name: 'Next.js',
                src: '/images/nextjs.png'
            },
            {
                name: 'Redux',
                src: '/images/redux.png'
            },
            {
                name: 'React',
                src: '/images/react.png'
            },
            {
                name: 'React Router',
                src: '/images/react-router.png'
            },
            
            {
                name: 'Tailwind CSS',
                src: '/images/TAILWIND.png'
            },
            {
                name: 'Node.js',
                src: '/images/nodejs.png'
            },
            {
                name: 'Sass (SCSS)',
                src: '/images/sass.png'
            },
            {
                name: 'React Bootstrap',
                src: '/images/react-bootstrap.jpg'
            },
            {
                name: 'Bootstrap',
                src: '/images/bootstrap.png'
            },
            {
                name: 'CSS',
                src: '/images/css.png'
            },
            {
                name: 'Html',
                src: '/images/html.png'
            }
        ],
        Languages: [
            {
                name: 'C',
                src: '/images/c.png'
            },
            {
                name: 'C++',
                src: '/images/c++.png'
            },
            {
                name: 'JavaScript',
                src: '/images/javascript.png'
            },
            {
                name: 'TypeScript',
                src: '/images/ts.png'
            }
        ],
       
    };


    return (
        <div name="skills" className="w-full h-fit bg-[#050816] text-gray-300 p-8">
            <div className="base-container  flex flex-col justify-center ">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#FC9A03]">Skills</p>
                    <p className="mt-4">These are the technologies I've worked with</p>
                </div>
                {Object.keys(skills).map((section) => (
                    <div key={section} className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">{section}</h2>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                            {skills[section].map((skill, index) => (
                                <div key={index} className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 z-10 p-4 rounded-md bg-[#151030]">
                                    <img className="w-10 lg:w-20 mx-auto" src={skill.src} alt={skill.name} />
                                    <p className="my-4 text-center">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
