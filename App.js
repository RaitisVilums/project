import { Fragment } from "react";

import "./App.styles.scss";
import NavigationBar from "./components/Navigation/navbar.component";
import HomePage from "./components/Home/home.component";
import About from "./components/About/about.component";
import Projects from "./components/Projects/projects.component";
import Contact from "./components/Contact/contact.component";
import Footer from "./components/Footer/footer.component";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
