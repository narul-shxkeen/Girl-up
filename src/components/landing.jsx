import React from "react";
import Home from "./home";
import Get_involved from "./get_involved";
import Project from "./project";
import "../App.css"

function Landing(){
    return <div className="bg-[#EADCCB] w-[100vw] h-[90vh] flex justify-center z-10 overflow-hidden">
  
        <div className="bg-[#F5F5F5] flex flex-col w-11/12 rounded-[65px] h-[80vh] mt-8 items-center overflow-hidden justify-center z-0">
            <div className="overflow-y-scroll h-full w-full">
                <Home className=""/>
                <Get_involved/>
                <Project/>
            </div>
        </div>
            </div>
}

export default Landing