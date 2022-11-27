import React, { useRef } from "react";
import "./button.styles.scss";

function Button(props) {
  const ref = useRef(null);
  const { href, download, target, onClick, children, className, onSubmit } =
    props;
  const classN = `btn ${className}`;

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      className={classN}
      target={target}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </a>
  );
}

export default Button;
