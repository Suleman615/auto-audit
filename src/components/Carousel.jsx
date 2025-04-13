import React, { useState, useEffect } from 'react';
import image1 from '/slider-images/car-orange.png';
import image2 from '/slider-images/car-white.png';
import image3 from '/slider-images/boat.png';

export const Carousel = () => {
    const [image, setImage] = useState('1');

    const images = {
        1: image1,
        2: image2,
        3: image3,
    };

    const imageKeys = Object.keys(images);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev) => {
                const currentIndex = imageKeys.indexOf(prev);
                const nextIndex = (currentIndex + 1) % imageKeys.length;
                return imageKeys[nextIndex];
            });
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-xl">
            {Object.entries(images).map(([key, src]) => (
                <img
                    key={key}
                    src={src}
                    alt={`slider image ${key}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-[5000ms]  ease-in-out rounded-xl ${
                        image === key ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    loading="lazy"
                />
            ))}

            {/* Navigation Dots */}
            <div className="flex w-full gap-3 absolute bottom-4 justify-center z-20">
                {imageKeys.map((key) => (
                    <section
                        key={key}
                        onClick={() => setImage(key)}
                        className={`cursor-pointer h-2 rounded-full transition-all duration-[1000ms] ${
                            image === key ? 'bg-cyan-400 w-10' : 'bg-gray-500 w-2'
                        }`}
                    ></section>
                ))}
            </div>
        </div>
    );
};
