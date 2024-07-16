import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const getHeaderClass = () => {
    switch (location.pathname) {
      case "/Payment":
        return "payment-header";
      case "/Book":
        return "book-header";
      default:
        return "";
    }
  };

  return (
    <>
      <header className={`${isScrolled ? "scrolled" : ""} ${getHeaderClass()}`}>
        <div className="header">
          <Link to="/">
            <h2 className="logo">
              {" "}
              <img src="/SD-Logo--Favicon.svg" alt="Swift Dispatch logo" />{" "}
              SwiftDispatch
            </h2>
          </Link>
          <nav className="nav">
            <h3>
              <NavLink to="/">Home</NavLink>
            </h3>
            <h3>
              <NavLink to="/Track">Track Order</NavLink>
            </h3>

            <h3>
              <NavLink to="/Report">Report a Rider</NavLink>
            </h3>
            <h3>
              <NavLink to="/About">About us</NavLink>
            </h3>
            <NavLink to="/Book">
              <button className="book-now">Book Now</button>
            </NavLink>
          </nav>
          <button className="mobile-click-open" onClick={toggleMobileNav}>
            {/* <img src="./SwiftDispatch - Assets/Landing Page/icon-menu.svg" alt="click for mobile nav"> */}
            <img src="/icon-menu.svg" alt="click for mobile nav" />
          </button>
          <nav className={`mobile-nav ${isMobileNavOpen ? "active" : ""}`}>
            <button className="mobile-click-close" onClick={toggleMobileNav}>
              {/* <img src="./SwiftDispatch - Assets/Landing Page/icon-menu-close.svg" alt="close nav bar"> */}
              <img src="/icon-menu-close.svg" alt="close nav bar" />
            </button>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Track">Track Order</NavLink>
              </li>

              <li>
                {" "}
                <NavLink to="/Report">Report a Rider</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/About">About Us</NavLink>
              </li>
              <NavLink to="/Book">
                <button className="book-now mobile-book-now">Book Now</button>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
