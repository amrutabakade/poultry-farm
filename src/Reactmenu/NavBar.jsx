import React from "react";
import logo from "../logo.ico";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () =>
{
    return <>
    <section>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
        <img className="Minimize" src={logo}></img>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/con">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/serve">Services</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>

    </>
}

export default NavBar;