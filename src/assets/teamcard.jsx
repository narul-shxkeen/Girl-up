import React from "react";

/** first event: budgeting; 30th March, 2024 */

const TeamCard = ({ name, batch, img, object}) => {

    return (
        <div className="flex items-center justify-center md:items-left">
        <div className="grid grid-cols-2 bg-[#D9D9D9] md:rounded-[20px] sm:rounded-[65px] z-10 my-2 md:ml-10 md:mr-10 mr-4 ml-4 px-4 w-[100vw] py-4 sm:w-2/3" style={{ width: 'fit-content' }}>
            <div className="mr-3">
                <img src={img} className = {`md:rounded-[16px] sm:rounded-[61px] object-cover h-[200px] w-[230px] md:w-[150px] ${object}`}/>
            </div>
            <div> 
            <p className="sen-regular text-[#502E2A] font-bold text-3xl mb-2"> {name} </p>
            <p className="sen-regular text-[#502E2A] font-bold text-2xl"> {batch} </p>
            </div>
            </div>
        </div>
    )
    }

export default TeamCard; 