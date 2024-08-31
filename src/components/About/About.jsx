import React from "react";
import "./about.scss";
import aboutDAta from "./aboutData";
const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <div className="about-left">
          <h1>Hello there!</h1>
          <div>
            Hello, my name is <span>Israel Ojiefoh</span>, and I'm a Full Stack
            Developer with a strong interest in building and collaborating with
            others from different experiences to build useful applications and
            tools.
          </div>
        </div>
      </div>
      <div className="about-skills">
        <h1>TECH SKILLS</h1>
        <div className="skills-container">
          {aboutDAta.map((item) => {
            return (
              <div className="card" key={item.id}>
                <h2>{item.language}</h2>
                <img src={item.img} alt={item.language} />
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
