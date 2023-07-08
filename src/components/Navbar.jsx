import React, { useState } from "react";
import logo from "../assets/logo.png";
import userpic from "../assets/userpic.jpeg";
import { FaSearch } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
          P2E Pro
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto">
            <div className="input-group">
              <button className="btn btn-outline-primary" type="submit">
                <FaSearch />
              </button>
              <input
                className="form-control"
                type="search"
                placeholder="Collection, item or user"
                aria-label="Search"
              />
            </div>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Explore
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Item 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Create
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Item 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Blog
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Item 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <li className="nav-item mt-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeSwitch"
                  checked={isDarkMode}
                  onChange={toggleMode}
                />
                <label className="form-check-label" htmlFor="darkModeSwitch">
                  {isDarkMode ? <FaMoon /> : <FaSun />}
                </label>
              </div>
            </li>

            <li className="nav-item">
              <img
                src={userpic}
                alt="User Photo"
                className="nav-link rounded-circle"
                style={{ width: "40px" }}
              />
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" type="button">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
