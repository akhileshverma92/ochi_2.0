import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setrotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mousex= e.clientX;
            let mousey = e.clientY;
            let deltax = mousex-window.innerWidth/2;
            let deltay = mousey-window.innerHeight/2;
            
            var angle = Math.atan2(deltay,deltax)*(180/Math.PI);
            setrotate(angle-180);


            
        })
    })
    return (
        <>
            <div className="w-full bg-white h-screen overflow-hidden">
                <div data-scroll data-scroll-speed="-.7" className="w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                    <div className='absolute w-1/2 gap-0 flex justify-evenly -translate-x-[-19rem] -translate-y-[-11rem]'>

                        <div className="w-[15vw] h-[15vw] flex align-center  justify-center rounded-full bg-white">
                            <div className="w-[7rem] h-[7rem] flex justify-center  mt-[2.25rem] rounded-full bg-black">
                                <div style={{transform: ` rotate(${rotate}deg)`}} className="line mt-[35%] pl-3 z-[1] w-[90%] h-[30px] ">
                                    <div className="cornia z-[999]  w-[35px] h-[35px] rounded-full  bg-white">

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-[15vw] h-[15vw] flex align-center  justify-center rounded-full bg-white">
                            <div className="w-[7rem] h-[7rem] flex justify-center  mt-[2.25rem] rounded-full bg-black">
                            <div style={{transform: ` rotate(${rotate}deg)`}} className="line mt-[35%] pl-3 z-[1] w-[90%] h-[30px] ">
                                    <div className="cornia z-[999]  w-[35px] h-[35px] rounded-full  bg-white">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Eyes