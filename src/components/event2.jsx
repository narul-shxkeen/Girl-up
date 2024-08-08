import React from "react";
import Slides from './slides';
import FirstSession from "./sessionOneImages";

function Event(){
    const imageUrls = [
        "/images/second/1.jpg",
        "/images/second/2.jpg",
        "/images/second/3.jpg",
        "/images/second/4.jpg",
        "/images/second/5.jpg",
        "/images/second/6.jpg",
        "/images/second/7.jpg",
        "/images/second/8.jpg",
        "/images/second/9.jpg",
        "/images/second/10.jpg"
    ];
    
    return <div className=""> 
    <div className="bg-[#E3D5CA] flex flex-col items-center h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular text-7xl text-center my-6">Loans</h1>
        <div className="relative flex flex-col justify-center items-center">
            <img src="/images/home2.png" className="hidden md:block h-[300vh] z-0 object-cover"/>
            <div className="bg-[#D9D9D9] rounded-none flex flex-col items-center sm:rounded-[65px] z-10 absolute top-[10px] px-5 pt-12 pb-52 sm:pt-12 sm:pb-12 w-[100vw] sm:w-2/3">
                <Slides imageUrls={imageUrls}/>
      
                <div className="flex flex-col items-center justify-center my-12">
                <p className="poppins-regular text-xl text-black leading-10 text-justify">                
                Module created by Girl-Up to explain budgeting to Didi's at Ashoka. The session aims to help the Didi's understand the importance of budgeting and saving. The session will cover topics such as the difference between needs and wants, the importance of saving a part of their income, and avoiding unnecessary spending. The session will also include an activity where the Didi's will be provided with sheets to help them estimate and calculate their expenses and determine their current savings. The session will end with a discussion on various other topics such as loans and net banking.
                  </p>
</div>
{/* <FirstSession imageUrls={imageUrls}/> */}
</div>
        </div>
    </div>
    </div>
}



export default Event;