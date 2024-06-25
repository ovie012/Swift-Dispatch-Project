import "./App.css";
import BoxIcon from "./assets/BP--Icon-Box-In-&-Out.svg";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form.jsx";

function Book() {
  return (
    <>
      <Header />
      <div className="w-full h-full">
        <div className="booking-banner">
          <img
            src="/BP--Image-Dispatch-Rider-Web.png"
            alt="background image of a rider"
          />
          <img
            src="/BP--Image-Dispatch-Rider-Mobile.png"
            alt="background image of a rider"
          />
          <div className=" booking-banner-text backdrop-blur-sm">
            <h1 className="text-[1.4rem] sm:text-4xl text-[#F2FFFE] font-bold leading-[2.8rem] mb-[20px]">
              We Deliver Packages <br />
              With Ease!
            </h1>
            <h5 className="text-[0.7rem] sm:text-base text-[#DCFFFC] font-bold tracking-wide">
              Enjoy <span>20</span>% discount on your first booking.
            </h5>{" "}
            {/* the use of span in this line is incase with time the discount percentage needs to be changes */}
          </div>
        </div>

        <div className="relative  flex flex-col lg:gap-15 gap-[1.5rem] w-[90%] mx-auto ">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-2  relative top-[2rem]">
              <h1 className="lg:text-[1.2rem] text-[1rem] font-bold text-[#004039] ">
                Book Service Now
              </h1>
              <p className="text-[#5F5F5F] lg:text-[0.9rem] text-[0.7rem]">
                What Would You Need Help With Today ?
              </p>
            </div>

            <div className="container w-full lg:w-[60%]">
              <img
                src={BoxIcon}
                alt="Box icon"
                className="w-[25px] h-[25px] lg:h-[40px] lg:w-[40px]"
              />
              <p className="custom-label font-bold text-[#5F5F5F]">
                Send And Receive A Package
              </p>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;
