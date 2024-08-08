import React from "react";
import TeamCard from "../../assets/teamcard";
import Chaarvi from "./team/Chaarvi_Arora.png";
import Arshia from "./team/Arshia_Kohli.png";
import Kiah from "./team/Kiah_Mehta.png";
import Arisha from "./team/Arisha_Hegde.png";
import Rhea from "./team/Rhea_Wali.png";

function FoundingTeam(){

    return( 
    <div className=""> 
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-7xl mb-1 sm:mb-3 text-center"> Founding Team </h1>
        <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular mt-5 sm:mt-3 text-5xl mb-1 sm:mb-3 text-center"> Founder: </p>
        <div className="grid md:grid-cols-3">
        <TeamCard name="Arshia Kohli" batch="UG25" img={Arshia} object=""/>
        </div>
        <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular mt-5 sm:mt-3 text-5xl mb-1 sm:mb-3 text-center"> Founding Presidents: </p>
        <div className="grid md:grid-cols-3 md:mb-36 mb-12">
        <TeamCard name="Chaarvi Arora" batch="UG25" img={Chaarvi}/>
        <TeamCard name="Kiah Mehta" batch="UG25" img={Kiah} object="object-top"/>
        <TeamCard name="Arisha Hegde" batch="UG25" img={Arisha}/>
        <TeamCard name="Rhea Wali" batch="UG25" img={Rhea}/>
        </div>
        </div></div>
    )    
}

export default FoundingTeam; 