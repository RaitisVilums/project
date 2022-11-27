import React, { useEffect, useState } from "react";
import "./project-items.styles.scss";
import firebase from "../../utils/firebase.utils";
import Button from "../Button/button.component";

function ProjectItems() {
  const ref = firebase.firestore().collection("Projects");

  const [data, setData] = useState([]);

  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((element) => {
        items.push(element.data());
      });

      setData(items);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return data.map(({ id, name, projectImage, alt, livedemo, github }) => (
    <div className="project" key={id}>
      <div className="project-image">
        <img className="project-img" src={`${projectImage}`} alt={`${alt}`} />
      </div>
      <div className="name-wrapper">
        <h3 className="project-name">{name}</h3>
      </div>
      <div className="project-buttons">
        <Button href={`${livedemo}`} target={`_blank`}>
          Live Demo
        </Button>
        <Button href={`${github}`} target={`_blank`}>
          Github
        </Button>
      </div>
    </div>
  ));
}

export default ProjectItems;
