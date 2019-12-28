import React from "react";
import { MdFlightTakeoff, MdVpnKey, MdHome, MdMap } from "react-icons/md";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <Link to="/" className="side-nav__link ">
            <MdHome className="side-nav__icon" />
            <span>Hotel</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/" className="side-nav__link">
            <MdFlightTakeoff className="side-nav__icon" />
            <span>Flight</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/" className="side-nav__link">
            <MdVpnKey className="side-nav__icon" />
            <span>Car rental</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/" className="side-nav__link">
            <MdMap className="side-nav__icon" />
            <span>Tours</span>
          </Link>
        </li>
      </ul>

      <div className="legal">&copy;2019 by trillo rights reserved.</div>
    </nav>
  );
};

export default SideBar;
