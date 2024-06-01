import React from "react";
import MeetTheTeam from "./meettheteam";
import Team from "./teamone"
import EventCard from "../assets/eventcard";
import EventOne from "./event1";
import { Link } from "react-router-dom";

function EventMain(){

    return( 
    <div className=""> 
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-7xl mb-1 sm:mb-3 text-center"> EVENTS</h1>
        
        <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular mt-5 sm:mt-3 text-5xl mb-1 sm:mb-3 text-center"> Recent Events: </p>
       <div className="grid md:grid-cols-3">
        <EventCard eventName="First Event: Budgeting" date = "30th March, 2024" link= "/first"/>

        </div>
        </div></div>
    )    
}

export default EventMain; 