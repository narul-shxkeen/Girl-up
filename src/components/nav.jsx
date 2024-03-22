import React from "react";
import "../App.css"

function Nav(){
    return  <nav className="bg-black text-white flex justify-around py-2 px-36">
    <img className="h-14 w-auto px-1 py-1" src="/images/logo.png"/>
    <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center ">About Us</button>
    <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center ">Events</button>
    <button className="px-1 rounded hover:bg-gray-700">Meet the team</button>
    <button className="px-1 rounded hover:bg-gray-700">Donations</button>
    <button className="px-1 rounded hover:bg-gray-700 flex items-center justify-center">Contact Us</button>
  </nav>
}

export default Nav