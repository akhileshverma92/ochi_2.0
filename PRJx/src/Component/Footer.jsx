import React from 'react'

function Footer() {
    return (
        <>
            <div data-scroll data-section data-scroll-speed="-.4"  className=" pt-5 pb-20  w-full mt-10  h-screen flex   bg-[#CDEA68]">
                <div className="w-[35vw] h-full  pb-5 flex flex-col justify-between">
                    <h1 className='text-zinc-800 text-6xl pl-5 l font-bold '>EYE- <br /> OPENING</h1>
                    <p className='text-zinc-700 text-4xl pl-5 leading-tight font-bold  '>ochi</p>
                </div>
                <div className="w-[65vw] h-full  pb-5 ">
                    <h1 className='text-zinc-800 text-6xl pl-5 l font-bold '> PRESENTATONS</h1>
                    <div className="mt-4 ml-6  w-full about font-serif text-black  flex flex-col gap-7">
                        <div className="s">
                            <h1 className='text-2xl font-bold'>S:</h1>

                            {["Instagram", "Facebook", "Behance", "LinkdIn"].map((item, index) => {
                                return <p className='hover:border-b-2 transition ease-in-out w-[75px] border-black  hover:transition-all'>{item}</p>
                            })}

                        </div>
                        <div className="lm flex justify-between pr-10">
                            <div className="l">
                                <h2 className='text-2xl font-bold'>L:</h2>
                                <p>202-1965 W 4th Ave</p>
                                <p>Vancouver, Canada</p>

                                <p className='mt-2'>  30 Chukarina St</p>

                                <p>Lviv, Ukraine</p>
                            </div>
                            <div className="m">
                                <h2 className='text-2xl font-bold'>M:</h2>


                                {["Home", "Services", "Our Work", "Insights", "Contact Us"].map((item, index) => {
                                    return <p className='hover:border-b-2 transition ease-in-out border-black  hover:transition-all'>{item}</p>
                                })}
                            </div>
                        </div>
                        <div className="e flex justify-between">
                            <div className="email">
                            <h2 className='text-2xl font-bold'>E:</h2>
                            <p>hello@ochi.design</p>
                            </div>
                            <div className="github bg- mr-10 pt-4 bg-[#004d4396] rounded-xl text-white px-4">
                                <a className='w-auto h-auto border-3  border-zinc-700' href="https://github.com/akhileshverma92/ochi_2.0">GITHUB💕</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer