import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "./authContext";

const Header = () => {
  const { token, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      {token ? (
        <p>
          Welcome! <button onClick={() => signout()}>Sign out</button>
        </p>
      ) : (
        <p>
          You are not logged in{" "}
          <button onClick={() => navigate("login")}>Login</button>
        </p>
      )}
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "white",
                    background: "blue",
                  }
                : { color: "blue", background: "white" }
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="public"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "white",
                    background: "blue",
                  }
                : { color: "blue", background: "white" }
            }
          >
            {" "}
            Public
          </NavLink>
        </li>
        <li>
          <NavLink
            to="inbox"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "white",
                    background: "blue",
                  }
                : { color: "blue", background: "white" }
            }
          >
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "white",
                    background: "blue",
                  }
                : { color: "blue", background: "white" }
            }
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
