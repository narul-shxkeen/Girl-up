import React from "react";
import { Link } from 'react-router-dom';




function MeetTheTeam(){
    return (
    <div className="bg-[#E3D5CA] h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-8xl mb-1 sm:mb-3 text-center">MEET OUR TEAM</h1>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-y-6 mt-10 mb-32"> 
            <div>
                <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold"> Founding Team </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2"> The Founding team at Girl Up. </p>
            <div className="bg-[#D9D9D9] rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4"  style={{ width: 'fit-content' }} >
            <Link to="/foundingteam" className="poppins-regular text-xl text-black">
                meet the team
                </Link>
            </div>
            </div>
            <div>
                <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold"> Internals </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2"> The Internals team at Girl Up. </p>
            <div className="bg-[#D9D9D9] rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4" style={{ width: 'fit-content' }}>
            <Link to="/internals" className="poppins-regular text-xl text-black">
                meet the team
                </Link>
            </div>
            </div>
            <div>
            <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold"> Externals </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2"> The Externals team at Girl Up. </p>
            <div className="bg-[#D9D9D9] rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4" style={{ width: 'fit-content' }}>
                <Link to="/externals" className="poppins-regular text-xl text-black"> meet the team </Link>
            </div>
            </div>
            <div>
            <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold"> Social Media </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2"> The Social Media team at Girl Up. </p>
            <div className="bg-[#D9D9D9] rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4" style={{ width: 'fit-content' }}>
                <Link to="/socialmedia" className="poppins-regular text-xl text-black"> meet the team </Link>
            </div>
            </div>
            <div>
            <p className="sen-regular text-3xl text-black ml-10 mb-2 font-bold"> Website </p>
                <p className="sen-regular text-xl text-black ml-10 mb-2"> The Website team at Girl Up. </p>
            <div className="bg-[#D9D9D9] rounded-none sm:rounded-[65px] px-3 py-3 ml-10 pt-12 pb-52 sm:pt-12 sm:pb-12 sm:w-2/3m mb-4" style={{ width: 'fit-content' }}>
                <Link to="/website" className="poppins-regular text-xl text-black"> meet the team </Link>
            </div>
            </div>
            </div>
   
    </div>
    )
}

export default MeetTheTeam;