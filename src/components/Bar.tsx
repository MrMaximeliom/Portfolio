"use client"
import ISkill from "@/interfaces/ISkill";
import { FunctionComponent } from "react";
import { motion } from "framer-motion"
const Bar:FunctionComponent<{
    data:ISkill
}> = ({data:{Icon,name,level}}) =>{

    const bar_width = `${level}%`
    const variants = {
        initial:{
            width:0
        },
        animate:{
            width:level,
            transition:{
                duration:0.4,
                type:"spring",
                damping:10,
                stiffness:100
            }
        }
    }
    return (
        <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full">
   {/* <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
   style={{width: level}} > */}
       <motion.div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
   style={{width: level}} variants={variants} initial="initial" animate="animate">
   
   
   
    <Icon className="mr-3"/>
    {name}
        
    
   </motion.div>
        </div>
    )

}
export default Bar;