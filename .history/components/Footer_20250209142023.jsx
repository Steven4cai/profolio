import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { AiFillLinkedin } from "react-icons/ai";



const Footer = ({isDark}) => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2 bg-white rounded-full' />
        <div className='flex w-max items-center gap-2 mx-auto'>
            <Image src={isDark ?assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            stevencaijingheng@gmail.com
        </div>

        <div className='flex w-max items-center gap-2 mx-auto'>
            <Image src={isDark ?assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            stevencaijingheng@gmail.com
        </div>

        <div className='flex w-max items-center gap-2 mx-auto'>
            <Image src={isDark ?assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            stevencaijingheng@gmail.com
        </div>
      </div>
      <div className=
      'text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
            &copy; {currentYear} Steven Cai. All rights reserved.
        </p>

      </div>
    </div>
  )
}

export default Footer
