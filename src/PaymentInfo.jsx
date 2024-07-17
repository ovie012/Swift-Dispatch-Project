// src/PaymentInfo.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

function PaymentInfo() {
  const { totalAmount } = useContext(AppContext);

  return (
    <>
      <main className="payment-info-main">
        <div className="payment-info-container">
          <div className="linear-gradient-div"></div>
          <div className="payment-info">
            <Link to="/Payment">
              <div className="back-arrow">
                <img src="/bx-arrow-back.svg" alt="go back arrow" />
                <aside>back</aside>
              </div>
            </Link>
            <h2>Payment Information</h2>
            <form action="POST">
              <h6>Amount</h6>
              <input
                type="text"
                value={`#${totalAmount.toFixed(2)}`}
                readOnly
              />
            </form>
            <form action="POST">
              <h6>CardHolder's Name</h6>
              <input type="text" />
            </form>
            <form action="POST">
              <h6>Card Number</h6>
              <input type="number" />
            </form>
            <section>
              <form action="POST">
                <h6>Expiration Date</h6>
                <div className="exp-date">
                  <input type="number" />
                  <input type="number" />
                </div>
              </form>
              <form action="POST">
                <h6>CVC code</h6>
                <input type="number" minLength={3} maxLength={3} />
              </form>
            </section>
            <Link to="/Success">
              <button>Proceed To Make Payment</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default PaymentInfo;
