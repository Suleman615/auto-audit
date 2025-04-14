import React from 'react';
import { Carousel } from './Carousel';

const Hero = () => {
    return (
        <div className="flex flex-col   md:flex-row items-center justify-between gap-1 px-2 lg:px-4 py-32 text-white">
            {/* Left Form Content */}
            <div className="   lg:max-w-2/5 ">
                <h1 className="text-2xl md:text-5xl   font-bold text-white mb-4">
                    Be Smart And Check In Advance.<span className="text-cyan-400"> AUDIT</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6">
                    AUDIT is an international provider of vehicle histories with the goal of making the used car market more transparent and our roads safer worldwide.
                </p>

                <form className="flex flex-col gap-1 md:pe-20">
                    <p className="text-cyan-400 text-xl font-semibold">Get A VIN Check With AUDIT.</p>

                    <label className="text-gray-400 text-md mt-3 font-normal" htmlFor="vin-number">Enter VIN / HIN Number</label>
                    <input
                        id="vin-number"
                        type="text"
                        placeholder="Enter VIN / HIN Number"
                        className="p-3 text-base border border-gray-400/30 bg-gray-400/10 rounded-xl ring-2 ring-black focus:ring-cyan-400 focus:border-cyan-400 outline-0"
                    />

                    <label className="text-gray-400 text-md mt-3 font-normal" htmlFor="phone">Enter Phone Number</label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter Phone Number"
                        className="p-3 text-base border border-gray-400/30 bg-gray-400/10 rounded-xl ring-2 ring-black focus:ring-cyan-400 focus:border-cyan-400 outline-0"
                    />

                    <label className="text-gray-400 text-md mt-3 font-normal" htmlFor="email">Enter Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 text-base border border-gray-400/30 bg-gray-400/10 rounded-xl ring-2 ring-black focus:ring-cyan-400 focus:border-cyan-400 outline-0"
                    />

                    <button
                        type="submit"
                        className="p-3 text-black font-medium mt-4 cursor-pointer  bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl hover:from-cyan-500 hover:to-purple-600 transition-all"
                    >
                        VIN Check
                    </button>
                </form>
            </div>

            {/* Right Carousel Content */}
            <div className="w-full lg:w-1/2 h-[80vh] rounded-xl mt-10 lg:mt-0">
                <Carousel />
            </div>
        </div>
    );
};

export default Hero;
