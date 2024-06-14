import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="link">
          <Link className="link">
            <h6>ART</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
