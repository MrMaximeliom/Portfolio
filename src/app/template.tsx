"use client"
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { routerAnimation } from "@/animations/routerAnimation";
type Props = {
  children: React.ReactNode
}
// const Layout = ({ children }: Props) => {
const Template = ({ children }: Props) => {
    // return <div>{children}</div>
    const key = usePathname()

    return (
        <AnimatePresence mode="wait">

         <div
        key={key}
     
        // transition={{ type: "linear" }}
       
      >
        {children}
      </div>
    </AnimatePresence>
    )
}
export default Template;
  