import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import LandingPage from './LandingPage'
import { Routes, Route } from "react-router-dom";
import Book from "./Book.jsx";
import Payment from "./Payment.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/Track" element={<Track />} />
        <Route path="/Report" element={<Report />} /> */}
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Book" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
