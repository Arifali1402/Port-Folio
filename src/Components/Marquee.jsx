import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d42ff]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none tracking-tighter font-["BAHNSCHRIFT"] font-semibold uppercase -mb-[3.5vw] -pt-2 pr-20'>I AM A CODER AND A WEB DEVELOPER.</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none tracking-tighter font-["BAHNSCHRIFT"] font-semibold uppercase -mb-[3.5vw] -pt-2 pr-20'>I AM A CODER AND A WEB DEVELOPER.</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
