import React, { Fragment } from "react";
import "./about.styles.scss";
import ME from "../../DSC_0046.jpg";
import Skills from "./skills.component";
import Button from "../Button/button.component";
import DOWNLOAD from "../../cv.pdf";

function About() {
  return (
    <Fragment>
      <div className="about-wrapper">
        <div className="about-wrapper-text">
          <h1 className="about-heading">About me</h1>
          <p className="about-para">
            I am a diligent person, who will always find a way to solution. As a
            self taught front-end developer I can tell that I am ready for work.
          </p>
          <p className="about-para">
            In building Web applications, I am equipped with just the right
            tools to create and deploy an absolutely functional application -
            fast, optimized and scalable apps are my priorities.
          </p>
          <div className="btn-wrapper">
            <Button href={`#contact`}>Contact Me</Button>
            <Button href={DOWNLOAD} download={`download`}>
              Download CV
            </Button>
          </div>
        </div>
        <div className="about-wrapper-photo">
          <div className="photo-wrapper">
            <img className="image" src={ME} alt="It's me" />
          </div>
        </div>
        <div className="about-wrapper-skills">
          <Skills />
        </div>
      </div>
    </Fragment>
  );
}

export default About;
