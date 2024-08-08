import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider({ imageUrls }) {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    {imageUrls.map((url, index) => (
                        <div key={index} className="sm:ml-12 sm:mr-12 w-full flex justify-center">
                            <img src={url} className="w-[560px] h-[360px] sm:w-[50vw] sm:h-[60vh]" alt={`slide-${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ImageSlider;
