import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const baseUrl = "/images/first_project/budgeting/";
function FirstSession(props){
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay:true,
        autoplaySpeed:2000,
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
        <div className="w-full h-auto px-0 sm:px-20 flex flex-col justify-center items-center gap-4">
            <div className="slider-container w-full h-auto">
          <Slider {...settings}>
            <div className="sm:ml-12 sm:mr-12">
              <img src={baseUrl + "4.jpeg"} className="w-[560px] h-[360px] sm:w-[50vw] sm:h-[50vh]" />
            </div>
            <div className="sm:ml-12 sm:mr-12">
              <img src={baseUrl + "1.jpeg"} className="w-[560px] h-[360px] sm:w-[50vw] sm:h-[50vh]"/>
            </div>
            <div className="sm:ml-12 sm:mr-12">
              <img src={baseUrl + "2.jpeg"} className="w-[560px] h-[360px] sm:w-[50vw] sm:h-[50vh]"/>
            </div>
          </Slider>
        </div>
        {/* <button onClick={props.click} className="inika-regular bg-[#502E2A] px-3 py-2 rounded-lg text-white">Back to Projects</button> */}
        </div>
      );
}

export default FirstSession;