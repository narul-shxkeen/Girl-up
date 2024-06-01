import React from "react";
import TeamCard from "../../assets/teamcard";
import Kunj from "./team/Kunj_Agarwal.jpeg";
import Saina from "./team/Saina_Kalla.jpg";
import Ishita from "./team/Ishita-Anand.jpeg";
import Pratishtha from "./team/Pratishtha_Chaudhary.jpeg";
import Arisha from "./team/Arisha_Hegde.jpeg"
import Manavi from "./team/Manavi_Jain.jpg";
import Rishika from "./team/Rishika-Agarwal.jpeg";
import Rhea from "./team/Rhea_Wali.png";
import Ananya from "./team/Ananya_Tantia.jpeg";
import Gauri from "./team/Gauri_Deshpande.jpg";
import Sakshi from "./team/Sakshi-Bhagat.jpg";



function Externals(){

    return( 
    <div className=""> 
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-7xl mb-1 sm:mb-3 text-center"> Externals</h1>
        <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular mt-5 sm:mt-3 text-5xl mb-1 sm:mb-3 text-center"> Team: </p>
        <div className="grid md:grid-cols-3 md:mb-36 mb-12">
        <TeamCard name="Kunj Agarwal" batch="UG2023" img={Kunj}/>
        <TeamCard name="Saina Kalla" batch="UG2023" img={Saina} object="object-top"/>
        <TeamCard name="Ishita Anand" batch="UG2023" img={Ishita}/>
        <TeamCard name="Pratishtha Chaudhary" batch="UG25" img={Pratishtha}/>
        <TeamCard name="Arisha Hegde" batch="UG25" img={Arisha}/>
        <TeamCard name="Manavi Jain" batch="UG25" img={Manavi} object="object-top"/>
        <TeamCard name="Rishika Agarwal" batch="UG25" img={Rishika}/>
        <TeamCard name="Rhea Wali" batch="UG25" img={Rhea}/>
        <TeamCard name="Ananya Tantia" batch="UG2023" img={Ananya} object="object-top"/>
        <TeamCard name="Gauri Deshpande" batch="UG2023" img={Gauri} object="object-top"/>
        <TeamCard name="Sakshi Bhagat" batch="UG2023" img={Sakshi}/>
        </div>
        </div></div>
    )    
}

export default Externals; 