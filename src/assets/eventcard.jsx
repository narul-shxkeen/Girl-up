import React from "react";
import { Link } from "react-router-dom";

/** first event: budgeting; 30th March, 2024 */

const EventCard = ({ eventName, date, link }) => {

    return(
        <div className="flex items-center justify-center md:items-left">
        <div className="bg-[#D9D9D9] md:rounded-[20px] sm:rounded-[65px] z-10 my-10 px-5 pt-12 pb-12 sm:pt-12 sm:pb-12 w-[70vw] h-auto sm:w-[450px] sm:!h-[250px]" >
            <p className="sen-regular text-[#502E2A] font-bold text-3xl"> {eventName} </p>
            <p className="sen-regular text-[#502E2A] text-2xl"> {date} </p>
            <div className="bg-black rounded-lg p-3 sm:pt-12 sm:pb-12 sm:w-2/3 mt-4 md:ml-48 sm:ml-28" style={{ width: 'fit-content'}}>
            <Link to={link} className="poppins-regular text-xl text-white">  learn more </Link>
            </div>
        </div>
        </div>
    )
    }

export default EventCard; 