import "./App.css";
import "./App.jsx";
import BoxIcon from "./assets/BP--Icon-Box-In-&-Out.svg";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form.jsx";

function Book() {
  return (
    <>
      <Header />
      <div className="w-full h-full">
        <div className="bookbg w-full lg:h-[100vh] h-96 bg-cover bg-center">
          <div className="text-white top-20 text-shadow-default lg:left-[100px] lg:w-[60%] w-full relative items-center lg:items-start flex flex-col gap-5">
            <h1 className="lg:text-[60px] text-[20px] font-extrabold tracking-wide leading-20">
              We Deliver Packages With Ease!
            </h1>
            <p className="lg:text-[25px] text-xs font-regular tracking-wide">
              Enjoy 20% discount on your first booking.{" "}
            </p>
          </div>
        </div>

        <div className="relative  flex flex-col lg:gap-15 gap-[1.5rem] lg:mx-20 mx-10 ">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-2  relative top-[2rem]">
              <h1 className="lg:text-[30px] text-[20px] font-bold text-[#004039] ">
                Book Service Now
              </h1>
              <p className="text-[#5F5F5F] lg:text-[20px] text-[10px]">
                What Would You Need Help With Today ?
              </p>
            </div>

            <div className="border border-3 rounded-lg backdrop: border-[#394d49] bg-[#e9faf8] w-full lg:w-[60%] flex items-center lg:gap-10 gap-5 px-5 py-3">
              <img
                src={BoxIcon}
                alt="Box icon"
                className="w-[20px] h-[20px] lg:h-[100px] lg:w-[100px]"
              />
              <p className=" lg:text-[25px] text-[10px] font-bold text-[#5F5F5F]">
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
