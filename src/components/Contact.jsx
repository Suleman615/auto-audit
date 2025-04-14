import { Send } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <div className='pt-10 ' id='contact'>
            <div className=' flex flex-col justify-center pt-10' >
                <h1 className="text-5xl text-center  font-bold  text-white inline-block">Contact US</h1>
                <p className=" text-lg text-center py-4 font-normal text-gray-400 w-full md:w-1/2 mx-auto px-4">Have questions about our vehicle history reports? Get in touch with our team.</p>

            </div>
            <div className="mx-auto h-1 w-20   bg-gradient-to-r from-cyan-400 to-purple-400"></div>
            <div className='bg-gradient-to-r from-cyan-500/20   to-purple-500/20 border border-gray-400/50 mx-2 md:mx-56 mb-20 mt-12 rounded-xl h-auto py-10'>
                <form action="#" className='mx-auto  flex flex-col  gap-2 md:w-1/2 px-2'>

                    <h4 className='text-white font-bold text-xl'>Send Us a Message</h4>
                    <label className="text-gray-400 text-md mt-3 font-normal" htmlFor="name">Your Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your Name"
                        className="p-3 t border text-gray-400 bg-cyan-300/5 border-gray-500 rounded-xl ring-2 ring-transparent focus:ring-cyan-400 focus:border-cyan-400 outline-0"
                    />

                    <label className="text-gray-400 text-md mt-3 font-normal" htmlFor="mail">Your Email</label>
                    <input
                        id="mail"
                        type="mail"
                        placeholder="Enter your email"
                        className="p-3 text-gray-400 border border-gray-500 rounded-xl ring-2 ring-transparent focus:ring-cyan-400 focus:border-cyan-400 outline-0"
                    />
                    <label className="text-gray-400 text-md mt-3 font-normal" htmlFor="message">Your Message</label>
                  
                  <textarea 
                  name="message" 
                  id="message" 
                  cols="10" 
                  rows="5"
                  placeholder="Enter your Message"
                  className="p-3 text-gray-400 border border-gray-500 rounded-xl ring-2 ring-transparent focus:ring-cyan-400 focus:border-cyan-400 outline-0"
              
                  />
                 
                 <button
                        type="submit"
                        className="p-3 text-base font-medium mt-4 cursor-pointer bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl hover:from-cyan-500 hover:to-purple-600 transition-all"
                    >
                       Send Message <Send className='inline' size={18} />
                    </button>

                </form>
            </div>

        </div>
        
    )
}

export default Contact