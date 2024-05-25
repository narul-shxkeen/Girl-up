import React from 'react';

const Home = () => {
    return (
   <div className='h-[100vh] md:h-full relative overflow-hidden'>
        <div className="absolute sm:w-[110%] z-[-5]">
            <img className="xs:h-[80vh] sm:w-[100%] object-cover" src="/images/home2.png"/>
        </div>
        <div className="px-12 pb-24 sm:pb-0 sm:px-0 relative flex flex-col w-[100%] h-full items-center justify-center overflow-hidden z-20">
            <h1 className="text-3xl sm:text-4xl md:text-6xl inika-bold sm:pb-4 tracking-wide mt-1 sm:mt-4 z-20 text-center">GIRL UP UJJIWAN</h1>
            <div className="xs:px-2 sm:px-16 text-center text-md sm:text-xl text-[#502E2A] z-20 leading-relaxed">
                <p className="inika-regular">
                GirUp Ujjiwan is a women centered organisation aiming to foster leadership and empowerment initiatives for the women of Haryana. Focussing on the financial literacy of girls and women, we look to create a space where they are heard and given all the necessary tools and education they need to become financially independent. Once provided with agency and confidence, we believe when women have the power to change the world; which is exactly what we strive to achieve!
                </p>
            </div>
        </div>
    </div>
    );
};

export default Home;