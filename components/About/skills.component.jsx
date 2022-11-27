import React, { Fragment } from "react";
import "./skills.styles.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
function Skills() {
  return (
    <Fragment>
      <h1 className="skills-heading">My Skills</h1>
      <div className="grid">
        <div className="skills-block">
          <AiFillHtml5 className="skills-icon" color="#F06529" />
          <p>HTML</p>
        </div>
        <div className="skills-block">
          <FaCss3 className="skills-icon" color="#28A4D9" />
          <p>CSS</p>
        </div>
        <div className="skills-block">
          <SiJavascript className="skills-icon" color="#EFD81D" />
          <p>JS</p>
        </div>
        <div className="skills-block">
          <FaSass className="skills-icon" color="#CD6799" />
          <p>SCSS</p>
        </div>
        <div className="skills-block">
          <FaReact className="skills-icon" color="#5ed4f4" />
          <p>REACT</p>
        </div>
        <div className="skills-block">
          <FaNodeJs className="skills-icon" color="#68a063" />
          <p>NODE</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
