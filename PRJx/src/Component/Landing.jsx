import { motion } from 'framer-motion';
import { Linear } from 'gsap';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
    
    return (
        <div data-scroll data-scroll-speed="-0.8" className="w-full   h-screen bg-zinc-800 pt-2">
            <div className="txt mt-32 px-20">
                <div className="masker font-serif">
                    {["we create", "eye opening", "presentation"].map((item, index) => {
                        return <div className="masker">
                            <div className="w-fit flex">
                                {index === 1 && (
                                    <motion.div initial={{width: 0}}
                                     animate={{width: '9vw'}}
                                     transition={{ease:"linear",duration: 1}}
                                     className="w-[9vw] h-[5vw] bg-red-400 mt-[5px] text-white rounded-xl font-bold text-center"></motion.div>
                                )}
                                <h1 className='uppercase text-[7vw] leading-[6vw] tracking-tighter'>
                                    {item}
                                </h1>
                            </div>
                        </div>

                    })}
                </div>

            </div>
            <div className="border-t-[2px]  px-2 py-2 mt-20 flex justify-between border-zinc-300 ">
                {["For public and privet companies", "For the first pitch to   IPO"].map((item, index) => {
                    return <div className=" flex w-auto justify-center items-center  ">{item}</div>
                }
                )}
                <div className="start px-3">
                    <div className="px-5 py-2 border-[2px]  rounded-full border-zinc-700">
                        <div className="w-auto  pb-6 gap-6 flex  justify-between  h-3 rounded-full" >
                            <h1>START THE PROJECT</h1>
                            <span className='rotate-[44deg] pt-1 text-xl'>  <FaLongArrowAltUp /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing