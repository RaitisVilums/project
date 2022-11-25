import React, { Fragment, useState } from "react";
import "./scrolldown.styles.scss";

function ScrollDown() {
  const [scrollDown, setScrollDown] = useState("");

  const scrollDownHandler = () => {
    if (scrollDown === "") {
      setScrollDown("#about");
      console.log(`#about`);
    } else {
      setScrollDown("");
      console.log("empty");
    }
  };
  return (
    <Fragment>
      <div className="scroll-down">
        <a href={`${setScrollDown}`} onClick={scrollDownHandler}></a>
      </div>
    </Fragment>
  );
}

export default ScrollDown;
