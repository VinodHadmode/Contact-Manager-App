import React from "react";
import { Link } from "react-router-dom";
import { FcContacts } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
        <FcContacts/> Contact <span className="text-warning">Manager</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;
