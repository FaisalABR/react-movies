import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import bg from "../../assets/footer-bg.jpg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logos">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to="/">tMovie</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">About us</Link>
            <Link to="/">Term of services</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent released</Link>
            <Link to="/">Top Tmdb</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
