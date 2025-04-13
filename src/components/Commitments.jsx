import { BookOpen, FileCheck, Users } from 'lucide-react'
import React from 'react'

const Commitments = () => {
    return (
        <div className='py-20'>
            <div className=' flex flex-col justify-center mt-10' >
                <h1 className="text-5xl text-center  font-bold  text-white inline-block">Our Commitment to You</h1>
                <p className=" text-lg text-center py-4 font-normal text-gray-400 w-full md:w-1/2 mx-auto px-4">We're dedicated to providing accurate, comprehensive vehicle history reports that help you make informed decisions with confidence.</p>

            </div>
            <div className="mx-auto  w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>

            <div className='flex flex-wrap gap-10 px-2 my-10 justify-center'>
                <div className='p-4 border border-gray-500 rounded-xl w-96 hover:border-cyan-400 bg-gray-300/10'>
                    <div className='h-12 w-12 my-2 bg-cyan-400/40 backdrop-blur-lg rounded-full text-cyan-400 flex justify-center items-center' >
                        <FileCheck className='w-5 h-5' />
                    </div>
                    <h3 className='text-2xl font-semibold text-white'>Information You Can Trust
                    </h3>
                    <p className='text-gray-400 py-4'>Our writers and editors exclusively use reputable, data-driven sources such as articles from established vehicle publications, government reports, and other trusted vehicle associations.</p>
                </div>

                <div className='p-4 border border-gray-500 rounded-xl w-96 hover:border-cyan-400 bg-gray-300/10'>
                    <div className='h-12 w-12 my-2 bg-cyan-400/40 backdrop-blur-lg rounded-full text-cyan-400 flex justify-center items-center' >
                        <Users className='w-5 h-5' />
                    </div>
                    <h3 className='text-2xl font-semibold text-white'>Real Owner Reviews
                    </h3>
                    <p className='text-gray-400 py-4'>Hundreds of thousands of reviews from verified vehicle owners help you better understand how vehicles perform in the real world.</p>
                </div>

                <div className='p-4 border border-gray-500 rounded-xl w-96 hover:border-cyan-400 bg-gray-300/10'>
                    <div className='h-12 w-12 my-2 bg-cyan-400/40 backdrop-blur-lg rounded-full text-cyan-400 flex justify-center items-center' >
                        <BookOpen  className='w-5 h-5' />
                    </div>
                    <h3 className='text-2xl font-semibold text-white'>Comprehensive and Informative

                    </h3>
                    <p className='text-gray-400 py-4'>Our team researches and road tests hundreds of vehicles each year, then works to distill down only the most important information, specifically for used vehicle buyers.</p>
                </div>


            </div>
        </div>
    )
}

export default Commitments