import React from "react";
import Slides from './slides';
import FirstSession from "./sessionOneImages";

function Event(){

    return <div className=""> 
    <div className="bg-[#E3D5CA] flex flex-col items-center h-[100vh] overflow-y-scroll">
        <h1 className="sen-regular text-7xl text-center my-6">Budgeting</h1>
        <div className="relative flex flex-col justify-center items-center">
            <img src="/images/home2.png" className="hidden md:block h-[300vh] z-0 object-cover"/>
            <div className="bg-[#D9D9D9] rounded-none flex flex-col items-center sm:rounded-[65px] z-10 absolute top-[10px] px-5 pt-12 pb-52 sm:pt-12 sm:pb-12 w-[100vw] sm:w-2/3">
                <Slides/>
      
                <div className="flex flex-col items-center justify-center my-12">
                <p className="poppins-regular text-xl text-black leading-10 text-justify">                
                GirlUp Ujjiwan held its first session with the Didi’s at Ashoka University on 30th March on Budgeting and Saving. We touched upon various topics such as the differences between needs and wants to familiarize them with the idea of saving a part of their income to meet their long term goals such as paying back their loans and buying their own homes and avoiding unnecessary spending on things such as alcohol. As we introduced them to the idea of savings, we aimed to encourage them to save a small part of their income which, as brought to our attention, was commonly used for purchase of alcohol, and  put it in a savings account so that it multiplies to a bigger amount at the end of a period. We ended our session with an activity where we provided them with sheets that helped them estimate and calculate their expenses and determine their current savings so we could encourage them to save more for their long term needs. Further, the didi’s were highly enthusiastic to learn more about various other topics such as loans, net banking! The smiles and enthusiasm on the didi’s faces told us that the first session was a huge success!  </p>
</div>
<FirstSession/>
</div>
        </div>
    </div>
    </div>
}



export default Event;