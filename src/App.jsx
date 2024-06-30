import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import Book from "./Book.jsx";
import Report from "./Report.jsx";
import Payment from "./Payment.jsx";
import PaymentInfo from './PaymentInfo.jsx'
import Track from "./Track.jsx";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Payment/PaymentInfo" element={<PaymentInfo />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
