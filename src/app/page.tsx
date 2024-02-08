"use client"
import { GetStaticPropsContext } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import {motion} from "framer-motion"
import { fadingUp } from "@/animations/fadings";
import { stagger } from "@/animations/stagger";
import { routerAnimation } from "@/animations/routerAnimation";
const index = () => {
  //const services = getServices()


  return (
    <motion.div className="flex flex-col px-6 pt-1 flex-grow"    initial="initial"
    animate="animate"
    exit="exit"
    variants={routerAnimation} >
      <h5 className="my-3 font-medium">
      I excel as a Devoted Backend Developer, leveraging my extensive 4+ years of expertise to construct powerful,
      expandable APIs and web services employing the cutting-edge technologies of .Net Core and C#. My
      proficiency in REST API development and comprehensive grasp of front-end technologies (HTML, CSS,
      JavaScript) empower me to tackle full-stack projects with an all-encompassing viewpoint. I boast a solid
      reputation for crafting scalable, pristine, sustainable, resilient, and fortified backend architectures.
      Furthermore, I possess adeptness in database modeling and optimization, employing PostgreSQL and MySQL
      to their utmost potential.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow" style={{ marginLeft:'-1.5rem',marginRight:'-1.5rem' }}>
        <h6 className="my-3 font-bold text-xl tracking-wide">
          What I Offer
        </h6>
        <motion.div className="grid lg:grid-cols-2 gap-6" variants={stagger} initial="initial" animate="animate">
          {services.map(service => (
            <motion.div className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg" key={service.id} variants={fadingUp} >
                <ServiceCard service={service} key={service.id} />
                </motion.div>
              ))}

        </motion.div>
      </div>
    </motion.div>
  )
}
export default index;

// async function getServices() {
//   const res = await fetch('http://localhost:3000/api/services')
//   return res.json()

// }