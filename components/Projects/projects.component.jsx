import React, { Fragment } from "react";
import "./projects.styles.scss";

import ProjectItems from "./project-items.component";

function Projects() {
  return (
    <Fragment>
      <div id="projects" className="projects-wrapper">
        <div className="projects-heading">
          <h1>My Projects</h1>
        </div>
        <div className="grid-wrapper">
          <ProjectItems />
        </div>
      </div>
    </Fragment>
  );
}

export default Projects;
