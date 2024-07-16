// src/Payment.js
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import Header from "./Header";
import Footer from "./Footer";

function Payment() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setOrderDetails } = useContext(AppContext);

  const handlePaymentClick = (method) => {
    setSelectedPayment(method);
  };

  const handleDeliveryClick = (service) => {
    setSelectedDelivery(service);
  };

  useEffect(() => {
    const calculateEstimatedPrice = () => {
      if (!value || !weight || !selectedDelivery) {
        setEstimatedPrice(0);
        return;
      }

      let deliveryAmount = 0;
      switch (selectedDelivery) {
        case "express":
          deliveryAmount = 10.7;
          break;
        case "standard":
          deliveryAmount = 20.3;
          break;
        case "interstate":
          deliveryAmount = 5.1;
          break;
        default:
          deliveryAmount = 0;
      }

      let price = (value * weight) / deliveryAmount;

      if (price < 2000) {
        price = 2000;
      } else if (price > 30000) {
        price = 30000;
      }

      setEstimatedPrice(price.toFixed(2));
    };

    calculateEstimatedPrice();
  }, [value, weight, selectedDelivery]);

  useEffect(() => {
    const validateForm = () => {
      if (
        selectedPayment &&
        selectedDelivery &&
        origin &&
        destination &&
        description &&
        weight &&
        value
      ) {
        setIsFormValid(true);
        setErrorMessage("");
      } else {
        setIsFormValid(false);
      }
    };
    validateForm();
  }, [
    selectedPayment,
    selectedDelivery,
    origin,
    destination,
    description,
    weight,
    value,
  ]);

  const handleSubmit = (event) => {
    if (!isFormValid) {
      event.preventDefault();
      setErrorMessage(
        "Please fill in all fields and select a delivery service and payment option."
      );
    } else {
      console.log("Order details being set:", {
        estimatedPrice,
        deliveryLocation: destination,
        deliveryService: selectedDelivery,
      });

      setOrderDetails({
        estimatedPrice,
        deliveryLocation: destination,
        deliveryService: selectedDelivery,
      });

      navigate("/Receipt");
    }
  };

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
            </h5>
          </div>
        </div>
        <div className="fill-form">
          <div className="fill-form-container sm:bg-[#DCFFFC] py-[20px] sm:py-[50px] px-[20px] rounded-2xl">
            <div className="first-forms">
              <form action="post">
                <h6>Origin</h6>
                <input
                  type="text"
                  placeholder="Set Pickup Location"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </form>
              <form action="post">
                <h6>Delivery Location</h6>
                <input
                  type="text"
                  placeholder="Set Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </form>
            </div>
            <div className="third-forms">
              <form action="post">
                <h6>Weight (KG)</h6>
                <input
                  type="number"
                  placeholder="Enter Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </form>
              <form action="post">
                <h6>Value (NGN)</h6>
                <input
                  type="number"
                  placeholder="Estimated Value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
            </div>
            <div className="delivery">
              <h6>Delivery Service</h6>
              <div className="delivery-service">
                <div
                  className={`delivery-service-chosen ${
                    selectedDelivery === "express" ? "chosen" : ""
                  }`}
                  onClick={() => handleDeliveryClick("express")}
                >
                  <img
                    src="/PS--Icon-Delivery-Truck.svg"
                    alt="delivery truck"
                  />
                  <section>
                    <h4>Express Delivery</h4>
                    <h5>We ship in 1-2 Hours</h5>
                  </section>
                </div>
                <div
                  className={`delivery-service-chosen ${
                    selectedDelivery === "standard" ? "chosen" : ""
                  }`}
                  onClick={() => handleDeliveryClick("standard")}
                >
                  <img
                    src="/PS--Icon-Delivery-Truck.svg"
                    alt="delivery truck"
                  />
                  <section>
                    <h4>Standard Delivery</h4>
                    <h5>We ship in 24 Hours</h5>
                  </section>
                </div>
                <div
                  className={`delivery-service-chosen ${
                    selectedDelivery === "interstate" ? "chosen" : ""
                  }`}
                  onClick={() => handleDeliveryClick("interstate")}
                >
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
                <h6>Estimated Price (NGN)</h6>
                <input type="text" value={estimatedPrice} readOnly />
              </form>
            </div>
            <div className="payment-options">
              <h6>Payment Options</h6>
              <div onClick={() => handlePaymentClick("bankCard")}>
                <span
                  className={`payment-method-picked ${
                    selectedPayment === "bankCard" ? "picked" : ""
                  }`}
                >
                  <img src="/Tick-Mark--Green.svg" alt="tick" />
                </span>
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
              <div onClick={() => handlePaymentClick("bankTransfer")}>
                <span
                  className={`payment-method-picked ${
                    selectedPayment === "bankTransfer" ? "picked" : ""
                  }`}
                >
                  <img src="/Tick-Mark--Green.svg" alt="tick" />
                </span>
                <h4>Bank Transfer</h4>
              </div>
              <div onClick={() => handlePaymentClick("cash")}>
                <span
                  className={`payment-method-picked ${
                    selectedPayment === "cash" ? "picked" : ""
                  }`}
                >
                  <img src="/Tick-Mark--Green.svg" alt="tick" />
                </span>
                <h4>Cash on Pickup / Delivery</h4>
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            <button className="submit-first" onClick={handleSubmit}>
              Proceed
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
