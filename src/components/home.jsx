import React from 'react';

const Home = () => {
    return (
   <div className='h-full relative overflow-hidden rounded-[65px]'>
        <div className="absolute w-[110%] rounded-none z-[-5]">
            <img className="w-[100%] object-fill" src="/images/home2.png"/>
        </div>;
        <div className="relative flex flex-col w-[100%] h-full items-center justify-center overflow-hidden z-20">
            <h1 className="text-6xl inika-bold pb-4 tracking-wide mt-4 z-20">GIRL UP UJJIWAN</h1>
            <div className="px-16 text-center text-xl text-[#502E2A] z-20 leading-relaxed">
                <p className="inika-regular">
                Girl Up is a girl-centered leadership development initiative, focusing on equity for girls and women in spaces where they are unheard or underrepresented. We believe when girls and women are in positions of influence, they work to create a more just and equitable world for everyone.
                </p>
            </div>
        </div>
    </div>
    );
};

export default Home;