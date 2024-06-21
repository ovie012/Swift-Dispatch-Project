import Header from "./Header";

function LandingPage() {
  return (
    <>
    <Header/>
      <main>
        <div className="banner">
          <div className="package-time">
            <div className="package-time-text">
              <h1>
                Get Your Packages <br />
                Delivered <br />
                <span className="green-text">On Time, Everytime.</span>
              </h1>
              <div className="text-with-img">
                <div>
                  <img
                    src="public/LP--H-Icon-Bike-Secured-&-Swift.svg"
                    alt="Secured and Swift icon"
                  />
                  <h4>Secured and Swift</h4>
                  <p>
                    Our Team Ensures your items
                    <br />
                    arrives quickly and safely
                  </p>
                </div>
                <div>
                  <img
                    src="public/LP--H-Icon-GPS-Real-Time.svg"
                    alt="Real Time Tracking icon"
                  />
                  <h4>Real Time Tracking</h4>
                  <p>
                    Real Time Tracking which allows
                    <br />
                    you to know where your package is
                  </p>
                </div>
              </div>
              <div className="book-now-button">
                <button className="book-now">Book Now</button>
              </div>
            </div>
            <div className="package-time-img">
              <img
                src="public/LP--H-Image-Main-Web-SVG.svg"
                alt="Package Delivery"
              />
            </div>
          </div>
        </div>
        <div className="swift-coverage">
          <div className="swift-coverage-container">
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Icon - Parcel Deliverd.svg"
                alt="delivery box icon"
              />
              <h4>848</h4>
              <p>Parcel Delivered</p>
            </div>
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Icon - Total Distance Covered.svg"
                alt="location icon"
              />
              <h4>45KM</h4>
              <p>Total Distance Covered</p>
            </div>
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Icon - Happy Client.svg"
                alt="people icon"
              />
              <h4>78</h4>
              <p>Happy Client</p>
            </div>
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Icon - Total Riders.svg"
                alt="rider icon"
              />
              <h4>32</h4>
              <p>Total Riders</p>
            </div>
          </div>
        </div>
        <div className="swift-package">
          <div className="boxed-package">
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Icon - Customer Support.svg"
                alt="customer support icon"
              />
              <h4>Customer Support</h4>
              <p>
                24/7 Customer Support to inquire <br />
                about their orders
              </p>
            </div>
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Icon - Order Management.svg"
                alt="online shopping icon"
              />
              <h4>Order Management</h4>
              <p>
                Track Status, Place Delivery Order, <br />
                Update Delivery Information
              </p>
            </div>
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Icon - Real-Time Tracking.svg"
                alt="location icon"
              />
              <h4>Real-Time Tracking</h4>
              <p>
                Live Update on Package location <br />
                and estimated delivery time
              </p>
            </div>
          </div>
          <div className="list-package">
            <section className="banner-section">
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Image - Black Rider.svg"
                alt="delivery driver"
              />
              <img
                src="./SwiftDispatch - Assets/Landing Page/VP Image - Lady Receiver.svg"
                alt="customer"
              />
            </section>
            <section className="list-section">
              <div>
                <h3>
                  Increased Efficiency <br />
                  and Reduced Cost
                </h3>
                <p>
                  Our cutting edge dispatch Logistics platform and <br />
                  expert team ensure your package arrive quickly and <br />
                  efficiently, so you can focus on growing your <br />
                  business. Get your packages delivered quickly and <br />
                  on-time
                </p>
                <ul>
                  <li>Fast Delivery</li>
                  <li>Real-time Tracking</li>
                  <li>Increased Efficiency</li>
                  <li>Flexible Services</li>
                  <li>Exceptional Customer Services</li>
                  <button className="quote-button">Get a Quote now</button>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="swift-services">
          <div className="services">
            <div className="services-text">
              <h4>Services</h4>
              <h2>
                We provide <br />
                Awesome <br />
                Services
              </h2>
              <p>
                Ensuring efficient, reliable and <br />
                cost-effective movement of goods
              </p>
            </div>
            <div className="services-img">
              <div className="linear-gradient"></div>
              <div className="services-img-icons">
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/SER Icon - Door To Door.svg"
                    alt="truck icon"
                  />
                  <h4>
                    Door to Door <br />
                    Delivery
                  </h4>
                </div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/SER Icon - Door To Door.svg"
                    alt="delivered icon"
                  />
                  <h4>
                    Perishable <br />
                    Good Delivery
                  </h4>
                </div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/SER Icon - Scheduled.svg"
                    alt="truck icon"
                  />
                  <h4>
                    Scheduled <br />
                    Delivery
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="tracking">
            <h4>Real-Time Tracking</h4>
            <p>Track your deliveries with ease.</p>
            <div>
              <img
                src="./SwiftDispatch - Assets/Landing Page/RTT - Google Map.svg"
                alt="map"
              />
              <form action="post">
                <input
                  className="tracking-id"
                  placeholder="Tracking ID"
                  type="text"
                  id="track"
                  name="track"
                />
                <img
                  src="./SwiftDispatch - Assets/Landing Page/Arrow 2.svg"
                  alt="submit icon"
                />
              </form>
            </div>
          </div>
          <div className="reviews">
            <h4>Testimonials & Reviews</h4>
            <p>Feedbacks from past and existing users.</p>
            <div className="testimonials">
              <div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                </div>
                <p>
                  SwitchDispatch provides excellent and <br />
                  top-notch services in delivery with <br />
                  efficient database.
                </p>
                <h6>Ajose Rebecca</h6>
              </div>
              <div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                </div>
                <p>
                  It has been a wonderful partnership <br />
                  experience, as their swift dispatches <br />
                  has enhances our sales massively.
                </p>
                <h6>Abdulwahab Mohammed</h6>
              </div>
              <div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                </div>
                <p>
                  I enjoy their prompt services. <br />
                  No panic, no stress and no headache. <br />
                  My deliveries are always intact.
                </p>
                <h6>Adeyeye Esther</h6>
              </div>
              <div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                </div>
                <p>
                  All our delivery issues from one state <br />
                  to another were solved by <br />
                  SwiftDispatch within the blink of an eye.
                </p>
                <h6>Emonefe Ovie</h6>
              </div>
              <div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                </div>
                <p>
                  When it comes to delivery services, <br />
                  only SwiftDispatch does it best <br />
                  without regrets.
                </p>
                <h6>Adeyeye Oluwafunmike</h6>
              </div>
              <div>
                <div>
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                  <img
                    src="./SwiftDispatch - Assets/Landing Page/favourites-black-star-symbol_icon-icons.com_54534 1.svg"
                    alt="star icon"
                  />
                </div>
                <p>
                  Transportation of goods with <br />
                  SwitchDispatch has reduced our cost <br />
                  with their professionalism.
                </p>
                <h6>Akpah Sunday</h6>
              </div>
            </div>
          </div>
          <div className="mailing">
            <h3>Subscribe to our mailing list</h3>
            <form action="post">
              <input
                type="text"
                id="mail"
                name="mail"
                placeholder="Email Address"
              />
              <img
                src="./SwiftDispatch - Assets/Landing Page/Arrow 2.svg"
                alt="arrow icon"
              />
            </form>
            <p>
              By entering your information, You permit us to reach out to you
              with future <br /> communications.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
