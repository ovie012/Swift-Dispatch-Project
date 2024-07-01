import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import stopwatch from "./assets/RAR--Illustration-Stopwatch.svg";
import TwoPeople from "./assets/RAR--Illustration-Two-People.svg";
import DamagedPhone from "./assets/RAR--Illustration-Damaged-Phone.svg";
import CustomCarousel from "./Carousel";
import FileUpload from "./FileUpload";
import Curvy from "./assets/RAR--Shape-Curvy-Dashed-Arrow.svg";
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

          <div className="bg-[#DCFFFC] w-full reporting">
            <div className="lg:max-w-4xl mx-auto py-10 w-[90%]">
              <div className="flex flex-col lg:gap-5 what-to-report">
                <h1 className="text-[1.4rem] sm:text-2xl text-[#004039] font-bold leading-[2.8rem]">
                  What To Report
                </h1>
                <h5 className="text-[0.7rem] sm:text-sm text-[#5F5F5F] font-bold tracking-wide">
                  We want to know if you've experienced
                  <br /> any of these, or similar issues with our
                  <br className="hidden lg:block" /> riders
                </h5>
              </div>
              <div className="flex flex-col gap-20 items-center justify-between line-box-div">
                <div className="flex flex-row items-center justify-between w-full">
                  <img
                    src={stopwatch}
                    alt="Stopwatch icon"
                    className="w-50 h-50"
                  />
                  <div className="flex flex-col items-center mx-5 line-div">
                    {/* <img
                      src="/RAR--square.png"
                      alt="Square"
                      className="w-[50%] h-[50%]"
                    /> */}
                    <span className="line"></span>
                    {/* <img src="/RAR--line.png" alt="Line" className="h-[500px] w-[60px]" /> */}
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
                    <span className="line-box"></span>
                    {/* <img
                      src="/RAR--square.png"
                      alt="Square"
                      className="w-[50%] h-[50%]"
                    /> */}
                    {/* <img src="/RAR--line.png" alt="Line" className="" /> */}
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
                    {/* <img
                      src="/RAR--square.png"
                      alt="Square"
                      className="w-[50%] h-[50%]"
                    /> */}
                    {/* <img src="/RAR--line.png" alt="Line" className="" /> */}
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

          <div className="w-full mt-10">
            <div className="flex flex-col items-center">
              <h1 className="text-[1.4rem] sm:text-2xl text-[#004039] font-bold leading-[2.8rem]">
                How To Report
              </h1>
              <h5 className="text-[0.7rem] sm:text-sm text-[#5F5F5F] font-bold tracking-wide">
                Submitting a report is easy! Just follow these steps below
              </h5>
            </div>
            <div>
              <CustomCarousel />
            </div>
          </div>

          <div className="w-[90%] mx-auto">
            <h1 className="text-[#004039] font-bold lg:text-4xl text-2xl">
              Start Your Report
            </h1>
            <div className="mt-10">
              <form className=" rounded-lg w-full mb-5 ">
                <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between lg:gap-4">
                  <div className="w-full lg:w-1/2">
                    {/* Name */}
                    <div className="mb-4 flex flex-col gap-2 w-full">
                      <label className="custom-label">Rider's Name</label>
                      <input
                        type="text"
                        placeholder="Adamu Musa"
                        className="input-field"
                      />
                    </div>

                    {/* ID Number */}
                    <div className="mb-4 flex flex-col gap-2 w-full">
                      <label className="custom-label">Rider's ID Number</label>
                      <input
                        type="text"
                        placeholder="SD1176"
                        className="input-field"
                      />
                    </div>

                    {/* Location */}
                    <div className="mb-4 flex flex-col gap-2 w-full">
                      <label className="custom-label">Location</label>
                      <input
                        type="text"
                        placeholder="Sangotedo"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:ml-4">
                    <label className="custom-label text-center">
                      Write Your Detailed Report
                    </label>
                    <textarea
                      placeholder="Hello, I’m Jessica my delivery  came in..."
                      className="flex-grow px-2 lg:px-4 lg:py-3 py-3 border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 bg-[#EFEFEF]"
                    ></textarea>
                  </div>
                </div>
              </form>
              <FileUpload />
            </div>
          </div>

          <div className="bg-[#DCFFFC] mt-10 lg:mt-20 mb-5">
            <div className=" w-[90%] mx-auto flex flex-col gap-5 lg:flex-row items-center justify-between pb-5">
              <div className="w-full ">
                <img
                  src="/RAR--Illustration-Call-Attendant-Web.png"
                  alt="call attendant"
                 
                />
              </div>
              <div className="flex flex-col items-stretch justify-between lg:gap-10 gap-5 w-full ">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#004039] font-medium lg:text-[1.8rem] text-xl">
                    Why Report?
                  </h1>
                  <h3 className="text-[#5F5F5F] font-normal text-[1rem] ">
                    Your feedback matters! By reporting issues, you'll help us:
                  </h3>
                </div>
                <div className="text-[#5F5F5F]  text-[1rem] flex flex-col gap-3">
                  <div className="flex items-center  gap-3">
                    <img
                      src="/public/RAR--Icon-Charm-Circle-Tick.svg"
                      alt="tick"
                      width={20}
                      height={20}
                    />
                    <h3>Improve our services and rider performance</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="/public/RAR--Icon-Charm-Circle-Tick.svg"
                      alt="tick"
                      width={20}
                      height={20}
                    />
                    <h3>Ensure our accountability and transparency</h3>
                  </div>
                  <div className="flex items-center  gap-3">
                    <img
                      src="/public/RAR--Icon-Charm-Circle-Tick.svg"
                      alt="tick"
                      width={20}
                      height={20}
                    />
                    <h3> Provide a better experience for our customers</h3>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-[#004039] lg:text-[1.8rem] text-xl font-bold">
                    <span className="text-[#BC0000]">CALL US:</span>{" "}
                    0803475767298
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <img src={Curvy} alt="curvy arrow" className="mx-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Report;
