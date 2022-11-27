import React, { Fragment } from "react";
import { useState } from "react";
import HamburgerButton from "./hamburger-btn.component";
import NavItems from "./navbaritems.component";
import "./navbar.styles.scss";

function NavigationBar() {
  const [navOpen, setNavOpen] = useState(false);

  const navBarToggleHandler = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <HamburgerButton changeStatus={navBarToggleHandler} status={navOpen} />
      <NavItems status={navOpen} />
    </Fragment>
  );
}

export default NavigationBar;
