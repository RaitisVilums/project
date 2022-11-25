import { Fragment } from "react";

import "./App.styles.scss";
import NavigationBar from "./components/Navigation/navbar.component";
import HomePage from "./components/Home/home.component";
import About from "./components/About/about.component";
import Projects from "./components/Projects/projects.component";
import Contact from "./components/Contact/contact.component";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
