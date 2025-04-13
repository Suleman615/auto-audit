import React from 'react'
import network from '/network.png'


const Network = () => {
    return (
        <div className='border-y border-y-gray-500 py-20'>
            <div className='flex flex-col md:flex-row justify-center gap-10 px-10 md:px-10'>
                <div className="flex-grow-1 ">
                    <img
                        src={network}
                        alt="About Image"
                        className=" h-96 w-full object-cover rounded-xl "
                        loading="lazy"

                    />

                </div>
                <div className='flex flex-col justify-center ps-0 md:ps-3 items-start md:w-1/2'>
                    <p className='text-gray-400'>OUR NETWORK</p>
                    <h2 className='text-5xl my-6 text-white font-bold'>Global Vehicle Data Partners</h2>
                    <p className='text-gray-400 text-xl font-normal'>We work with leading vehicle data providers around the world to ensure comprehensive and reliable information.</p>
                </div>
            </div>

           

        </div>
    )
}

export default Network