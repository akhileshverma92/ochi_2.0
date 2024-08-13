import React from 'react'

function About() {
    return (
        <>
            <div data-scroll data-section data-scroll-speed="-.19" className="main w-full font-serif px-10 rounded-tl-2xl text-black  rounded-tr-2xl py-20 bg-[#CDEA68]">
                <h1 className='text-5xl text-black tracking-tight leading-[4vw]'>Ochi is a strategic partner for fast-growing tech business that need to raise funds, sell products,  explain complex ideas , and hire greate people.  </h1>
                <div className="w-full border-t-[3px] font-serif mt-20 flex  font-semibold gap-3 pt-5 border-zinc-900 ">
                    <div className="w-1/2 ">
                    <h1 className='text-3xl  text-zinc-800 mb-5'>Our Approach:</h1>
                    <button className='bg-zinc-100   flex gap-4 justify-between align-middle  rounded-full px-7 py-2'>Read more..
                        <div className='w-4 hover:scale-[150%] ease-linear h-4 mt-[0.33rem] rounded-full bg-[#0101017c]'></div>
                    </button>
                    </div>
                    <div className="w-1/2 h-[60vh] rounded-xl mb-4 bg-[#ffffff00]" >
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About