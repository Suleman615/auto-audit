import React from 'react';
import aboutImage from '/about.png'
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
    return (
        <div id='about' className='py-30  h-max'>
        <div  className="flex flex-col gap-4 md:flex-row  items-center  justify-between mx-4">
            <div className="md:w-1/2 h-auto mb-6 md:mb-0 px-8">
                <h1 className="text-5xl font-bold relative text-white inline-block">
                    About Us
                    <div className="absolute -bottom-4 left-0  w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                </h1>
                <p className="mt-4 text-lg py-4 font-normal text-gray-400">
                    At VIN Cario Pro, we specialize in delivering comprehensive vehicle history reports that empower our customers to make well-informed decisions. Whether you're buying, selling, or simply curious about your vehicle's past, our services provide the clarity and transparency you need. We understand the importance of knowing a vehicle's history, which is why we gather data from reliable and trusted sources globally. This ensures that you receive the most accurate and up-to-date information available.                </p>
                <a className=" cursor-pointer  font-semibold flex gap-2 text-sm text-cyan-400 rounded hover:underline w-fit hover:gap-4">
                   <p>Learn More About Us</p>  <ArrowRight size={19} className="inline-block" />
                </a>
            </div>
            <div className="md:w-1/2  ">
                <img
                    src={aboutImage}
                    alt="About Image"
                    className=" h-96 w-full object-cover rounded-xl "
                    loading="lazy"

                />
                
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
