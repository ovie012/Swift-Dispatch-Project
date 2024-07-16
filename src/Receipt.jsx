// src/Receipt.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import Header from "./Header";
import Footer from "./Footer";

function Receipt() {
  const { orderDetails } = useContext(AppContext);
  const { estimatedPrice, deliveryLocation, deliveryService } = orderDetails;

    console.log("Received order details:", orderDetails);

  return (
    <>
      <Header />
      <main>
        <div className="receipt-container">
          <section>
            <h5>Order Summary</h5>
            <p>Order ID: #SD-12345</p>
            <p>Order Date: July 1, 2024</p>
          </section>
          <span></span>
          <section>
            <div className="delivery-truck-div">
              <img
                src="/PS--Icon-Delivery-Truck.svg"
                alt="delivery truck"
                className="delivery-truck-img"
              />
              <div>
                <h4>
                  {deliveryService
                    ? deliveryService.replace(/^\w/, (c) => c.toUpperCase())
                    : "Door-To-Door Delivery"}
                </h4>
                <div className="inline-delivery">
                  <div className="receipt-circle">
                    <img src="/Tick-Mark--Green.svg" alt="tick" />
                  </div>
                  <p>
                    {deliveryService
                      ? deliveryService.replace(/^\w/, (c) => c.toUpperCase()) +
                        " Delivery"
                      : "Express Delivery"}
                  </p>
                </div>
              </div>
            </div>
            <h5>{`#${estimatedPrice}`}</h5>
          </section>
          <span></span>
          <section>
            <div>
              <h5>Payment</h5>
              <p>
                visa **56 <img src="/PS--Logo-Visa.svg" alt="visa logo" />
              </p>
            </div>
            <div>
              <h5>Delivery</h5>
              <h6>Address</h6>
              <p>
                {deliveryLocation}
              </p>
            </div>
          </section>
          <span></span>
          <section>
            <h5>Order Summary</h5>
            <div>
              <p>Amount</p>
              <p>{`#${estimatedPrice}`}</p>
            </div>
            <div>
              <p>Discount</p>
              <p>#0.00</p>
            </div>
            <div>
              <p>Tax</p>
              <p>#50.00</p>
            </div>
          </section>
          <span></span>
          <section>
            <h4>Total</h4>
            <h4>{`#${
              (parseFloat(estimatedPrice) + 50).toFixed(2)
            }`}</h4>
          </section>
          <Link to="/Payment/PaymentInfo">
            <button>Proceed</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Receipt;
