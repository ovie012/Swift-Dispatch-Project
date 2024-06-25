import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

function Report() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="w-full flex-grow">
          <div className="flex flex-col lg:flex-row items-center justify-between pt-[8rem] lg:pt-[5rem]">
            <div className="report-banner-text flex flex-col lg:gap-[2rem] gap-[1rem] w-[90%] lg:w-[50%] mx-auto lg:left-[5%]">
              <p className="text-[#004039] text-[1.4rem] sm:text-4xl font-bold lg:tracking-wider lg:leading-[2.8rem]">
                We've Got Your Back:
                <br />
                <span className="text-[#BC0000]">Report</span> Any Issues with{" "}
                <br />
                Our Riders
              </p>
              <h5 className="text-[0.6rem] sm:text-base font-bold lg:tracking-wide text-[#5F5F5F] text-justify">
                We value your feedback! If you've had a issue with one of our
                riders,
                <br className="lg:block hidden" /> please let us know so we can
                make it right. Your report will help us
                <br className="lg:block hidden" /> improve our services and
                ensure a better experience for everyone.
              </h5>
              <Link to="/Report">
                <div className="mb-[50px]">
                  <button className="text-[0.9rem] font-bold w-[150px] h-[45px] hover:bg-[#004039] text-[#004039] hover:text-white border border-1 border-[#004039] hover:border-white rounded-lg">
                    Report a Rider
                  </button>
                </div>
              </Link>
            </div>

            <div className="lg:w-[50%] w-full flex items-center justify-center">
              <img
                src="/RAR--Illustration-Dispatch-Rider-Web.png"
                alt="dispatch rider"
                className="hidden lg:block"
              ></img>
              <img
                src="/RAR--Illustration-Dispatch-Rider-Mobile.png"
                alt="dispatch rider"
                className="block lg:hidden"
              ></img>
            </div>
          </div>

          <div className="bg-[#DCFFFC] ">
            <div className=" relative left-[5%] flex flex-col lg:gap-5">
              <h1 className="text-[1.4rem] sm:text-2xl text-[#004039] font-bold leading-[2.8rem] ">
                What To Report
              </h1>
              <h5 className="text-[0.7rem] sm:text-sm text-[#5F5F5F] font-bold tracking-wide">
                We want to know if you've experienced<br/> any of these, or similar
                issues with our<br  className="hidden lg:block"/> riders
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Report;
