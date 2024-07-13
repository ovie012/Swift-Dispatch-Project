import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "./Payment.jsx";

const Form = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [expectedDropOffDate, setExpectedDropOffDate] = useState(new Date());
  const [formValues, setFormValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    service: "",
    pickupLocation: "",
    dropOffLocation: "",
    receiverName: "",
    receiverPhoneNumber: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const formatDate = (date) => {
    return format(date, "yyyy-MM-dd");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.phoneNumber)
      tempErrors.phoneNumber = "Phone number is required";
    if (!/^\d+$/.test(formValues.phoneNumber))
      tempErrors.phoneNumber = "Phone number is not valid";
    if (!formValues.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formValues.email))
      tempErrors.email = "Email is not valid";
    if (!formValues.service)
      tempErrors.service = "Service selection is required";
    if (!formValues.pickupLocation)
      tempErrors.pickupLocation = "Pickup location is required";
    if (!formValues.dropOffLocation)
      tempErrors.dropOffLocation = "Drop-off location is required";
    if (!formValues.receiverName)
      tempErrors.receiverName = "Receiver's name is required";
    if (!formValues.receiverPhoneNumber)
      tempErrors.receiverPhoneNumber = "Receiver's phone number is required";
    if (!/^\d+$/.test(formValues.receiverPhoneNumber))
      tempErrors.receiverPhoneNumber = "Receiver's phone number is not valid";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      window.location.href = "/Payment";
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div className="flex">
      <form className="bg-white rounded-lg w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="custom-label">Name</label>
            <input
              type="text"
              className="input-field text-base"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Chigozie Tosin"
            />
            {errors.name && (
              <p className="error text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="custom-label">Phone Number</label>
            <input
              type="text"
              className="input-field text-base"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              placeholder="+234 812 3456 789"
            />
            {errors.phoneNumber && (
              <p className="error text-red-500 text-xs">{errors.phoneNumber}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="custom-label">Email Address</label>
            <input
              type="text"
              className="input-field text-base"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="ChigozieTosin@example.com"
            />
            {errors.email && (
              <p className="error text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2 w-full lg:w-[45%]">
            <label className="custom-label">Select Service</label>
            <select
              className="input-field text-base"
              name="service"
              value={formValues.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="service1">Door-To-Door</option>
              <option value="service2">Interstate Delivery</option>
              <option value="service3">Distribution Delivery</option>
            </select>
            {errors.service && (
              <p className="error text-red-500 text-xs">{errors.service}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Pickup Location</label>
            <input
              type="text"
              className="input-field text-base"
              name="pickupLocation"
              value={formValues.pickupLocation}
              onChange={handleChange}
              placeholder="No 1 Mainland Off Island Road Lagos"
            />
            {errors.pickupLocation && (
              <p className="error text-red-500 text-xs">
                {errors.pickupLocation}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Drop-off Location</label>
            <input
              type="text"
              className="input-field text-base"
              name="dropOffLocation"
              value={formValues.dropOffLocation}
              onChange={handleChange}
              placeholder="No 1 Island Off Mainland Road Lagos"
            />
            {errors.dropOffLocation && (
              <p className="error text-red-500 text-xs">
                {errors.dropOffLocation}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Booking Date</label>
            <DatePicker
              selected={bookingDate}
              onChange={(date) => setBookingDate(date)}
              className="input-field text-base"
              placeholderText={formatDate(new Date())}
            />
          </div>
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Expected Drop-off Date</label>
            <DatePicker
              selected={expectedDropOffDate}
              onChange={(date) => setExpectedDropOffDate(date)}
              className="input-field text-base"
              placeholderText={formatDate(new Date())}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Receiver's Name</label>
            <input
              type="text"
              className="input-field text-base"
              name="receiverName"
              value={formValues.receiverName}
              onChange={handleChange}
              placeholder="Tosin Chigozie"
            />
            {errors.receiverName && (
              <p className="error text-red-500 text-xs">
                {errors.receiverName}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2 lg:w-[45%] w-[47%]">
            <label className="custom-label">Receiver's Phone Number</label>
            <input
              type="text"
              className="input-field text-base"
              name="receiverPhoneNumber"
              value={formValues.receiverPhoneNumber}
              onChange={handleChange}
              placeholder="+234 901 2345 678"
            />
            {errors.receiverPhoneNumber && (
              <p className="error text-red-500 text-xs">
                {errors.receiverPhoneNumber}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label className="custom-label">Notes/Instructions for Rider</label>
          <textarea
            className="w-full px-2 lg:px-4 lg:py-3 py-3 border border-[#004039] rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 text-base"
            name="notes"
            value={formValues.notes}
            onChange={handleChange}
          ></textarea>
        </div>
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
