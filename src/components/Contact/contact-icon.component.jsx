import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import React from "react";

const ContactIcon = (props) => {
  const { id, classN } = props;
  if (id === "1") {
    return (
      <div className={classN}>
        <AiOutlineWhatsApp />
      </div>
    );
  } else if (id === "2") {
    return (
      <div className={classN}>
        <RiMessengerLine />
      </div>
    );
  } else {
    return (
      <div className={classN}>
        <AiOutlineMail />
      </div>
    );
  }
};

export default ContactIcon;
