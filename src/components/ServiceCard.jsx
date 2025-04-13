import React from 'react'


const ServiceCard = ({ image, text, svg }) => {
    return (
        <div className='relative w-96 border border-gray-500  hover:border-cyan-400 rounded-xl p-4'>
            <div className='h-12 w-12 bg-cyan-400/40 backdrop-blur-lg rounded-full text-cyan-400 flex justify-center items-center' >
            {svg}
            </div>
            <img
                src={image}
                alt="Service Image"
                className=" h-40 my-4 w-full object-cover rounded-xl "
                loading="lazy"

            />
            <h5 className='text-xl font-semibold text-white '>{text}</h5>
            <p className='text-cyan-400 cursor-pointer hover:text-cyan-300 font-semibold text-md'>PURCHASE NOW</p>
        </div>
    )
}

export default ServiceCard