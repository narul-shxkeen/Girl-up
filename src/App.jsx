import React,{useState} from "react";
import NavG from "./components/nav";
import Landing from "./components/landing"


function App(){
  return <div className="overflow-hidden">
    <NavG/>
    <Landing/>
    </div>
}

export default App