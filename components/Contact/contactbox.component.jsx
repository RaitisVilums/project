import React, { useState, useEffect } from "react";
import ContactIcon from "./contact-icon.component";
import Button from "../Button/button.component";
import firebase from "../../utils/firebase.utils";
import "./contactbox.styles.scss";

function ContactBox() {
  const ref = firebase.firestore().collection("Contacts");
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
  return (
    <section className="section-contacts">
      {data.map(({ id, name, value, href }) => (
        <div className="wrapper-2" key={id}>
          <ContactIcon classN={`wrapper-2-icon`} id={id} />
          <h2 className="wrapper-2-heading">{name}</h2>
          <p className="wrapper-2-para">{value}</p>
          <Button href={`${href}`} className="wrapper-2-btn" target={`_blank`}>
            Send a message
          </Button>
        </div>
      ))}
    </section>
  );
}

export default ContactBox;
