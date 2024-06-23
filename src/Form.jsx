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
      <form className="bg-white  rounded-lg  w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Name */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%] ">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Name
            </label>
            <input
              type="text"
              className="w-full px-2 lg:px-4 lg:py-3 py-2 border border-[#004039] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full px-2 lg:px-4 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>
        </div>
        <div className="flex  flex-col lg:flex-row items-center justify-between">
          {/* Email Address */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%] ">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Email Address
            </label>
            <input
              type="text"
              className="w-full px-2 lg:px-4 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Select Service */}
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Select Service
            </label>
            <select className="w-full px-2 px-4 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600">
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
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Pickup Location
            </label>
            <input
              type="text"
              className="w-full  lg:px-4 px-2 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Drop-off Location */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Drop-off Location
            </label>
            <input
              type="text"
              className="w-full  lg:px-4 px-2 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* Booking Date */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Booking Date
            </label>
            <DatePicker
              selected={bookingDate}
              onChange={(date) => setBookingDate(date)}
              className="w-full  lg:px-4 px-2 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholderText={formatDate(new Date())}
            />
          </div>

          {/* Expected Drop-off Date */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Expected Drop-off Date
            </label>
            <DatePicker
              selected={expectedDropOffDate}
              onChange={(date) => setExpectedDropOffDate(date)}
              className="w-full  lg:px-4 px-2 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholderText={formatDate(new Date())}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* Receiver's Name */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Receiver's Name
            </label>
            <input
              type="text"
              className="w-full  lg:px-4 px-2 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Receiver's Phone Number */}
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="block text-[#262626] text-[10px] lg:text-[20px]">
              Receiver's Phone Number
            </label>
            <input
              type="text"
              className="w-full lg:px-4 px-2 lg:py-3 py-2  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>
        </div>

        {/* Notes/Instructions */}
        <div className="mb-4 flex flex-col gap-2">
          <label className="block text-[#262626] text-[10px] lg:text-[20px]">
            Notes/Instructions for Rider
          </label>
          <textarea className="w-full px-2 lg:px-4 lg:py-3 py-3  border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600"></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-10 mb-10 lg:mb-20 w-full">
          <button
            type="submit"
            className="bg-[#2A9D90] text-white font-bold text-[10px] lg:text-[20px]  lg:px-[re8m] px-[7rem]  lg:py-3 py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-600"
          >
            Proceed To Make Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
