import React from "react";
import "./App.css";
import arrow from "./assets/RAR--Icon-Next-Arrow.svg";

const images = [
  {
    src: "/RAR--Icon-Fill-Form.svg",
    heading: "Fill Form",
    description: "Fill out the form provided below with a detailed report",
  },
  {
    src: "/RAR--Icon-Attach-Document.svg",
    heading: "Attach Documents",
    description: "Attach any supporting documents or images",
  },
  {
    src: "/RAR--Icon-Submit-Report.svg",
    heading: "Submit Report",
    description: "Click Submit to send your report",
  },
];

const CustomCarousel = () => {
  return (
    <div className="flex flex-row items-center justify-between w-[90%] mx-auto my-10">
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center justify-between">
            <div className="">
              <img
                src={image.src}
                className="lg:w-[90%] lg:h-[90%]"
                alt={image.heading}
              />
            </div>
            <div className="text-center">
              <h2 className="text-[0.9rem] lg:text-2xl text-[#004039] font-bold lg:leading-[2.8rem]">
                {image.heading}
              </h2>
              <p className="text-[0.7rem] lg:text-sm text-[#5F5F5F] font-bold tracking-wide">
                {image.description}
              </p>
            </div>
          </div>
          {index < images.length - 1 && (
            <div>
              <img src={arrow} alt="arrow" className="w-6 h-6" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomCarousel;
