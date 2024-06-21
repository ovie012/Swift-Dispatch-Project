import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import LandingPage from './LandingPage'
import { Routes, Route } from "react-router-dom";
import Book from "./Book.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <LandingPage/>
        <Route path="/Book" element={<Book />} />
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;
