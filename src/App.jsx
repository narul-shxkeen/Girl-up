import React,{useState} from "react";
import NavG from "./components/nav";
import Landing from "./components/landing"
import About from "./components/about"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App(){

  return <div className="overflow-hidden">
    <Router>
    <NavG/>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        // Add other routes here
      </Routes>
    </Router>
    </div>
}

export default App