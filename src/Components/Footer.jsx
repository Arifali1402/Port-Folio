import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { contactLinks } from "./skillsData";

function Footer() {
  return (
    <>
      <div id="contacts" className="w-full h-[75vh] bg-zinc-900 p-20 font-['NEUEMONTREAL-REGULAR']">
        <div className="heading w-full pt-2">
          <p className="text-[6vw] uppercase leading-none -mb-4 text-center">
            Get In Touch
          </p>
        </div>
        <div className="pt-20">
          <Carousel className="footer px-60" showThumbs={false} autoPlay infiniteLoop>
            {contactLinks.map((contactLink, index) => (
              <div key={index} style={{ textAlign: "center", padding: "20px" }}>
                <img
                  src={contactLink.icon}
                  alt={`${contactLink.name} icon`}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginBottom: "10px",
                  }}
                />
                <h3>{contactLink.name}</h3>
                <a href={`${contactLink.link}`} className="text-2xl" target="_blank">Click Here</a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="text-center text-white bg-black p-4">
        Copyrights &copy; www.arifaliportfolio.com | All Rights Reserved 2024.
      </div>
    </>
  );
}

export default Footer;
