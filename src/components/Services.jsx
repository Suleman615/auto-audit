import React from 'react'
import ServiceCard from './ServiceCard'
import { Car , Bike ,Truck ,Caravan , Sailboat, Wifi  } from 'lucide-react';


import car from '/services-images/car.png'
import bike from '/services-images/bike.png'
import van from '/services-images/van.png'
import truck from '/services-images/truck.png'

import rv from '/services-images/rv.png'

import boat from '/services-images/boat.png'




const Services = () => {
    const services=[
        {
            image: car,
            svg: <Car className='w-6 h-6'/>,
            text: 'CAR HISTORY REPORT'
        },
        {
            image: bike,
            svg: <Bike className='w-6 h-6'/>,
            text: 'BIKE HISTORY REPORT'
        },
        {
            image: truck,
            svg: <Truck className='w-6 h-6'/>,
            text: 'TRUCK HISTORY REPORT'
        },
        {
            image: van,
            svg: <Caravan className='w-6 h-6'/>,
            text: 'VAN HISTORY REPORT'
        },
        {
            image: rv,
            svg: <Wifi className='w-6 h-6'/>,
            text: 'RV HISTORY REPORT'
        },,
        {
            image: boat,
            svg: <Sailboat className='w-6 h-6'/>,
            text: 'BOAT HISTORY REPORT'
        }

        
    ]
    return (
        <div id='services' className='py-20 px-2'>
            <div className='relative flex flex-col justify-center' >
                <h1 className="text-5xl text-center  font-bold relative text-white inline-block">Our Services</h1>
                <p className=" text-lg text-center py-4 font-normal text-gray-400">Comprehensive history reports for all types of vehicles</p>

            </div>
            <div className="mx-auto  w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>


            <div className='flex justify-center flex-wrap gap-4 my-10'>
                {services.map((item, key)=><ServiceCard key={key} image={item.image} text={item.text} svg={item.svg}/>)}

            </div>

        </div>
    )
}

export default Services