import React, { Fragment } from "react";
import "./navbaritems.styles.scss";

function NavItems(props) {
  const { status } = props;
  return (
    <Fragment>
      <nav className={`nav-bar ${status ? " nav-bar-animation" : ""}`}>
        <ul className={`nav-bar__items ${status ? " showMenu" : " hideMenu"}`}>
          <a
            href="#"
            className={`nav-bar__item ${status ? " text-animation" : ""}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-bar__item ${status ? " text-animation" : ""}`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`nav-bar__item ${status ? " text-animation" : ""}`}
          >
            Projects
          </a>
          <a
            href="#contacts"
            className={`nav-bar__item ${status ? " text-animation" : ""}`}
          >
            Contacts
          </a>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavItems;
