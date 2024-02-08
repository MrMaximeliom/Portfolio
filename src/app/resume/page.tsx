"use client"

import Bar from "@/components/Bar";
import skills from "@/data/skills";
import tools from "@/data/tools";
import {motion} from "framer-motion"
import { fadingUp } from "@/animations/fadings";
import { routerAnimation } from "@/animations/routerAnimation";
const resume = () => {

    return (
        <>
    
        <motion.div className="px-6 py-2" variants={routerAnimation} initial="initial" animate="animate">


<div className="grid md:grid-cols-2 gap-6">
    <motion.div variants={fadingUp} initial="initial" animate="animate">
        <h5 className="my-3 text-2xl font-bold">Education</h5>
        <div>
            <h5 className="my-2 text-xl font-bold">
                Al Neelain University
                </h5>
                <p className="font-semibold">Computer Science & Information Technology (2014-2020)</p>
                <p className="my-3">{`I have the bachelor's degree of Information Technology from 
                    Computer Science & Information Technology`}
                </p>
         
        </div>
    </motion.div>
    <motion.div variants={fadingUp} initial="initial" animate="animate">

        <h5 className="my-3 text-2xl font-bold">Experience</h5>
        <div>
            <h5 className="my-2 text-xl font-bold">
                Senior Software Engineer
                </h5>
                <p className="font-semibold">{`Sudan's Ministry of Higher Education - Information Center (oct 2019 - oct 2020)`}</p>
                <p className="my-3">Developing solutions for the center</p>
         
        </div>
    </motion.div>
</div>
{/* languages and tools */}
<div className="grid gap-6 md:grid-cols-2">
<div>
    <h5 className="my-3 text-2xl font-bold">
        Languages & Frameworks
    </h5>
    <div className="my-2">
        {
        skills.map(
            skill => 
            <Bar data={skill} key={skill.name} />
        )
        }

    </div>
</div>
<div>
    <h5 className="my-3 text-2xl font-bold">
        Tools & Software
    </h5>
    <div className="my-2">
        {
        tools.map(
            tool => 
            <Bar data={tool} key={tool.name} />
        )
        }

    </div>
</div>
</div>
        </motion.div>
        </>
    )
}
export default resume;