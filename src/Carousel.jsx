import React, { useState } from "react";
import "./App.css";

const images = [
  {
    src: "/RAR--Icon-Fill-Form.svg",
    heading: "Fill Form",
    description: "Fill out the form provided below with a detailed report",
  },
  {
    src: "/RAR--Icon-Attach-Document.svg",
    heading: "Attach Document",
    description: "Attach any supporting documents or images ",
  },
  {
    src: "/RAR--Icon-Submit-Report.svg",
    heading: "Submit Report",
    description: " Click Submit to send your report",
  },

];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    const visibleImages = window.innerWidth >= 1024 ? 3 : 2;
    const endIndex = (currentIndex + visibleImages) % images.length;
    return endIndex > currentIndex
      ? images.slice(currentIndex, endIndex)
      : [...images.slice(currentIndex), ...images.slice(0, endIndex)];
  };

  return (
    <div className="carousel-container ">
      <div className="carousel-inner ">
        {getVisibleImages().map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image.src}
              alt={image.heading}
              className="carousel-image"
            />
            <div className="carousel-text flex flex-col gap-3">
              <h3 className="text-[1rem] sm:text-xl text-[#004039] font-bold leading-[1.5rem]">
                {image.heading}
              </h3>
              <p className="text-[0.7rem] sm:text-xs text-[#5F5F5F] font-bold tracking-wide">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={handlePrev}>
        &#9664;
      </button>
      <button className="carousel-control-next" onClick={handleNext}>
        &#9654;
      </button>
    </div>
  );
};

export default CustomCarousel;
