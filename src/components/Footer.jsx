import React from 'react'
import logo from '/audit-logo.png'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
    return (
        <div className='b'>
            <div className='flex justify-between flex-wrap gap-5 border-y border-y-gray-400 py-20'>
                <div className='flex flex-col gap-5 items-start ps-6 max-w-80 '>
                    <a href="#">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="w-40 h-auto object-contain"
                            loading="lazy"

                        />
                    </a>
                    <p className='text-gray-400 text-md  '>International provider of vehicle histories making the used car market more transparent and our roads safer worldwide.</p>
                    <div className='flex justify-around items-center gap-3 flex-wrap'>
                        <a href='#' className='text-gray-500 bg-gray-400/10 cursor-pointer hover:bg-cyan-300/30 hover:text-cyan-400 h-10 w-10 rounded-full flex justify-center items-center'><Facebook size={20} /></a>
                        <a href='#' className='text-gray-500 bg-gray-400/10 cursor-pointer hover:bg-cyan-300/30 hover:text-cyan-400 h-10 w-10 rounded-full flex justify-center items-center'><Twitter size={20} /></a>
                        <a href='#' className='text-gray-500 bg-gray-400/10 cursor-pointer hover:bg-cyan-300/30 hover:text-cyan-400 h-10 w-10 rounded-full flex justify-center items-center'><Instagram size={20} /></a>
                        <a href='#' className='text-gray-500 bg-gray-400/10 cursor-pointer hover:bg-cyan-300/30 hover:text-cyan-400 h-10 w-10 rounded-full flex justify-center items-center'><Linkedin size={20} /></a>
                        <a href='#' className='text-gray-500 bg-gray-400/10 cursor-pointer hover:bg-cyan-300/30 hover:text-cyan-400 h-10 w-10 rounded-full flex justify-center items-center'><Youtube size={20} /></a>


                    </div>
                </div>


                <div>
                    <h3 className='text-white font-bold text-lg'>Quick Links</h3>
                    <div className=" h-1 w-12 mt-2  bg-gradient-to-r from-cyan-400 to-purple-400"></div>

                    <div className='flex flex-col  my-5 '>
                        <a className='cursor-pointer py-1  text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline ' /> Home
                        </a>
                        <a className='cursor-pointer py-1  text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' /> About Us
                        </a>
                        <a className='cursor-pointer  py-1 text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' /> Services
                        </a>
                        <a className='cursor-pointer py-1 text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' /> Pricing
                        </a>
                        <a className='cursor-pointer py-1 text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' /> Contact Us
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className='text-white font-bold text-lg'>Our Services</h3>
                    <div className=" h-1 w-12 mt-2  bg-gradient-to-r from-cyan-400 to-purple-400"></div>

                    <div className='flex flex-col  mt-5 '>
                        <a className='cursor-pointer py-1  text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline ' />Car History Report
                        </a>
                        <a className='cursor-pointer py-1  text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' />Bike History Report
                        </a>
                        <a className='cursor-pointer  py-1 text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' />Truck History Report
                        </a>
                        <a className='cursor-pointer py-1 text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' />Van History Report
                        </a>
                        <a className='cursor-pointer py-1 text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' />RV History Report
                        </a>
                        <a className='cursor-pointer pt-1 text-gray-400 hover:text-cyan-400'>
                            <ChevronRight size={18} className='inline' />Boat History Report
                        </a>
                    </div>
                </div>

                <div className='max-w-80 flex flex-col justify-between'>
                    <h3 className='text-white font-bold text-lg'>Get In Touch</h3>
                    <div className=" h-1 w-12 mt-2  bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                    <p className='text-gray-400'>Have questions or need assistance with our vehicle history reports? We're here to help.</p>
                    <div className='flex items-center gap-3'>
                        <section className='text-gray-500 bg-gray-400/10 cursor-pointer hover:bg-cyan-300/30 hover:text-cyan-400 h-10 w-10 rounded-full flex justify-center items-center'><Mail /> </section>
                        <a href="mailto:autioaudit58@gmail.com" className='text-gray-400 hover:text-cyan-400 cursor-pointer'>autioaudit58@gmail.com</a>
                    </div>
                    <a href='#contact'  className="text-black bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500   cursor-pointer     font-medium rounded-lg text-sm px-4 py-2.5 text-center w-fit flex gap-2 items-center">View Pricing <ExternalLink size={20}/></a>


                </div>
            </div>
            <div className='flex justify-between flex-wrap py-8 px-2'>
                <p className='text-gray-400 text-sm'>&copy; 2025 AUDIT. All rights reserved.</p>
                <section className='flex gap-4 text-sm'>
                    <a href="3" className='text-gray-400  cursor-pointer hover:text-cyan-400'>Privacy Policy</a>
                    <a href="3" className='text-gray-400 cursor-pointer hover:text-cyan-400'>Terms Of Services</a>
                    <a href="3" className='text-gray-400 cursor-pointer hover:text-cyan-400'>Cookie Policy</a>

                </section>
            </div>
        </div>
    )
}

export default Footer