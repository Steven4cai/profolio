'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {assets} from '@/assets/assets'

const Navbar = ({isDark,setIsDark}) => {
    const [isScroll, setIsScrool] = useState(false)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                setIsScrool(true)
            }else{
                setIsScrool(false)
            }
        })
    } ,[])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
                items-center justify-between z-50 ${isScroll 
                ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' 
                : ''}`}>
                <a href="#top">
                    <Image alt='logo' className='w-28 cursor-pointer mr-14 bg-white rounded-full' src={assets.logo} />
                </a>

                <ul className={`hidden md:flex items-center gap-6 
                    lg:gap-8 rounded-full px-12 py-3 
                    ${isScroll ?'' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    
                    <button onClick={() => setIsDark(prev => !prev)}>
                        <Image src={isDark ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                    </button>

                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 
                    border border-gray-500 rounded-full ml-4 font-Ovo
                    dark:border-white/50'>
                        Contact <Image className='w-3' src={isDark ?assets.arrow_icon_dark :assets.arrow_icon} alt='arrowicon' />
                    </a>

                    {/* Menu Button for Mobile */}
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDark ?assets.menu_white :assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul className={`flex flex-col gap-4 py-20 px-10
                fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50
                transition duration-500' dark:bg-darkHover dark:text-white
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-[16rem]'} md:hidden`}>
                    {/* Close Button */}
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDark ?assets.close_white :assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a onClick={closeMenu} className='font-Ovo' href="#top">Home</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#about">About me</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#services">Services</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#work">My Work</a></li>
                    <li><a onClick={closeMenu} className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
