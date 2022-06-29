import React, { useRef } from "react";
import ButtonTicket from "../UI/ButtonTicket";

const Navigation = () => {
  const navRef = useRef();
  const handleToggleNav = function () {
    navRef.current.classList.toggle("header__nav--active");
  };
  return (
    <header className="header">
      <h2 className="header__logo">
        tec<span className="header__logo--colored">hathon</span>.
      </h2>
      <nav className="header__nav" ref={navRef}>
        <ol className="header__nav--list">
          <li className="header__nav--item">
            <a href="#home" className="header__nav--link">
              home
            </a>
          </li>
          <li className="header__nav--item">
            <a href="#about" className="header__nav--link">
              about
            </a>
          </li>
          <li className="header__nav--item">
            <a href="#speakers" className="header__nav--link">
              speakers
            </a>
          </li>
          <li className="header__nav--item">
            <a href="#organizers" className="header__nav--link">
              organizers
            </a>
          </li>
          <li className="header__nav--item">
            <a href="#pricing" className="header__nav--link">
              pricing
            </a>
          </li>
          <li className="header__nav--item">
            <a href="#schedule" className="header__nav--link">
              shedule
            </a>
          </li>
          <li className="header__nav--item">
            <a href="#news" className="header__nav--link">
              news
            </a>
          </li>
          <li className="header__nav--item">
            <a href="#contact" className="header__nav--link">
              contact
            </a>
          </li>
        </ol>
        <ButtonTicket to={"https://www.linkedin.com/in/otwoma"} text="ticket" />
      </nav>
      <button className="hamburger-button" onClick={handleToggleNav}>
        <div className="hamburger hamburger__1"></div>
        <div className="hamburger hamburger__2"></div>
        <div className="hamburger hamburger__3"></div>
      </button>
    </header>
  );
};
export default Navigation;
