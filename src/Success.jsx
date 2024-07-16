import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function Success() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="/public/Group 25.png"
            alt="success"
            className="w-3/4 sm:w-1/2 lg:w-1/4"
          />
          <p className="font-medium  text-center text-xl lg:text-3xl mt-4">
            Thank you, payment successful!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
