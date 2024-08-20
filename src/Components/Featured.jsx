import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div id="games" className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-8">
        <h1 className='text-6xl font-["Ubuntu"] underline tracking-tight'>
          Featured Games:
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex text-[#ff34c2] font-['Ubuntu'] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
                {"TIC-TAC-TOE".split("").map((item, index) => (
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
              <a
                href="https://github.com/Arifali1402/myTicTacToe"
                target="_blank"
                className="pointer-cursor"
              >
                <img
                  className="w-full h-full bg-cover"
                  src="/tic-tac-toe.png"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#30f740] font-['Ubuntu'] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
                {"ROCK-PAPER-SCISSOR".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
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
              <a
                href="https://github.com/Arifali1402/rock-paper-scissors-game"
                target="_blank"
                className="pointer-cursor"
              >
                <img
                  className="w-full h-full bg-cover"
                  src="/rock-paper-scissor.png"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
