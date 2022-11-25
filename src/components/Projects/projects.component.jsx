import React, { Fragment } from "react";
import "./projects.styles.scss";
import project from "../../portfolio3.png";
import Button from "../Button/button.component";

function Projects() {
  return (
    <Fragment>
      <div className="projects-wrapper">
        <div className="projects-heading">
          <h1>My Projects</h1>
        </div>
        <div className="grid-wrapper">
          <div className="project">
            <div className="project-image">
              <img className="project-img" src={project} alt="project-1" />
            </div>
            <div className="name-wrapper">
              <h3 className="project-name">Project name</h3>
            </div>
            <div className="project-buttons">
              <Button href={`#`} target={`_blank`}>
                Live Demo
              </Button>
              <Button href={`#`} target={`_blank`}>
                Github
              </Button>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img className="project-img" src={project} alt="project-1" />
            </div>
            <div className="name-wrapper">
              <h3 className="project-name">Project name</h3>
            </div>
            <div className="project-buttons">
              <Button href={`#`} target={`_blank`}>
                Live Demo
              </Button>
              <Button href={`#`} target={`_blank`}>
                Github
              </Button>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img className="project-img" src={project} alt="project-1" />
            </div>
            <div className="name-wrapper">
              <h3 className="project-name">Project name</h3>
            </div>
            <div className="project-buttons">
              <Button href={`#`} target={`_blank`}>
                Live Demo
              </Button>
              <Button href={`#`} target={`_blank`}>
                Github
              </Button>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img className="project-img" src={project} alt="project-1" />
            </div>
            <div className="name-wrapper">
              <h3 className="project-name">Project name</h3>
            </div>
            <div className="project-buttons">
              <Button href={`#`} target={`_blank`}>
                Live Demo
              </Button>
              <Button href={`#`} target={`_blank`}>
                Github
              </Button>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img className="project-img" src={project} alt="project-1" />
            </div>
            <div className="name-wrapper">
              <h3 className="project-name">Project name</h3>
            </div>
            <div className="project-buttons">
              <Button href={`#`} target={`_blank`}>
                Live Demo
              </Button>
              <Button href={`#`} target={`_blank`}>
                Github
              </Button>
            </div>
          </div>
          <div className="project">
            <div className="project-image">
              <img className="project-img" src={project} alt="project-1" />
            </div>
            <div className="name-wrapper">
              <h3 className="project-name">Project name</h3>
            </div>
            <div className="project-buttons">
              <Button href={`#`} target={`_blank`}>
                Live Demo
              </Button>
              <Button href={`#`} target={`_blank`}>
                Github
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Projects;
