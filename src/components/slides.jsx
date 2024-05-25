import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const baseUrl = "/images/first_project/";
function Slides(props){
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        responsive: [
          {
              breakpoint: 640,
              settings: {
                  dots: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
      };
      return (
        <div className="w-full h-auto px-0 sm:px-20 flex flex-col justify-center items-center gap-8">
            <div className="slider-container w-full h-auto">

      
          <Slider {...settings}>
            <div>
              <img src={baseUrl + "1.png"} className="w-[560px] h-auto sm:w-full" />
            </div>
            <div>
              <img src={baseUrl + "2.png"} className="w-[560px] h-auto sm:w-full"/>
          
            </div>
            <div>
              <img src={baseUrl + "3.png"} className="w-[560px] h-auto sm:w-full"/>
            </div>
            <div>
              <img src={baseUrl + "4.png"} className="w-[560px] h-auto sm:w-full"/>
            </div>
            <div>
              <img src={baseUrl + "5.png"} className="w-[560px] h-auto sm:w-full"/>
            </div>
            <div>
              <img src={baseUrl + "6.png"} className="w-[560px] h-auto sm:w-full"/>
            </div>
          </Slider>
        </div>
        {/* <button onClick={props.click} className="inika-regular bg-[#502E2A] px-3 py-2 rounded-lg text-white">Back to Projects</button> */}
        </div>
      );
}

export default Slides;