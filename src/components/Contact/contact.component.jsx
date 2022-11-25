import React, { Fragment } from "react";
import Button from "../Button/button.component";
import "./contact.styles.scss";
import ContactBox from "./contactbox.component";
import Form from "./form.component";

function Contact() {
  return (
    <Fragment>
      <div className="contact-wrapper">
        <h1 className="contact-heading">Reach me out</h1>
        <div className="section">
          <ContactBox />
          <Form />
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
