import React, { Fragment, useState } from "react";
import "./hamburger-btn.styles.scss";

function HamburgerButton(props) {
  const { changeStatus, status } = props;

  return (
    <Fragment>
      <div className={`icon ${status ? " active" : ""}`} onClick={changeStatus}>
        <div className="btn-burger"></div>
      </div>
    </Fragment>
  );
}

export default HamburgerButton;
