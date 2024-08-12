import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function About() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div id="about" className='w-full p-16 bg-[#ceeb67ff] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["NEUEMONTREAL-REGULAR"] text-[4vw] leading-[4vw] tracking-tight'>As a dedicated software engineering student, I am committed to learning and growing in the field of technology. With a strong foundation in problem-solving and a passion for innovation, I am eager to contribute to impactful projects and explore new horizons in engineering.</h1>
      <div id="projects" className='flex gap-5 w-full border-t-[1px] mt-20 pt-20 border-[#a1b562]'>
        <div className='w-1/2'>
        <h1 className='text-5xl pb-4'>Featured Projects:</h1>
        <h1 className='text-4xl'>TASK-KEEPER</h1>
        <div className='text-black font-semibold mt-8 uppercase'> A simple and user-friendly ToDo List application built with React, 
        featuring task addition, deletion and completion status toggling.
        </div>
        </div>

        <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative w-1/2 h-[75vh] "
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#000000] right-[50%] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
                {"TASK-KEEPER".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <a href="https://task-keeper-one.vercel.app/" target="_blank" className="pointer-cursor"><img
                className="w-full h-full bg-cover"
                src="/task-keeper.png"
              />
              </a>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About;


// import React from 'react'

// function About() {
  
//   return (
//     <div className='w-full p-16 bg-[#ceeb67ff] rounded-tl-3xl rounded-tr-3xl text-black'>
//       <h1 className='font-["NEUEMONTREAL-REGULAR"] text-[4vw] leading-[3.5vw] tracking-tight'>As a dedicated software engineering student, I am committed to learning and growing in the field of technology. With a strong foundation in problem-solving and a passion for innovation, I am eager to contribute to impactful projects and explore new horizons in engineering.</h1>
//       <div className='flex gap-5 w-full border-t-[1px] mt-20 pt-10 border-[#a1b562]'>
//         <div className='w-1/2'>
//         <h1 className='text-5xl'>Featured Projects:</h1>
//         <button className='flex gap-10 items-center px-7 py-5 bg-zinc-900 rounded-full text-white mt-8 uppercase'>Read More
//         <div className='w-2 h-2 bg-zinc-100 rounded-full'>

//         </div>
//         </button>
//         </div>
//         <div className='w-1/2 h-[70vh] rounded-3xl bg-[#5b7403] overflow-hidden'>
//           <a href='https://task-keeper-one.vercel.app/' target='_blank'>
//           <img className='w-full h-full' src="/task-keeper.png"></img>
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About;