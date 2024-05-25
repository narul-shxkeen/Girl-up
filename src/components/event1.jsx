import React from "react";
import Slides from './slides';

function Event(){

    return <div className=""> 
    <div className="bg-[#E3D5CA] flex flex-col items-center h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular mt-5 sm:mt-3 text-7xl mb-1 sm:mb-3 text-center">Budgeting</h1>
        <div className="relative flex flex-col justify-center items-center">
            <img src="/images/home2.png" className="hidden md:block h-[200vh] z-0 object-cover"/>
            <img src="/images/classroom.jpg" className="hidden md:block h-[170vh] z-0 object-cover"/>
            <div className="bg-[#D9D9D9] rounded-none flex flex-col items-center sm:rounded-[65px] z-10 my-10 absolute top-[10px] px-5 pt-12 pb-52 sm:pt-12 sm:pb-12 w-[100vw] sm:w-2/3">
                <Slides/><p className="mt-12 poppins-regular text-xl text-black">
                  Conducted a financial literacy session particularly focusing on Budgeting for the staff at Ashoka University.  </p>
<img src="/images/first_project/budgeting/1.jpeg" className="w-[60%] h-[60%] object-cover"/>
<img src="/images/first_project/budgeting/2.jpeg" className="w-[60%] h-[60%] object-cover"/>
<img src="/images/first_project/budgeting/3.jpeg" className="w-[60%] h-[60%] object-cover"/>
<img src="/images/first_project/budgeting/4.jpeg" className="w-[60%] h-[60%] object-cover mb-40"/>
            </div>
        </div>
    </div>
    </div>
}

export default Event;