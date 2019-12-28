import React from "react";
import { MdSearch, MdBookmark, MdForum } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/images/logo.png" alt="logo" className="logo" />
      <form className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <MdSearch className="search__icon" />
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <MdBookmark className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <MdForum className="user-nav__icon" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img
            src="/assets/images/user.png"
            alt="user"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Safia</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
