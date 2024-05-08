"use client"
import { Category } from "@/DataTypes/Category";
import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects as projectsData } from "@/data/projects";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadingUp } from "@/animations/fadings";
import { stagger } from "@/animations/stagger";
import { routerAnimation } from "@/animations/routerAnimation";


const Projects = () => {
    const [projects,setProjects] = useState(projectsData)
    const [active,setActive] = useState("All")
    const [showDetail,setShowDetail] = useState<number | null>(null)

    const handleFilterCategory = (category:Category | 'All') =>{
        if(category === 'All'){
            setProjects(projectsData)
            setActive(category)
            return

        }
       const filteredProjects =  projectsData.filter(project => project.category.includes(category))
       setProjects(filteredProjects)
       setActive(category)

    }
    return (
        <motion.div className="px-5 py-2 overflow-y-scroll " style={{ height:'65vh' }} variants={routerAnimation} initial="initial" animate="animate" exit="exit">
            <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} setShowDetail={setShowDetail}/>
            <motion.div className="grid grid-cols-12 gap-4 my-3 relative" variants={stagger} initial="initial" animate="animate">
                {
                    projects.map(project =>(
                        <motion.div className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg" variants={fadingUp} key={project.name} >
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />

                        </motion.div>
                    ))

                }
            </motion.div>

        </motion.div>
    )
}
export default Projects;