import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 flex gap-20">
      <div>
        {["WELCOME TO", "MY PORTFOLIO!","MY NAME IS","ARIF ALI.",""].map((item, index) => {
            return (
              <div className="masker">
                <div className="w-fit flex">
                {index === 1 && (<motion.div initial={{width:0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="mr-[.65vw] w-[5.5vw] h-[4 vw] relative bg-green-500 rounded-md overflow-hidden"></motion.div>)}
                  <h1 className='flex items-center uppercase text-[5vw] h-full leading-[5.2vw] tracking-tight font-["Ubuntu"] font-bold'>
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
      </div>
        <motion.div initial={{width:0}} animate={{width: "auto"}} transition={{ease: [0.37, 0, 0.63, 1], duration: 2}} className="-mt-20">
        <img src="https://avatars.githubusercontent.com/u/130029082?s=400&u=de9fcab9c60a8ca20adae291144f8cb3e086d0f7&v=4" className="rounded-lg"></img>
        </motion.div>
      </div>
      
      <div className="w-[100%] border-t-[1px] border-zinc-800 mt-8 flex justify-between items-center py-5 px-20">
        {[
          "Skilled coder with efficient solutions.",
          "Experienced in building dynamic web applications",
        ].map((item, index) => (
          <p className="text-md font-['Familjen Grotesk'] font-semibold tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-['Familjen Grotesk'] font-semibold text-sm uppercase">
            Download My CV
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-300 rounded-full">
            <a href="/resume.pdf" download="Arif_CV.pdf" target="_blank" className="rotate-[180deg] cursor-pointer">
              <FaArrowUp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
