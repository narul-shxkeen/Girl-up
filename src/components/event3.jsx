import React from "react";
import Slides from './slides';
import FirstSession from "./sessionOneImages";

function Event(){
    const imageUrls = [
        "/images/third/1.jpg",
        "/images/third/2.jpg",
        "/images/third/3.jpg",
        "/images/third/4.jpg",
        "/images/third/5.jpg",
        "/images/third/6.jpg",
        "/images/third/7.jpg",

    ];
    
    return <div className=""> 
    <div className="bg-[#E3D5CA] flex flex-col items-center h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular text-4xl sm:text-7xl text-center my-6">Self Help Groups(SHGs)</h1>
        <div className="relative flex flex-col justify-center items-center">
            <img src="/images/home2.png" className="hidden md:block h-[300vh] z-0 object-cover"/>
            <div className="bg-[#D9D9D9] rounded-none flex flex-col items-center sm:rounded-[65px] z-10 absolute top-[10px] px-5 pt-12 pb-52 sm:pt-12 sm:pb-12 w-[100vw] sm:w-2/3">
                <Slides imageUrls={imageUrls}/>
      
                <div className="flex flex-col items-center justify-center my-12">
                <p className="poppins-regular text-xl text-black leading-10 text-justify">                
             This module by Girl-Up Ashoka aims to teach the didi's working in the university about Self Help Groups (SHGs). The session will cover topics such as the importance of SHGs, how they work, and how they can benefit the didi's. The session will also include an activity where the didi's will be divided into groups and asked to discuss the benefits of SHGs. The session will end with a discussion on various other topics such as loans and net banking.
              </p>
</div>
{/* <FirstSession imageUrls={imageUrls}/> */}
</div>
        </div>
    </div>
    </div>
}



export default Event;