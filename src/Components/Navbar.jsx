import React from "react";

function Navbar() {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['NEUEMONTREAL-REGULAR'] flex justify-between items-center">
      <div className="logo flex gap-10">
        <a href="mailto:arif1402786@gmail.com" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10829/10829119.png"
            className="w-full h-[5vh] cursor-pointer"
          ></img>
        </a>
        <a href="https://github.com/Arifali1402" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
            className="w-full h-[5vh] cursor-pointer"
          ></img>
        </a>
        <a href="https://leetcode.com/u/Arif1402/" target="_blank">
          <img
            src="https://th.bing.com/th/id/OIP.cNJCBLV2Loe3Tqwu6sHTkAHaHa?rs=1&pid=ImgDetMain"
            className="w-full h-[5vh] cursor-pointer"
          ></img>
        </a>
      </div>
      <div className="links flex gap-10 mr-8">
        <a
          className={`text-lg capitalize font-regular font-light`}
          href="#home"
          onClick={handleScroll}
        >
          Home
        </a>
        <a
          className={`text-lg capitalize font-regular font-light`}
          href="#skills"
          onClick={handleScroll}
        >
          Skills
        </a>
        <a
          className={`text-lg capitalize font-regular font-light`}
          href="#about"
          onClick={handleScroll}
        >
          About
        </a>
        <a
          className={`text-lg capitalize font-regular font-light`}
          href="#projects"
          onClick={handleScroll}
        >
          Projects
        </a>
        <a
          className={`text-lg capitalize font-regular font-light`}
          href="#games"
          onClick={handleScroll}
        >
          Games
        </a>
        <a
          className={`text-lg capitalize font-regular font-light`}
          href="#contacts"
          onClick={handleScroll}
        >
          Contact Me!
        </a>
        {/* <a className={`text-lg capitalize font-regular font-light ml-16`} href='mailto:arif1402786@gmail.com'>Contact Me</a> */}
        {/* <a className={`text-lg capitalize font-regular font-light`} href='https://www.linkedin.com/in/arif-ali-717032258/' target='_blank'>LinkedIn</a>
        <a className={`text-lg capitalize font-regular font-light`} href='https://github.com/Arifali1402' target='_blank'>GitHub</a>
        <a className={`text-lg capitalize font-regular font-light ml-16`} href='mailto:arif1402786@gmail.com'>Contact Me</a> */}
      </div>
    </div>
  );
}

export default Navbar;
