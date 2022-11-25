import React from "react";
import "./form.styles.scss";
import Button from "../Button/button.component";
import Input from "../Input/input.component";

function Form() {
  return (
    <section className="section-form">
      <form className="form-wrapper">
        <div className={`message`}></div>
        <Input type="text" id="name" placeholder="Name" required />
        <Input type="email" id="email" placeholder="Email" required />
        <textarea
          className="form-wrapper-textarea"
          rows={7}
          id="message"
          placeholder="Message"
          required
        ></textarea>
        <Button className={`form-btn`}>Send Message</Button>
      </form>
    </section>
  );
}

export default Form;
