import React from "react";
import { ContactBoxData } from "./contactbox";
import Button from "../Button/button.component";
import "./contactbox.styles.scss";

function ContactBox() {
  return (
    <section className="section-contacts">
      {ContactBoxData.map(({ id, name, value, icon, href }) => (
        <div className="wrapper-2" key={id}>
          {icon}
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
