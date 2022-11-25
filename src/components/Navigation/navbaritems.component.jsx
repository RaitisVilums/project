import React, { Fragment } from "react";
import "./navbaritems.styles.scss";

function NavItems(props) {
  const { status } = props;
  return (
    <Fragment>
      <nav className={`nav-bar ${status ? " nav-bar-animation" : ""}`}>
        <ul className={`nav-bar__items ${status ? " showMenu" : " hideMenu"}`}>
          <li className={`nav-bar__item ${status ? " text-animation" : ""}`}>
            Home
          </li>
          <li className={`nav-bar__item ${status ? " text-animation" : ""}`}>
            About
          </li>
          <li className={`nav-bar__item ${status ? " text-animation" : ""}`}>
            Projects
          </li>
          <li className={`nav-bar__item ${status ? " text-animation" : ""}`}>
            Contacts
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavItems;
