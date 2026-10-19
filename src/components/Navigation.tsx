import { MenuIcon, XCircleIcon, XIcon } from 'lucide-react'
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
            right-0 top-[4.3rem]'>
                <nav className='p-6 flex items-start flex-col gap-y-3'>
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem] '
                    >shop</a>
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem] '
                    >prescriptions</a>
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem] '
                    >services</a>
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem] '
                    >contact us</a>
                </nav>
            </div>
        )}

        {/* navigation in medium to larger screens */}
        <section className='hidden md:flex items-center justify-between
        p-3 bg-background border-b border-surface fixed top-0 left-0
        right-0 z-10 '>
            {/* logo */}
            <div>
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
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >shop</a>
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >prescriptions</a>
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >services</a>
                    <a href="#"
                    className='capitalize font-winky tracking-[.1rem]
                    text-[20px] '
                    >contact us</a>
                </nav>
            </div>
        </section>

    </div>

  )

}

export default Navigation

