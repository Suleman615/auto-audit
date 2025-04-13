import React from "react";
import Slider from "react-slick";
import image1 from "/slider-images/car-orange.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CountriesSlider() {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="px-5  bg-black border-y-[0.5px] border-y-gray-500 py-20">
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white">Trusted Worldwide</h1>
                <p className="text-gray-400 mt-4">
                    Our vehicle history reports are available in countries around the globe.
                </p>
            </div>

            <div className="mt-30 slider-container overflow-hidden ">
                <Slider {...settings}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex justify-center px-2 w-32">
                            <div className="border border-gray-400  p-4 rounded-xl shadow-md w-fit">
                                <img
                                    src={image1}
                                    alt={`Company image ${i + 1}`}
                                    className="w-20 h-auto rounded-xl object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default CountriesSlider;
