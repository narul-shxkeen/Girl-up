import React from "react";
import "../App.css"

function Nav(){
    return  <nav className="bg-[#502E2A] text-white flex justify-between px-10">
    <img className="h-20 rounded-full px-1 py-1 relative top-8" src="/images/logo.png"/>
    <div className="flex justify-between py-4 gap-4">
    <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center ">About Us</button>
    <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center ">Events</button>
    <button className="px-1 rounded hover:bg-gray-700">Meet the team</button>
    <button className="px-1 rounded hover:bg-gray-700">Donations</button>
    <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center">Contact Us</button>
    </div>
  </nav>
}

export default Nav