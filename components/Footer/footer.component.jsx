import React from "react";
import "./footer.styles.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/raitis.vilums.75/"
          className="footer__socials-link"
          target="_blank"
        >
          <AiFillFacebook className="footer__socials-icon" />
        </a>
        <a
          href="https://www.instagram.com/rvmemasik/"
          className="footer__socials-link"
          target="_blank"
        >
          <AiFillInstagram className="footer__socials-icon" />
        </a>
        <a
          href="https://twitter.com/RaitisVilums"
          className="footer__socials-link"
          target="_blank"
        >
          <AiOutlineTwitter className="footer__socials-icon" />
        </a>
        <a
          href="https://www.linkedin.com/"
          className="footer__socials-link"
          target="_blank"
        >
          <AiOutlineLinkedin className="footer__socials-icon" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Raitis Vilums</small>
      </div>
    </footer>
  );
}

export default Footer;
