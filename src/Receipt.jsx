import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Receipt () {
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
                            <img src="/PS--Icon-Delivery-Truck.svg" alt="delivery truck" className="delivery-truck-img" />
                            <div>
                                <h4>Door-To-Door Delivery</h4>
                                <div className="inline-delivery">
                                    <div className="receipt-circle">
                                        <img src="/Tick-Mark--Green.svg" alt="tick" />
                                    </div>
                                    <p>Express Delivery</p>
                                </div>
                            </div>
                        </div>
                        <h5>#10,000.00</h5>
                    </section>
                    <span></span>
                    <section>
                        <div>
                            <h5>Payment</h5>
                            <p>visa **56 <img src="/PS--Logo-Visa.svg" alt="visa logo" /></p>
                        </div>
                        <div>
                            <h5>Delivery</h5>
                            <h6>Address</h6>
                            <p>Suite 54, Nicon Tower,
                            Victoria Island, Lagos.</p>
                        </div>
                    </section>
                    <span></span>
                    <section>
                        <h5>Order Summary</h5>
                        <div>
                            <p>Amount</p>
                            <p>#10,000</p>
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
                        <h4>#10,050.00</h4>
                    </section>
                    <Link to="/Payment/PaymentInfo">
                        <button>Proceed</button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Receipt;