import React from "react";
import TeamCard from "../../assets/teamcard";
import Anam from "./team/anamahmed.jpeg";
import Bhoomika from "./team/bhoomikaagrawal.jpg"; 
import Manya from "./team/manyagarg.jpg"; 
import Vaibhav from "./team/vaibhavshokeen.jpeg";


function Website(){

    return( 
    <div className=""> 
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-7xl mb-1 sm:mb-3 text-center"> Wesbite</h1>
        <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular mt-5 sm:mt-3 text-5xl mb-1 sm:mb-3 text-center"> Team: </p>
        <div className="grid md:grid-cols-3 md:mb-36 mb-12">
        <TeamCard name="Manya Garg" batch="UG2023" img={Manya} object="object-top"/>
        <TeamCard name="Vaibhav Shokeen" batch="UG2023" img={Vaibhav} />
        <TeamCard name="Anam Ahamed" batch="UG2023" img={Anam}/>
        <TeamCard name="Bhoomika Agrawal" batch="UG2023" img={Bhoomika} object="object-top"/>
        </div>
        </div></div>
    )    
}

export default Website; 