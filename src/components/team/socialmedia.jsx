import React from "react";
import TeamCard from "../../assets/teamcard";
import Pratishtha from "./team/Pratishtha_Chaudhary.jpeg";
import Gauri from "./team/Gauri_Deshpande.jpg";
import Saina from "./team/Saina_Kalla.jpg";
import Ishita from "./team/Ishita-Anand.jpeg";
import Aditi from "./team/Aditi_Kedia.jpg";
import Noyonika from "./team/Noyonika_Dutta.webp";
import Vriddhi from "./team/Vriddhi_Baid.jpg";
import Tia from "./team/Tia_Mohanani.jpg";
import Tanisi from "./team/Tanisi_Ramrakhyani.png";
import Cheryl from "./team/Cheryl_Joshi.jpg";
import Pearl from "./team/Pearl_Naik.jpg";
import Karunya from "./team/Karunya_Singh_Bisht.jpg";


function Socialmedia(){

    return( 
    <div className=""> 
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-7xl mb-1 sm:mb-3 text-center"> Social Media</h1>
        <p className="font-bold text-[#502E2A] drop-shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] sen-regular mt-5 sm:mt-3 text-5xl mb-1 sm:mb-3 text-center"> Team: </p>
        <div className="grid md:grid-cols-3 md:mb-36 mb-12">
        <TeamCard name="Pratishtha Chaudhary" batch="UG25" img={Pratishtha}/>
        <TeamCard name="Gauri Deshpande" batch="UG2023" img={Gauri}/>
        <TeamCard name="Saina Kalla" batch="UG2023" img={Saina}/>
        <TeamCard name="Ishita Anand" batch="UG2023" img={Ishita}/>
        <TeamCard name="Aditi Kedia" batch="UG2023" img={Aditi}/>
        <TeamCard name="Noyonika Dutta" batch="UG2023" img={Noyonika}/>
        <TeamCard name="Vriddhi Baid" batch="UG2023" img={Vriddhi}/>
        <TeamCard name="Tia Mohanani" batch="UG2023" img={Tia}/>
        <TeamCard name="Tanisi Ramrakhyani" batch="UG2023" img={Tanisi}/>
        <TeamCard name="Cheryl Joshi" batch="UG2023" img={Cheryl}/>
        <TeamCard name="Pearl Naik" batch="UG2023" img={Pearl}/>
        <TeamCard name="Karunya Singh Bisht" batch="UG2023" img={Karunya}/>
        </div>
        </div></div>
    )    
}

export default Socialmedia; 