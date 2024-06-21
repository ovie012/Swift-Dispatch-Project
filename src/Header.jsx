import React, { useEffect, useState } from 'react';

function Header () {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <>
            <header className={isScrolled ? 'scrolled' : ''}>
                <div className="header">
                    <h2 className="logo">SwiftDispatch</h2>
                    <nav className="nav">
                        <h3>Home</h3>
                        <h3>Track Order</h3>
                        <h3>Payment</h3>
                        <h3>Report a Rider</h3>
                        <button className="book-now">Book Now</button>
                    </nav>
                    <button className="mobile-click-open" onClick={toggleMobileNav}>
                        {/* <img src="./SwiftDispatch - Assets/Landing Page/icon-menu.svg" alt="click for mobile nav"> */}
                        <img src="public/icon-menu.svg" alt="click for mobile nav" />
                    </button>
                    <nav className={`mobile-nav ${isMobileNavOpen ? 'active' : ''}`}>
                        <button className="mobile-click-close" onClick={toggleMobileNav}>
                            {/* <img src="./SwiftDispatch - Assets/Landing Page/icon-menu-close.svg" alt="close nav bar"> */}
                            <img src="public/icon-menu-close.svg" alt="close nav bar" />
                        </button>
                        <ul>
                            <li>Home</li>
                            <li>Track Order</li>
                            <li>Payment</li>
                            <li>Report a Rider</li>
                            <button className="mobile-book-now">Book Now</button>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;