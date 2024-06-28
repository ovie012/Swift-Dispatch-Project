import { Link } from "react-router-dom";

function PaymentInfo() {
    return (
        <>
            <main className="payment-info-main">
                <div className="payment-info-container">
                    <div className="linear-gradient-div"></div>
                    <div className="payment-info">
                        <Link to="/Payment">
                            <img src="/bx-arrow-back.svg" alt="go back arrow" className="back-arrow" />
                        </Link>
                        <h2>Payment Information</h2>
                        <form action="POST">
                            <h6>Amount</h6>
                            <input type="text" />
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
                                <input type="number" minLength={3} maxLength={3} name="" id="" />
                            </form>
                        </section>
                        <button>Proceed To Make Payment</button>
                    </div>
                </div>
            </main>
        </>
    )
};

export default PaymentInfo;