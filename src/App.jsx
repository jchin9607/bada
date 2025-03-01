import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sessions from "./pages/Sessions";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[50px] w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
