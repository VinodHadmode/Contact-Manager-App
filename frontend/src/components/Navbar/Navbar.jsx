import React from "react";
import { Link } from "react-router-dom";
import { FcContacts } from "react-icons/fc";
import { LuContact2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand d-flex align-items-center">
          <LuContact2 className="me-2 text-warning" size={30} />
          <span>
            Contact <span className="text-warning">Manager</span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
