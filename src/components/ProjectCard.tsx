"use client";
import { IProject } from "@/interfaces/IProject";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { stagger } from "@/animations/stagger";
import { fadingUp } from "@/animations/fadings";
const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      {/* <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetails(true)}/> */}
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100 p-2 md:p-10 rounded-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/* <img src={image_path} alt={name}  /> */}
            <motion.div
              variants={fadingUp}
              className="border-4 dark:border-gray-100 border-dark-100 "
            >
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>

            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadingUp}
            >
              <a
                href={github_url}
                className="flex items-center py-2 space-x-3 bg-gray-200 dark:bg-dark-200 px-4 text-lg "
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center py-2 space-x-3 bg-gray-200 dark:bg-dark-200 px-4 text-lg "
                target="_blank"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadingUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadingUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadingUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider "
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};
export default ProjectCard;
