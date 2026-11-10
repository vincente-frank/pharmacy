

import React from 'react'

const Footer = () => {

  return (

    <div>
        {/* footer section */}
        <section id="footer" className="h-screen p-6 ">
          <div className="grid grid-cols-1 items-center justify-center
          md:grid-cols-3 gap-y-8 gap-x-12 py-12 ">
            {/* logo */}
            <div>
                <h1 className='font-puff tracking-wide md:text-[1.3rem]'>
                    <span className='text-primary text-[16px] md:text-[2rem] '>k</span>
                    <span>ing</span>
                    <span className='capitalize'>&nbsp;james</span> <br />
                    <span>pharmacy</span>
                </h1>
                <p className="py-3 font-winky font-thin text-black/70
                text-[16px] md:text-[1.3rem] "
                >Modern pharmacy care, rooted in community since 1987.</p>
            </div>
            {/* quick links */}
            <div className="md:pt-32">
              <h1 className="font-puff text-primary py-2 ">pharmacy</h1>
              <nav className="flex flex-col items-start justify-start
              gap-y-1">
                <a href="#hero" className="text-black/70 font-winky tracking-wide
                ">Home</a>
                <a href="#care" className="text-black/70 font-winky tracking-wide
                ">Services</a>
                <a href="#contact" className="text-black/70 font-winky tracking-wide
                ">Send us a message</a>
              </nav>
            </div>
            {/* contacts */}
            <div className="md:pt-32" >
              <h1 className="font-puff text-primary py-2 ">help</h1>
              <nav className="flex flex-col items-start justify-start
              gap-y-1 ">
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">whatsapp</a>
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">instagram</a>
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">youtube</a>
              </nav>
            </div>
          </div>
          {/* all rights div */}
          <div className="pt-10 pb-2 " >
            <p className="font-titan font-thin text-black/50 tracking-widest
            capitalize text-center md:text-[3rem] "
            >&copy;2026 king james pharmacy. all rights reserved.</p>
          </div>
        </section>
    </div>

  )

}

export default Footer

