import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const baseUrl = "/images/first_project/";
function Slides(props){
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
      return (
        <div className="w-full px-20 flex flex-col justify-center items-center gap-8">
            <div className="slider-container md:w-full md:h-auto">

      
          <Slider {...settings}>
            <div>
              <img src={baseUrl + "1.png"} />
       
            </div>
            <div>
              <img src={baseUrl + "2.png"} />
          
            </div>
            <div>
              <img src={baseUrl + "3.png"} />
            </div>
            <div>
              <img src={baseUrl + "4.png"} />
            </div>
            <div>
              <img src={baseUrl + "5.png"} />
            </div>
            <div>
              <img src={baseUrl + "6.png"} />
            </div>
          </Slider>
        </div>
        <button onClick={props.click} className="inika-regular bg-[#502E2A] px-3 py-2 rounded-lg text-white">Back to Projects</button>
        </div>
      );
}

export default Slides;