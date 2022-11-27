import React, { useState } from "react";
import "./form.styles.scss";

import Input from "../Input/input.component";
import axios from "axios";

function Form() {
  const FORMSPARK_FORM_ID = "JNEyc6yu";
  const FORMSPARK_URL = `https://submit-form.com/${FORMSPARK_FORM_ID}`;

  const formInitialState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(formInitialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await postSubmission();
    setIsSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
    };

    try {
      const result = await axios.post(FORMSPARK_URL, payload);
      console.log(result);
      setMessage({
        class: "meessage-sucssesful",
        text: "Thanks! I will reach you out soon!",
      });
    } catch (err) {
      console.log(err);
      setMessage({
        class: "message-unsucsseful",
        text: "Sorry, there was a problem. Please try again, our reach me out rvilums80@gmail.com !",
      });
    }
  };

  const updatedFormControl = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  return (
    <section className="section-form">
      <form className="form-wrapper" onSubmit={onSubmitHandler}>
        {message && (
          <div className={`message ${message.class}`}>{message.text}</div>
        )}
        <Input
          onChange={updatedFormControl}
          type="text"
          id="name"
          placeholder="Your Name"
          value={formState.name}
          required
        />
        <Input
          onChange={updatedFormControl}
          type="email"
          id="email"
          placeholder="Your Email"
          value={formState.email}
          required
        />
        <textarea
          className="form-wrapper-textarea"
          id="message"
          placeholder="Your Message"
          rows={7}
          required
        ></textarea>
        <button className="form-btn">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Form;
