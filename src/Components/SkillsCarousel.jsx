// src/SkillsCarousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { skills } from "./skillsData";

const SkillsCarousel = () => {
  return (
    <div id="skills">
      <p className="text-center text-4xl font-['NEUEMONTREAL-REGULAR']">
        SKILLS:
      </p>
      <div className="px-40">
        <Carousel className="skillC" showThumbs={false} autoPlay infiniteLoop>
          {skills.map((skill, index) => (
            <div key={index} style={{ textAlign: "center", padding: "20px" }}>
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "10px",
                }}
              />
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SkillsCarousel;
