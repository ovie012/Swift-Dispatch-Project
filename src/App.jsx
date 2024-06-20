
import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./Book.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Book" element={<Book />} />
        </Routes>
    </div>
  );
};

export default App;
