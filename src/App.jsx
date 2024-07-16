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
import Receipt from "./Receipt.jsx";
import Success from "./Success.jsx";
import About from "./About.jsx";


const App = () => {

  
  return (
    <div>
      {/* <Header /> */}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/Payment/PaymentInfo" element={<PaymentInfo />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
