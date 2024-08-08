import React,{useState} from "react";
import NavG from "./components/nav";
import Landing from "./components/landing"
import About from "./components/about"
import Contact from "./components/contact-us"
import Event from "./components/event1"
import Event2 from "./components/event2"
import Event3 from "./components/event3"
import EventMain from "./components/events";
import MeetTheTeam from "./components/meettheteam";
import Internals from "./components/team/internals";
import Externals from "./components/team/externals";
import Website from "./components/team/website";
import Socialmedia from "./components/team/socialmedia";
import Donations from "./components/donations";
import FoundingTeam from "./components/team/foundingteam";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App(){

  return <div className="overflow-hidden">
    <Router>
    <NavG/>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<EventMain />} /> 
        <Route path="/first" element={<Event />} />
        <Route path="/second" element={<Event2 />} /> 
        <Route path="/third" element={<Event3 />} />
        <Route path="/team" element={<MeetTheTeam/> }/>
        <Route path="/internals" element={<Internals />}/>
        <Route path="/externals" element={<Externals />}/>
        <Route path="/website" element={<Website />}/>
        <Route path="/socialmedia" element={<Socialmedia/>}/>
        <Route path="/donations" element={<Donations/>}/>
        <Route path="/foundingteam" element={<FoundingTeam/>}/>
        // Add other routes here
      </Routes>
    </Router>
    </div>
}

export default App