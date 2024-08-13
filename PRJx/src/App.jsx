import React from 'react'
import Nav from './Component/Nav'
import Landing from './Component/Landing'
import Marquee from './Component/Marquee'
import About from './Component/About'
import Eyes from './Component/Eyes'
import Featured from './Component/Featured'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll = new LocomotiveScroll()
  return (
    <>
      <div className="main w-full h-screen bg-zinc-900 text-white">
        <Nav />
        <Landing />
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App