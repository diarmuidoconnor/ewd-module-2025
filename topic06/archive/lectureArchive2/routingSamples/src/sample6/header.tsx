import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark fixed-top  bg-dark ">
      <Link className="navbar-brand" to="/">
        Company Name
      </Link>
      <ul className="navbar-nav d-flex flex-row">
        <li className="p-2">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-dark bg-warning" : "text-white bg-dark"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-dark bg-warning" : "text-white bg-dark"
            }
          >
            About
          </NavLink>
        </li>
        <li className="p-2">
        <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ?  "text-dark bg-warning" : "text-white bg-dark"
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="p-2">
        <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-dark bg-warning" : "text-white bg-dark"
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
