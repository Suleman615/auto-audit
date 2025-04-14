import { Check, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'

const PackageCard = ({ name, desc, features, rate, popular }) => {
    return (
        
            <div className={`border w-[26rem] p-8  rounded-xl relative border-gray-500 hover:border-cyan-400 h-auto ${popular ? "bg-gradient-to-b from-cyan-400/10 to-purple-400/10 border-cyan-400" : "bg-gray-400/10"}`}>
                {popular &&
                    <p className='bg-gradient-to-r from-cyan-500 to-purple-500 text-sm font-semibold -mt-11 rounded-full mx-auto py-0.5  w-fit px-3 '>
                        Most Popular
                    </p>}
                <p className='text-2xl font-semibold mt-4 text-white'>{name}</p>
                <h3 className='text-5xl text-white font-bold'>{rate}</h3>
                <p className='text-gray-400  my-4 '>{desc}</p>
                {features.map((item, key) =>
                    <section key={key} className='flex gap-2 items-start'>
                        <Check className='text-cyan-500' />
                        <p className='text-white py-2'>{item}</p>
                    </section>
                )}


                <button className={`${popular ? " bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500" : "bg-gray-400/30 hover:bg-gray-400/40 text-white"} w-full rounded-lg py-2 font-semibold mt-4 cursor-pointer `}>
                <ShoppingCart  className="inline mx-3"/>  Add to cart
                </button>

            </div>
       
    )
}

export default PackageCard