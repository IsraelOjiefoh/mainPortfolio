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
            Hello, my name is <span>Israel Ojiefoh</span>, and I'm a Front End Developer
            with a strong interest in coding. I enjoy tinkering with technology
            and exploring new projects.
          </div>
          <div>
            If you have any specific requirements or preferences, please let me
            know, and I'll do my best to tailor my responses accordingly. My
            goal is to provide helpful and informative responses that meet your
            needs.
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
