import { data } from 'autoprefixer'
import React from 'react'


function Nav() {
  return (
    
    <>
    <w className="w-[100vw] bg-[#3d45455b] flex py-3 px-3 backdrop-blur-lg fixed z-[999] justify-between font-mono">
        <div className="logo font-bold font-serif ">
            OCHI_2.0
        </div>
        <div className="links flex gap-3 font-serif z">
            {["Services","Our Work","About Us","Insights","Contact"].map((item,index)=>{
                return <a  key={index} href="" className={`text-md pr-3 font-semibold ${index===4 && "ml-32" }`} >{item}</a>
            })}
        </div>
    </w>
    </>
  )
}

export default Nav