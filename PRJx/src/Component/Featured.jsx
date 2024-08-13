import { motion } from 'framer-motion'
import React from 'react'

function Featured() {

    return (
        <>
            <div className="w-full py-20">
                <div className="w-full  font-mono border-b-3 border-zinc-800 bg-white">
                    <h1 className='text-black font-semibold text-7xl border-b-4 pb-5'>Featured</h1>

                </div>
                <div className="px-10 pb-20">
                    <div className="cards w-full gap-10 justify-evenly mt-5 mx-5 flex ">

                        <div className="card-container mb-5 ease-in-out duration-300 overflow-hidden w-2/3 h-[75vh] rounded-2xl b">
                            {/* <div className="toptext z-[999] rounded-2xl absolute ">
                                <h1 className='text-7xl opacity-0 hover:opacity-100 font-semibold text-green-300 tracking-tighter'>FYDE</h1>
                            </div> */}
                            <div className="card w-full h-full  rounded-2xl bg-green-600  ">
                                <img className='' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="dfsf" />
                            </div>
                        </div>
                        <div className="card-container overflow-hidden w-2/3 h-[75vh] rounded-2xl b">
                            {/* <div className="toptext z-[999] absolute -translate-y-[-240%] -translate-x-[65%] ">
                                <h1 className='text-7xl font-semibold text-green-300 tracking-tighter'>VIBE</h1>
                            </div> */}
                            <div className="card w-full h-full  bg-green-600  ">
                                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="dfsf" />
                            </div>
                        </div>
                    </div>
                    <div className="cards w-full gap-10 justify-evenly mt-5 mx-5 flex ">

                        <div className="card-container overflow-hidden w-2/3 h-[75vh] rounded-2xl b">
                            {/* <div className="toptext z-[999] absolute -translate-x-[-310%] ">
                                <motion.div className='text-7xl font-semibold text-green-300 tracking-tighter'>FYDE</motion.div>
                            </div> */}
                            <div className="card w-full h-full  bg-green-600  ">
                                <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="dfsf" />
                            </div>
                        </div>
                        <div className="card-container overflow-hidden w-2/3 h-[75vh] rounded-2xl b">
                            {/* <div className="toptext z-[999] absolute -translate-y-[-240%] -translate-x-[65%] ">
                                <h1 className='text-7xl font-semibold text-green-300 tracking-tighter'>VIBE</h1>
                            </div> */}
                            <div className="card w-full h-[90%] pb-10  bg-green-600  ">
                                <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="dfsf" />
                                <div className='h-10 w-full bg-red-600'>Lorem ipsum dolor sit.</div>
                            </div>
                           
                          
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured