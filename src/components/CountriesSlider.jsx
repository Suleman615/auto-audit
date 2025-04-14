import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CountriesSlider() {

    const imageModules = import.meta.glob('../assets/countries/*.{png,jpg,jpeg,svg}', {
        eager: true,
        import: 'default',
      });
      
      const images = Object.entries(imageModules).map(([path, src]) => {
        const name = path
          .split('/')
          .pop()
          .replace(/\.(png|jpe?g|svg)$/, '')
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase());
        return { src, name };
      });

    const settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
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
                    {images.map((image, i) => (
                        <div key={i} className="flex justify-center px-2 w-32">
                            <div className="border  border-gray-400/30 bg-gray-400/10 mx-auto  p-4 rounded-md shadow-md w-fit">
                                <img
                                    src={image.src}
                                    alt={`Company image ${i + 1}`}
                                    className="w-16 h-10 rounded-md object-cover"
                                    loading="lazy"
                                />

                            </div>
                            <p className="text-gray-400 py-4 text-center ">{image.name}</p>

                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default CountriesSlider;
