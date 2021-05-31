import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = () => {
  return (
    <nav className="Navbar" role="navigation" aria-label="main-navigation">
      <section className="Navbar-top">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </section>
      <section className="Navbar-middle">
        <Link to="/all">All</Link>
        <Link to="/fav">Fav</Link>
        <Link to="/new">New</Link>
        <Link to="/lists">Lists</Link>
      </section>
      <section className="Navbar-bottom" />
    </nav>
  );
};

export default Navbar;
