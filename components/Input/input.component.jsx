import React, { useRef } from "react";
import "./input.styles.scss";

function Input(props) {
  const ref = useRef(null);
  const { className, type, id, placeholder, required } = props;
  const classN = `input ${className}`;

  return (
    <input
      className={classN}
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default Input;
