import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import AboutMe from "./components/AboutMe.js";
import "./App.css";
import AgenDo from "./components/AgenDo.js";
import BagelGC from "./components/BagelGC.js";
import BISH from "./components/BISH.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/AgenDo" element={<AgenDo />} />
          <Route path="/project/BagelGC" element={<BagelGC />} />
          <Route path="/project/BISH" element={<BISH />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
