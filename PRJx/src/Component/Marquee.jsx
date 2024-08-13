import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return (

        <div data-scroll  data-scroll-section  data-scroll-speed=".1" className="main py-10  rounded-tl-xl  bg-[#004D43]">
           <div className="text pb-10 border-t-2 border-b-2 font-mono  uppercase font-semibold overflow-hidden flex whitespace-nowrap border-zinc-400">
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className=' pr-5 text-8xl  -leading-[2vw]'>we are ochi</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='pr-5 text-8xl  -leading-[2vw]'>we are ochi</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='pr-5 text-8xl  -leading-[2vw]'>we are ochi</motion.h1>
         
           </div>
        </div>
    )
}

export default Marquee