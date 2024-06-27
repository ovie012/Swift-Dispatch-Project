import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Track() {
  return (
    <>
      <Header />
      <main>
        <div className="track-container">
          <h2>Real-Time Tracking</h2>
          <h6>Track your deliveries with ease.</h6>
          <div className="track-map-container">
            <div className="track-map">
              <img src="/RTT--Image-Google-Map-Web.png" alt="map" />
              <img src="/RTT--Image-Google-Map-Mobile.png" alt="map" />
            </div>
            <div className="track-showing">
              <h3>#SD-12345</h3>
              <h6>The package is heading to you!</h6>
              <div className="span-image-horizontal">
                <img
                  src="/RTT--DT-Icon-Pickup-Box.svg"
                  alt="item packaged icon"
                />
                <span></span>
                <img
                  src="/RTT--DT-Icon-Delivery-Truck.svg"
                  alt="delivery truck icon"
                />
                <span></span>
                <img
                  src="/RTT--DT-Icon-Delivered-Check-Box.svg"
                  alt="item delivered icon"
                />
              </div>
              <h5>Destination</h5>
              <div className="package-destination">
                <img src="/RTT--DT-Icon-GPS.svg" alt="location icon" />
                <div>
                  <h4>Imelda Onyebueke</h4>
                  <p>
                    Suite 54, Nicon Tower, <br />
                    Victoria Island, Lagos.
                  </p>
                </div>
              </div>
              <h5>Last Update</h5>
              <div className="last-update">
                <div>
                  <img
                    src="/RTT--DT-Icon-Pickup-Box.svg"
                    alt="item packaged icon"
                  />
                  <span></span>
                  <img
                    src="/RTT--DT-Icon-Delivery-Truck.svg"
                    alt="delivery truck icon"
                  />
                  <span></span>
                  <img
                    src="/RTT--DT-Icon-Delivery-Truck.svg"
                    alt="delivery truck icon"
                  />
                </div>
                <div>
                  <section>
                    <h4>From Sender</h4>
                    <section className="last-update-location">
                      <p>
                        House 20, Park View Estate, <br />
                        Lekki, Lagos.
                      </p>
                      <p>
                        May 27 <br />
                        <aside>12:00</aside>
                      </p>
                    </section>
                  </section>
                  <section>
                    <h4>Island Drop Point</h4>
                    <section className="last-update-location">
                      <p>
                        Admiralty Road, <br />
                        Lagos.
                      </p>
                      <p>
                        May 27 <br />
                        <aside>12:15</aside>
                      </p>
                    </section>
                  </section>
                  <section>
                    <h4>Island Drop Point</h4>
                    <section className="last-update-location">
                      <p>
                        Chevron Drive, <br />
                        Lagos.
                      </p>
                      <p>
                        May 27 <br />
                        <aside>12:20</aside>
                      </p>
                    </section>
                  </section>
                </div>
              </div>
              <Link to="/Report">
                <button>Report A Problem</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Track;
