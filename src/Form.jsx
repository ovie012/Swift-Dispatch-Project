import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Form = () => {
   const [bookingDate, setBookingDate] = useState(new Date());
   const [expectedDropOffDate, setExpectedDropOffDate] = useState(new Date());

   const formatDate = (date) => {
     return format(date, "yyyy-MM-dd");
   };

  return (
    <div className="  flex ">
      <form className="bg-white rounded-lg  w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Name */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%] ">
            <label className="custom-label">Name</label>
            <input type="text" className="input-field" />
          </div>

          {/* Phone Number */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="custom-label">Phone Number</label>
            <input type="text" className="input-field" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Email Address */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%] ">
            <label className="custom-label">Email Address</label>
            <input type="text" className="input-field" />
          </div>

          {/* Select Service */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="custom-label">Select Service</label>
            <select className="input-field">
              <option value="">Select a service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* Pickup Location */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Pickup Location</label>
            <input type="text" className="input-field" />
          </div>

          {/* Drop-off Location */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Drop-off Location</label>
            <input type="text" className="input-field" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* Booking Date */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Booking Date</label>
            <DatePicker
              selected={bookingDate}
              onChange={(date) => setBookingDate(date)}
              className="input-field"
              placeholderText={formatDate(new Date())}
            />
          </div>

          {/* Expected Drop-off Date */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Expected Drop-off Date</label>
            <DatePicker
              selected={expectedDropOffDate}
              onChange={(date) => setExpectedDropOffDate(date)}
              className="input-field"
              placeholderText={formatDate(new Date())}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* Receiver's Name */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Receiver's Name</label>
            <input type="text" className="input-field" />
          </div>

          {/* Receiver's Phone Number */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Receiver's Phone Number</label>
            <input type="text" className="input-field" />
          </div>
        </div>

        {/* Notes/Instructions */}
        <div className="mb-4 flex flex-col gap-2">
          <label className="custom-label">Notes/Instructions for Rider</label>
          <textarea className="w-full px-2 lg:px-4 lg:py-3 py-3  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="submit-first">
            Proceed To Make Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
