import React from 'react'

const Achievements = () => {
  return (
    <div className='flex flex-wrap gap-4 justify-around border-y-[0.5px] border-gray-600 py-20'>
        <div className='rounded-xl bg-gray-300/10 p-4' >
            <h1 className='text-cyan-700 text-center text-6xl font-bold'>15</h1>
            <p className='text-gray-500 text-center '>Years of Experience</p>
        </div>
        <div className='rounded-xl bg-gray-300/10 p-4' >
            <h1 className='text-cyan-700 text-center text-6xl font-bold'>15,00</h1>
            <p className='text-gray-500 text-center '>Active Partners</p>
        </div>
        <div className='rounded-xl bg-gray-300/10 p-4' >
            <h1 className='text-cyan-700 text-center text-6xl font-bold'>50,000</h1>
            <p className='text-gray-500 text-center '>Reports Sold</p>
        </div>
        <div  className='rounded-xl bg-gray-300/10 p-4'>
            <h1 className='text-cyan-700 text-center text-6xl font-bold'>10,000</h1>
            <p className='text-gray-500 text-center '>Historical Records</p>
        </div>
    </div>
  )
}

export default Achievements