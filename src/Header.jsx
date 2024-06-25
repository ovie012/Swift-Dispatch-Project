import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="header">
          <h2 className="logo">SwiftDispatch</h2>
          <nav className="nav">
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/Track">
              <h3>Track Order</h3>
            </Link>
            <Link to="/Payment">
              <h3>Payment</h3>
            </Link>
            <Link to="/Report">
              <h3>Report a Rider</h3>
            </Link>
            <Link to="/Book">
              <button className="book-now">Book Now</button>
            </Link>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Track">Track Order</Link>
              </li>
              <li>
                <Link to="/Payment">Payment</Link>
              </li>
              <li>
                {" "}
                <Link to="/Report">Report a Rider</Link>
              </li>
              <Link to="/Book">
                <button className="book-now mobile-book-now">Book Now</button>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
