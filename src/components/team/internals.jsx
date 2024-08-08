import React from "react";
import TeamCard from "../../assets/teamcard";
import Adya from "./team/Adya_Reddy.jpeg"; 
import Diza from "./team/Diza_Sharma.png";
import Heet from "./team/Heet_Dhawale.jpg";
import Devanganna from "./team/Devanganna_Jain.png";
import Tamanna from "./team/Tamanna_Ail.png";
import Chaarvi from "./team/Chaarvi_Arora.png";
import Kiah from "./team/Kiah_Mehta.png";
import Arpita from "./team/Arpita_Agarwal.png";

function Internals(){

    return( 
    <div className=""> 
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-7xl mb-1 sm:mb-3 text-center"> INTERNALS</h1>
        <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular mt-5 sm:mt-3 text-5xl mb-1 sm:mb-3 text-center"> Team: </p>
        <div className="grid md:grid-cols-3 md:mb-36 mb-12">
        <TeamCard name="Adya Reddy" batch="UG2023" img={Adya} object="object-top"/>
        <TeamCard name="Diza Sharma" batch="UG2023" img={Diza} object="object-top"/>
        <TeamCard name="Heet Dhawale" batch="UG2023" img={Heet} object="object-top"/>
        <TeamCard name="Devanganna Jain" batch="UG2023" img={Devanganna} object="object-top"/>
        <TeamCard name="Tamanna Ail" batch="UG2023" img={Tamanna} object="object-top"/>
        <TeamCard name="Chaarvi Arora" batch="UG25" img={Chaarvi}/>
        <TeamCard name="Kiah Mehta" batch="UG25" img={Kiah} object="object-top"/>
        <TeamCard name="Arpita Agarwal" batch="UG2023" img={Arpita} object="object-top"/>
        </div>
        </div></div>
    )    
}

export default Internals; 