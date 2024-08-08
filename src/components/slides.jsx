import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slides({ imageUrls }) {
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
                    {imageUrls.map((url, index) => (
                        <div key={index}>
                            <img src={url} className="w-[560px] h-auto sm:w-full" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

Slides.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string)
};

Slides.defaultProps = {
    imageUrls: []
};

export default Slides;
