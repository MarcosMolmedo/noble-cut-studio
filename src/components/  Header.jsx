import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <a href="#home" className="header__logo">
          <span className="header__logo-main">NOBLE CUT</span>

          <span className="header__logo-sub">
            STUDIO
          </span>
        </a>

        <button
          className={`header__toggle ${
            isMenuOpen
              ? "header__toggle--active"
              : ""
          }`}
          onClick={() =>
            setIsMenuOpen(!isMenuOpen)
          }
        >
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
        </button>

        <div
          className={`header__menu ${
            isMenuOpen
              ? "header__menu--open"
              : ""
          }`}
        >
          <a
            href="#home"
            className="header__link"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#services"
            className="header__link"
            onClick={closeMenu}
          >
            Services
          </a>

          <a
            href="#experience"
            className="header__link"
            onClick={closeMenu}
          >
            Experience
          </a>

          <a
            href="#barbers"
            className="header__link"
            onClick={closeMenu}
          >
            Barbers
          </a>

          <a
            href="#reviews"
            className="header__link"
            onClick={closeMenu}
          >
            Reviews
          </a>

          <a
            href="#contact"
            className="header__link"
            onClick={closeMenu}
          >
            Contact
          </a>

          <a
            href="#booking"
            className="header__button"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;