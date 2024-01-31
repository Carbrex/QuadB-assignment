import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="flex flex-wrap gap-10 justify-center py-10 bg-slate-700 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show/:id" element={<Show />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
