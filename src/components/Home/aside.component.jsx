import React, { Fragment } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./aside.styles.scss";

function Aside() {
  return (
    <Fragment>
      <div className="aside-left">
        <div className="arrow-down"></div>
        <div className="aside-left__icons">
          <a
            className="icons__link"
            href="https://www.linkedin.com/in/raitis-vi%C4%BCums-9a0649252/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="icons__link"
            href="https://github.com/RaitisVilums"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Aside;
