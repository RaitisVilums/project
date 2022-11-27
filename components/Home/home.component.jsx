import React, { Fragment } from "react";
import Aside from "./aside.component";
import Circle from "./circle.component";
import ScrollDown from "./scrolldown.component";
import "./home.styles.scss";

function HomePage() {
  return (
    <Fragment>
      <div id="#" className="home-page">
        <Aside />
        <div className="home-page__heading-wrapper">
          <div className="home-page__heading-1">
            <h1>Web Developer</h1>
          </div>
          <div className="home-page__heading-2">
            <h2 className="flex">Raitis Vilums</h2>
          </div>
          <div className="home-page__para">
            <p>99.</p>
          </div>
        </div>
        <Circle />
        <ScrollDown />
      </div>
    </Fragment>
  );
}

export default HomePage;
