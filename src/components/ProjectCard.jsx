import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { fadeIn } from './framer/Variant';


const ProjectCard = ({ index, project }) => {
    const { name, description, tags, image, source_code_link, netlify_link } = project
    return (
        <motion.div whileHover={{ scale: 1.03 }}>
            <div
                className="bg-[#151030] p-5 rounded-2xl  w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        width={1000}
                        height={1000}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        {source_code_link && <Link
                            href={source_code_link}
                            target="_blank"
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src="/images/github.webp"
                                width={24}
                                height={24}
                                alt="source-code"
                                className="object-contain"
                            />
                        </Link>}

                        <Link
                            href={netlify_link}
                            target="_blank"
                            className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src="/images/netlify.webp"
                                width={24}
                                height={24}
                                alt="source code"
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[20px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
