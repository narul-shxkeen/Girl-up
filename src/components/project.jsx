import React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Slides from './slides';

const Project = () => {
    const [click, setCLick] = useState(false);
    const handleClick = () => setCLick(!click);

    return (
        <div className='h-full'>
            <div className="flex flex-col w-[100%] rounded-[65px] z-20">
                <h1 className="text-6xl inika-bold pb-4 tracking-wide mt-4 z-20 tracking-widest text-center">Projects</h1>
                <div className='flex items-center justify-center w-full'>
                <div className="flex w-full sm:w-3/4 py-11 flex justify-center sm:justify-start">
                    {click ?(<Slides click={handleClick}/>)
                    :(
                        
                <button className='flex flex-col w-1/3 gap-3 bg-[#D9D9D9] justify-center items-center min-w-40' onClick={handleClick}>

                    <img src="/images/image 7.png" className='w-full h-auto'/>
<h1 className='inika mb-3'>Giving New Life</h1>

</button>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;