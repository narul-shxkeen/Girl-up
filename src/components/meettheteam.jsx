import React from "react";
import { Link } from 'react-router-dom';
import TeamCard from "../assets/teamcard";
import Arshia from "./image/Arshia_Kohli.jpeg";
import { Image } from "react-bootstrap";

function MeetTheTeam(){
    return (
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-8xl mb-1 sm:mb-3 text-center">MEET OUR TEAM</h1>
        <p className="text-center sen-regular text-3xl text-black mt-3 mb-2 font-bold underline"> Founder</p>
        <div className="flex justify-center">
        <Image
        src= {Arshia}
        alt="Picture of Arshia Kohli"
        className="object-cover w-[60vh] h-[40vh] md:px-0 px-4"/>
        </div>
        <p className="sen-regular text-xl -mt-8 text-black p-16 mr-10"> Arshia Kohli is the founder of GirlUp. Her passion for gender equality and financial empowerment has been the driving force behind the establishment of the organization.  She initiated key projects aimed at promoting financial literacy among women and expanded outreach efforts to include both urban and rural communities. Her work has set a strong precedent for the organization's initiatives and growth. </p>
        <div className="grid mr-10 md:grid-cols-2 gap-y-6 mb-32"> 
            <div>
                <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold underline"> Founding Team </p>
                <p className="sen-regular text-xl text-black ml-10"> The founding team of GirlUp Ujjiwan consists of the founding presidents and the original founder. This team is the cornerstone of our organization, providing the vision and leadership that drives our mission forward. They are responsible for setting the strategic direction, overseeing major initiatives, and ensuring the sustainability and growth of GirlUp Ujjiwan.  </p>
                <div className="bg-[#D9D9D9] hover:bg-black rounded-none sm:rounded-[65px] px-3 py-3 ml-8 pt-12 mt-2 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4 transition-colors duration-200 ease-in-out hover:text-white" style={{ width: 'fit-content' }}>
  <Link to="/foundingteam" className="poppins-regular text-xl"> Meet the team </Link>
</div>
            </div>
            <div>
                <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold underline"> Internals </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2 mr-4"> The internals team is responsible for engagement within Ashoka campus. Their goal is to bridge the gap between the birthplace of GirlUp Ujjiwan and take the project towards the rural and urban spaces outside the campus . All the internal events that happen within Ashoka University are managed by the Internal team. </p>
                <div className="bg-[#D9D9D9] hover:bg-black rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4 transition-colors duration-200 ease-in-out hover:text-white" style={{ width: 'fit-content' }}>
  <Link to="/internals" className="poppins-regular text-xl"> Meet the team </Link>
</div>
            </div>
            <div>
            <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold underline"> Externals </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2"> The external team is responsible for engagement outside the campus of Ashoka. Once our projects foray into the NCR area, external team will manage all the events and workshops pertaining to our project of empowering financial literacy to women. </p>
                <div className="bg-[#D9D9D9] hover:bg-black rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4 transition-colors duration-200 ease-in-out hover:text-white" style={{ width: 'fit-content' }}>
  <Link to="/externals" className="poppins-regular text-xl"> Meet the team </Link>
</div>
            </div>
            <div>
            <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold underline"> Social Media & Content Team </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2 mr-4"> The external team is responsible for engagement outside the campus of Ashoka. Once our projects foray into the NCR area, external team will manage all the events and workshops pertaining to our project of empowering financial literacy to women. </p>
                <div className="bg-[#D9D9D9] hover:bg-black rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4 transition-colors duration-200 ease-in-out hover:text-white" style={{ width: 'fit-content' }}>
  <Link to="/socialmedia" className="poppins-regular text-xl"> Meet the team </Link>
</div>
            </div>
            <div>
            <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold underline"> Website </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2"> The website team is responsible for designing and maintaining GirlUp Ujjiwan&apos;s website and updating it regularly with news, events and latest developments of our initiatives. Additionally, they are responsible for ensuring the website is user friendly to maximise user engagement and managing online donation and fundraising schemes. </p>
                <div className="bg-[#D9D9D9] hover:bg-black rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4 transition-colors duration-200 ease-in-out hover:text-white" style={{ width: 'fit-content' }}>
  <Link to="/website" className="poppins-regular text-xl"> Meet the team </Link>
</div>
            </div>
            </div>
   
    </div>
    )
}

export default MeetTheTeam;