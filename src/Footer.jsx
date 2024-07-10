import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="/">
              <h1> <img src="/SD-Logo--Favicon.svg" alt="Swift Dispatch logo" /> SwiftDispatch</h1>
            </Link>
            <div>
              <img src="/LP--FT-Icon-GPS.svg" alt="location icon" />
              <h6>Nigeria - English</h6>
            </div>
          </div>
          <span></span>
          <div className="footer-nav">
            <nav>
              <ul>
                <li>Blog</li>
                <li>Support</li>
                <li>Security</li>
                <li>About Us</li>
                <li>Report A Rider</li>
              </ul>
              <ul>
                <li>FAQ</li>
                <li>Cookies</li>
                <li>Privacy Policy</li>
                <li>Connect With Us</li>
              </ul>
            </nav>
            <div className="socials">
              <h6>Follow Us</h6>
              <div>
                <img src="/LP--FT-Icon-Facebook.svg" alt="facebook icon" />
                <img src="/LP--FT-Icon-YouTube.svg" alt="youtube icon" />
                <img src="/LP--FT-Icon-Instagram.svg" alt="instagram icon" />
                <img src="/LP--FT-Icon-LinkedIn.svg" alt="linkedln icon" />
              </div>
            </div>
          </div>
          <span></span>
          <aside>2024 - All Right Reserved</aside>
        </div>
      </footer>
    </>
  );
}

export default Footer;
