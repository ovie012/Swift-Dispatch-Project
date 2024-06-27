import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import stopwatch from "./assets/RAR--Illustration-Stopwatch.svg";
import TwoPeople from "./assets/RAR--Illustration-Two-People.svg";
import DamagedPhone from "./assets/RAR--Illustration-Damaged-Phone.svg";

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

          <div className="bg-[#DCFFFC] w-full">
            <div className="lg:max-w-4xl mx-auto py-10 w-[90%]">
              <div className="flex flex-col lg:gap-5">
                <h1 className="text-[1.4rem] sm:text-2xl text-[#004039] font-bold leading-[2.8rem]">
                  What To Report
                </h1>
                <h5 className="text-[0.7rem] sm:text-sm text-[#5F5F5F] font-bold tracking-wide">
                  We want to know if you've experienced
                  <br /> any of these, or similar issues with our
                  <br className="hidden lg:block" /> riders
                </h5>
              </div>
              <div className="flex flex-col gap-20 items-center justify-between ">
                <div className="flex flex-row items-center justify-between w-full">
                  <img
                    src={stopwatch}
                    alt="Stopwatch icon"
                    className="w-50 h-50"
                  />
                  <div className="flex flex-col items-center mx-5">
                    <img
                      src="/RAR--square.png"
                      alt="Square"
                      className="w-[50%] h-[50%]"
                    />
                    <img src="/RAR--line.png" alt="Line" className="" />
                  </div>
                  <div className="max-w-md">
                    <h1 className="text-lg font-bold">
                      Late Arrival or Not Showing Up
                    </h1>
                    <h5 className="text-sm">
                      Have you had an experience of our riders not showing up
                      with your package without a tangible reason, or continuous
                      late delivery of your product?
                    </h5>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <img
                    src={TwoPeople}
                    alt="Two People icon"
                    className="w-50 h-50"
                  />
                  <div className="flex flex-col items-center mx-5">
                    <img
                      src="/RAR--square.png"
                      alt="Square"
                      className="w-[50%] h-[50%]"
                    />
                    <img src="/RAR--line.png" alt="Line" className="" />
                  </div>
                  <div className="max-w-md">
                    <h1 className="text-lg font-bold">
                      Rude And Unprofessional Attitude
                    </h1>
                    <h5 className="text-sm">
                      We at SwiftDispatch frown at any form of
                      unprofessionalism. Has any of our riders spoken to you
                      rudely or attended to you in an inappropriate manner?
                    </h5>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <img
                    src={DamagedPhone}
                    alt="Damaged Phone icon"
                    className="w-50 h-50"
                  />
                  <div className="flex flex-col items-center mx-5">
                    <img
                      src="/RAR--square.png"
                      alt="Square"
                      className="w-[50%] h-[50%]"
                    />
                    <img src="/RAR--line.png" alt="Line" className="" />
                  </div>
                  <div className="max-w-md">
                    <h1 className="text-lg font-bold">
                      Mishandling or Loss of Package
                    </h1>
                    <h5 className="text-sm">
                      Have you met your package in a damaged state or have you
                      lost a package as a result of carelessness of our riders?
                      Do let us know about your experience.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Report;
