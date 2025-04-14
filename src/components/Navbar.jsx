import React, { useState } from 'react';
import logo from '/audit-logo.png'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    return (




        <nav className=" fixed w-full z-20 top-0 backdrop-blur-3xl bg-black/60  border-b-[0.2px] border-b-gray-900  ">
            <div className="max-w-screen flex  items-center justify-between mx-auto px-3 py-3">
                <a href="#">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="w-32 h-auto object-contain"
                        loading="lazy"
                        width={128}
                        height={128}
                    />
                </a>


                <div className="flex justify-center items-center md:order-2 space-x-3 md:space-x-0">
                    <span className='visible md:hidden' onClick={() => setMobile(!mobile)} >
                        {mobile ? <X className='text-cyan-400' /> : <Menu className='text-cyan-400' />

                        }</span>
                    <a href='#contact' type="button" className=" text-white   hover:text-cyan-400 mx-2 hidden md:inline-block   cursor-pointer   font-normal   text-sm py-2.5 px-4 ">Conatct Us</a>
                    <a href='#pkgs' type="button" className="text-black bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-500   cursor-pointer     font-medium rounded-lg text-sm px-4 py-2.5 text-center">View Pricing</a>



                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
                    <ul className="flex  gap-5 p-4 md:p-0  font-normal  ">

                        <li>
                            <a href="#" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">About US</a>
                        </li>
                        <li>
                            <a href="#services" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Our Services</a>
                        </li>
                        <li>
                            <a href="#pkgs" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Packages</a>

                        </li>
                        <li>
                            <a href="#contact" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Contact Us</a>

                        </li>
                    </ul>
                </div>




            </div>

            {/* mobile nav  */}

            {mobile && <div className="items-start  block  w-full md:hidden " >
                <ul className="flex flex-col gap-5 p-4 md:p-0  font-normal  ">

                    <li>
                        <a href="#" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">About US</a>
                    </li>
                    <li>
                        <a href="#services" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Our Services</a>
                    </li>
                    <li>
                        <a href="#pkgs" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Packages</a>

                    </li>
                    <li>
                        <a href="#contact" className="block py-2 text-white hover:text-cyan-400 rounded" aria-current="page">Contact Us</a>

                    </li>
                </ul>
            </div>}
        </nav>

    );
};

export default Navbar;
