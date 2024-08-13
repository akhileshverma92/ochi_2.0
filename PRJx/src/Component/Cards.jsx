import React from 'react'

function Cards() {
    return (
        <>
            #004D43
            <div data-scroll data-section data-scroll-speed="-.5"    className="w-full z-10 mb-20 h-screen px-5 py-20  flex gap-3">
                <div className="cardcontainer ml-7  h-[55vh] w-1/2">
                    <div className="card w-full h-full flex  justify-center align-middle    rounded-2xl bg-[#004D43]">
                        <img className="w-[125px] h-[75px] mt-[17%]"src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                       
                    </div>
                    <button className=''>ok</button>
                </div>
                <div className="cardcontainer flex gap-5 h-[55vh]   w-1/2">
                    <div className="card w-[45%] flex  justify-center  rounded-2xl bg-[#212121] h-full">
                        <img className='w-[125px] h-[75px] mt-[37%]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    </div>
                    <div className="card  flex  justify-center  w-[45%] rounded-2xl bg-[#212121] h-full">
                        <img className='w-[75px] h-[75px] mt-[37%]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"  alt="" />
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards