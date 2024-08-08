import React from "react";
import MeetTheTeam from "./meettheteam";
import Team from "./teamone"
import EventCard from "../assets/eventcard";
import EventOne from "./event1";
import { Link } from "react-router-dom";

function Donations(){

    return( 
    <div className=""> 
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
    <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular md:mt-48 mt-32 text-5xl mb-1 sm:mb-3 text-center"> Please reach out to us at <a href = "mailto:girlupujjiwan@gmail.com" className="underline text-[#0000EE]"> girlupujjiwan@gmail.com</a> for donating </p>  
    

        </div>
        </div>
    )    
}

export default Donations; 