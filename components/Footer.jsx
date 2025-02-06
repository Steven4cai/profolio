import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'


const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
        <div className='flex w-max items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            stevencaijingheng@gmail.com
        </div>
      </div>
      <div className=
      'text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>
            &copy; {currentYear} Steven Cai. All rights reserved.
        </p>
        <ul className=
        'flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Steven4cai">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/jingheng-cai-630177280/">Linkedin</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
