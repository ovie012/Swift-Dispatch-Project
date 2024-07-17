// import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <>
     <Header />
     <main>
      <div className="about-us-top">
        <h2>About</h2>
        <p>We provide the best delivery service, 
          your go-to destination for fast and reliable  deliveries
        </p>
        <section>
          <h5>Ratings</h5>
          <img src="/Star 1.svg" alt="star" className="single-star" />
          <h4>5.0</h4>
          <div className="rating-images">
            <img src="/Ellipse 24.svg" alt="rater image" />
            <img src="/Ellipse 23.svg" alt="rater image" />
            <img src="/Ellipse 26.svg" alt="rater image" />
            <img src="/Ellipse 25.svg" alt="rater image" />
            <img src="/1k+.svg" alt="rater image" />
            <aside>1k+</aside>
          </div>
        </section>
      </div>
      <div className="our-section">
        <section>
          <div className="our-section-images-one">
            <img src="/Rectangle 463.svg" alt="package received image" />
            <img src="/Rectangle 464.svg" alt="smiling customer image" />
          </div>
          <div className="our-section-text-one">
            <h4>our values</h4>
            <h3>At SwiftDispatch, we are committed to:</h3>
            <ul>
              <li>Providing a seamless delivery experience</li>
              <li>Supporting local businesses and community</li>
              <li>Building a network of reliable and efficient riders</li>
              <li>Ensuring customer satisfaction and safety above all</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="our-section-text-two">
            <h4>Our Mission</h4>
            <h3>Increased Efficiency and Reduced Cost </h3>
            <ul>
              <li>Fast Delivery</li>
              <li>Real-time Tracking</li>
              <li>Increased Efficiency</li>
              <li>Flexible Services</li>
              <li>Exceptional Customer Service</li>
            </ul>
          </div>
          <div className="our-section-images-two">
            <img src="/Rectangle 465.svg" alt="smiling customer image" />
          </div>
        </section>
        <section>
          <h3>Meet Our Team</h3>
          <p>We are passionate about making deliveries easier for everyone </p>
          <div className="inner-our-section">
            <div>
              <img src="/Rectangle 466.svg" alt="Finance Manager image" />
              <h4>Ovie Tee </h4>
              <h5>Finance Manager</h5>
            </div>
            <div>
              <img src="/Rectangle 467.svg" alt="Accountant image" />
              <h4>Chelsea Fud</h4>
              <h5>Accountant</h5>
            </div>
            <div>
              <img src="/Rectangle 468.svg" alt="Inventory Manager image" />
              <h4>Ibra Him</h4>
              <h5>Inventory Manager</h5>
            </div>
          </div>
        </section>
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
              <img src="/LP--T&R-CTA-GoTo.svg" alt="arrow icon" />
            </form>
            <p>
              By entering your information, You permit us to reach out to you
              with future <br /> communications.
            </p>
          </div>
     </main>
     <Footer />
    </>
  );
}

export default About;
