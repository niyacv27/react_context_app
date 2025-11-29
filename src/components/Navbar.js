import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useAuthContext from "../hooks/useAuthContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, apiUser } = useAuthContext();

  return (
    <nav className={`navbar navbar-${theme}`}>
      <div className="navbar-left">
        <span className="brand">Context Demo App</span>
      </div>

      <div className="navbar-center">
        {apiUser && (
          <small>
            API User: {apiUser.name} ({apiUser.email})
          </small>
        )}
      </div>

      <div className="navbar-right">
        <span className="nav-user">
          {user ? `Logged in as ${user.name}` : "Not logged in"}
        </span>
        <button onClick={toggleTheme} className="btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
