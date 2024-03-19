import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <span>
        The <a href="https://facebook.github.io/react/">ReactJS library</a>
        by <a href="https://www.facebook.com/">Facebook</a>
      </span>
      <ul className="navbar-nav d-flex flex-row">
        <li className="p-2">
          <Link to="contact">Contact Us</Link>
        </li>
        <li className="p-2">
          <Link to="#">Nav X</Link>
        </li>
        <li className="p-2">
          <Link to="#">Nav Y</Link>
        </li>
        <li className="p-2">
          <a href="http://newsroom.fb.com/">News</a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
