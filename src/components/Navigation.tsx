import { MenuIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'

const Navigation = () => {

    const [menu, setMenu]= useState<boolean>(false)

  return (

    <div>

        {/* navigation in smaller screens */}
        <section className='bg-background border-b border-surface px-6
        flex items-center justify-between p-3 fixed top-0 left-0 right-0
        md:hidden z-10 '>
            {/* logo */}
            <div>
                <h1 className='font-puff tracking-wide text-[12px]'>
                    <span className='text-primary text-[16px] '>k</span>
                    <span>ing</span>
                    <span className='capitalize'>&nbsp;james</span> <br />
                    <span>pharmacy</span>
                </h1>
            </div>
            {/* icon logic */}
            <div className='bg-background rounded-full p-2 border-2 border-primary'>
                {
                    menu ? (
                        <XIcon onClick={ ()=> setMenu(!menu)}
                        className='cursor-pointer text-primary '
                        />
                    ):(
                        <MenuIcon onClick={ ()=> setMenu(!menu)}
                        className='cursor-pointer text-primary '
                        />
                    )
                }
            </div>
        </section>

        {/* navigation drawer items */}
        { menu && (
            <div className='h-auto w-full bg-background fixed left-0
            right-0 top-[4.3rem] z-10 '>
                <nav className='p-6 flex items-start flex-col gap-y-3'>
                    <a href="#hero" onClick={ ()=> setMenu(!menu)}
                    className='capitalize font-winky tracking-[.1rem] w-full '
                    >home</a>
                    <a href="#services" onClick={ ()=> setMenu(!menu)}
                    className='capitalize font-winky tracking-[.1rem] w-full '
                    >services</a>
                    <a href="#contact" onClick={ ()=> setMenu(!menu)}
                    className='capitalize font-winky tracking-[.1rem] w-full '
                    >send us a message</a>
                    <a href="#footer" onClick={ ()=> setMenu(!menu)}
                    className='capitalize font-winky tracking-[.1rem] w-full '
                    >our social media</a>
                    <a href="#health" onClick={ ()=> setMenu(!menu)}
                    className='capitalize font-puff tracking-[.1rem] bg-primary
                    text-background px-2 py-1 rounded-[.2rem] '
                    >book an appointment</a>
                </nav>
            </div>
        )}

        {/* navigation in medium to larger screens */}
        <section className='hidden md:flex items-center justify-between
        p-3 bg-background border-b border-surface fixed top-0 left-0
        right-0 z-10 '>
            {/* logo */}
            <div className='pl-4'>
                <h1 className='font-puff tracking-wide text-[16px]'>
                    <span className='text-primary text-[24px] '>k</span>
                    <span>ing</span>
                    <span className='capitalize'>&nbsp;james</span> <br />
                    <span>pharmacy</span>
                </h1>
            </div>
            {/* navigation */}
            <div>
                <nav className='p-6 flex items-center justify-center gap-x-6'>
                    <a href="#hero"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >home</a>
                    <a href="#services"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >services</a>
                    <a href="#contact"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >contact us</a>
                    <a href="#footer"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >our socials</a>
                </nav>
            </div>
            {/* appointment */}
            <div className='pr-4'>
                <a href="#health"
                className='capitalize font-puff tracking-[.1rem] bg-primary
                text-[20px] px-2 py-1 text-background rounded-[.2rem] '
                >book an appointment</a>
            </div>
        </section>

    </div>

  )

}

export default Navigation

