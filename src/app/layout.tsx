import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Kaushan_Script } from 'next/font/google'
import { Single_Day } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "./theme-provider";
import { AnimatePresence } from "framer-motion";
import Template from "./template";
 const kaushan = Kaushan_Script({
  weight:"400",
  preload: false,
  display:"swap",
  variable:"--kaushan-reqular"


});
const single_day = Single_Day({
  weight:"400",
  display:"swap",
  variable:"--single-day-reqular"


});
const dark = 'dark'

const inter = Inter({ subsets: ["latin"] });

 export const metadata: Metadata = {
  title: "Moayed Eisa",
  description: "Generated by Moayed Eisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kaushan.variable} >
      
     
      <body className="bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white" >
        <ThemeProvider attribute="class">
        <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
          <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark" >
            <Sidebar/>
            </div>
          <div className="flex flex-col col-span-12 bg-white rounded-2xl  lg:col-span-9 overflow-hidden dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark " >
            <Navbar/>
            <Template>{children}</Template>
          </div>
         
        </div>
        </ThemeProvider>
        </body>

      
       
        
    </html>
  );
}

