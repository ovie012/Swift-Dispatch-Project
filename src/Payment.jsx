import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Payment() {
  return (
    <>
      <Header />
      <main>
        <div className="payment-banner">
          <img
            src="/PS--Image-Delivery-Box-Web.png"
            alt="background image of delivery box"
          />
          <img
            src="/PS--Image-Delivery-Box-Mobile.png"
            alt="background image of delivery box"
          />
          <div className="payment-banner-text">
            <h1 className="text-[1.4rem] sm:text-5xl text-[#F2FFFE] font-bold leading-[2.8rem] mb-[20px]">
              Exceptional <br />
              Delivery Services
            </h1>
            <h5 className="text-[0.7rem] sm:text-xl text-[#DCFFFC] font-bold tracking-wide">
              Enjoy <span>20</span>% discount on your first booking.
            </h5>{" "}
            {/* the use of span in this line is incase with time the discount percentage needs to be changes */}
          </div>
        </div>
        <div className="fill-form">
          <div className="fill-form-container sm:bg-[#DCFFFC] py-[20px] sm:py-[50px] px-[20px] rounded-2xl">
            <div className="first-forms">
              <form action="post">
                <h6>Origin</h6>
                <input type="text" placeholder="Set Pickup Location" />
              </form>
              <form action="post">
                <h6>Delivery Location</h6>
                <input type="text" placeholder="Set Destination" />
              </form>
            </div>
            <div className="second-form">
              <form action="post">
                <h6>Describe Your Shipment</h6>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Describe how big and wide the package is. state if the package is fragile and what is in the package."
                ></textarea>
              </form>
            </div>
            <div className="third-forms">
              <form action="post">
                <h6>Weight (KG)</h6>
                <input type="number" placeholder="Enter Weight" />
              </form>
              <form action="post">
                <h6>Value (NGN)</h6>
                <input type="number" placeholder="Estimated Value" />
              </form>
            </div>
            <div className="delivery">
              <h6>Delivery Service</h6>
              <div className="delivery-service">
                <div>
                  <img
                    src="/PS--Icon-Delivery-Truck.svg"
                    alt="delivery truck"
                  />
                  <section>
                    <h4>Express Delivery</h4>
                    <h5>We ship in 1-2 Hours</h5>
                  </section>
                </div>
                <div>
                  <img
                    src="/PS--Icon-Delivery-Truck.svg"
                    alt="delivery truck"
                  />
                  <section>
                    <h4>Standard Delivery</h4>
                    <h5>We ship in 24 Hours</h5>
                  </section>
                </div>
                <div>
                  <img
                    src="/PS--Icon-Delivery-Truck.svg"
                    alt="delivery truck"
                  />
                  <section>
                    <h4>Interstate Delivery</h4>
                    <h5>We ship in 2-3 Days</h5>
                  </section>
                </div>
              </div>
            </div>
            <div className="estimated-price">
              <form action="post">
                <h6>Estimated Price</h6>
                <input type="text" />
              </form>
            </div>
            <div className="payment-options">
              <h6>Payment Options</h6>
              <div>
                <input type="checkbox" />
                <section>
                  <h4>Bank Card</h4>
                  <h5>Pay with Verve, Visa, MasterCard.</h5>
                </section>
                <section>
                  <img src="/PS--Logo-Verve.svg" alt="verve" />
                  <img src="/PS--Logo-Visa.svg" alt="visa logo" />
                  <img src="/PS--Logo-Mastercard.svg" alt="Master card logo" />
                </section>
              </div>
              <div>
                <input type="checkbox" />
                <h4>Bank Transfer</h4>
              </div>
              <div>
                <input type="checkbox" />
                <h4>Cash on Pickup / Delivery</h4>
              </div>
            </div>
            <Link to="/PaymentInfo">
              <button className="submit-first">Proceed</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
