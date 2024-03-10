import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

function Main() {
  return (
    <>
        <div id='main'>

            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
               
               <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                  <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'> I'm Chinmay Keni</h1>

                  <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> 
                    I'm a
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'aspiring developer',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'coder',
                        2000
                      ]}
                      wrapper="div"
                      speed={50}
                      style={{ fontSize: '1em',paddingLeft: '5px', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </h2>

                  <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                      <FaTwitter size={20} className='cursor-pointer' />
                      <FaFacebookF size={20} className='cursor-pointer' />
                      <FaInstagram size={20} className='cursor-pointer' />
                      <FaLinkedinIn size={20} className='cursor-pointer' />
                  </div>
               </div>

            </div>

        </div>
    </>
  )
}

export default Main