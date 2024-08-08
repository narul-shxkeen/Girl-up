import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Slides from './slides';

const Project = () => {
    const [click, setClick] = useState(false); // Fixed typo here
    const handleClick = () => setClick(!click);

    const ProjectCard = ({ link, image, altText, title, handleClick }) => {
        return (
            <div className="w-full sm:w-3/4 py-11 flex justify-center">
                <Link to={link}>
                    <button className='flex flex-col w-[250px] gap-3 bg-[#D9D9D9] justify-center items-center min-w-40' onClick={handleClick}>
                        <img src={image} alt={altText} className='w-full h-auto' />
                        <h1 className='inika mb-3'>{title}</h1>
                    </button>
                </Link>
            </div>
        );
    };

    return (
        <div className='h-full'>
            <div className="flex flex-col w-[100%] rounded-[65px] z-20 items-center">
                <h1 className="text-6xl inika-bold pb-4 mt-4 z-20 tracking-widest text-center">Projects</h1>
                <div className='grid grid-cols-3 items-center justify-items-center w-[80vw] h-auto px-5 gap-3'>
                <ProjectCard link="/first" image="/images/first_project/1.png" altText="Image of budgeting workshop" title="Budgeting" handleClick={handleClick} />
                
                <ProjectCard link="/second" image="/images/second/1.jpg" altText="Image of loan workshop" title="Loans" handleClick={handleClick} />
                
                <ProjectCard link="/third" image="/images/third/1.jpg" altText="Image of self help group workshop" title="Self Help Groups" handleClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default Project;
