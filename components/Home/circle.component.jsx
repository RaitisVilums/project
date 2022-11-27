import React, { Fragment } from "react";
import ME from "../../DSC_0155-removebg-preview.png";
import "./circle.styles.scss";

function Circle() {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="circle-outer"></div>
        <div className="circle-inner">
          <img
            className="circle-inner__image"
            src={ME}
            alt="it's me! Raitis'"
          />
        </div>

        <div className="square"></div>
        <div className="square-2"></div>
      </div>
    </Fragment>
  );
}

export default Circle;
