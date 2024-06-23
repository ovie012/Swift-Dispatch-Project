import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function Report() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-[80px] bg-red-800 pb-[80px] w-[90%] mx-auto">
          <div className="font-bold lg:text-[55px] lg:w-[55%] flex flex-col gap-5">
            <p className="text-[#004039]">
              We've Got Your Back:{" "}
              <span className="text-[#BC0000]">Report</span> Any Issues with Our
              Riders
            </p>
            <p className="font-normal lg:text-[20px] text-[5F5F5F] text-justify">
              We value your feedback! If you've had a issue with one of our
              riders, please let us know so we can make it right. Your report
              will help us improve our services and ensure a better experience
              for everyone.
            </p>
          </div>

          <div className=" w-[45%]">
            <img
              src="public\RAR--Illustration-Dispatch-Rider-Web.png"
              alt="dispatch rider"
            ></img>
          </div>
        </div>
        <div className="bg-white w-[90%] mx-auto">
          <Link to="/Report">
            <button className="py-3 rounded-lg px-5  border border-[#394d49] ">
              Report a Rider
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Report;
