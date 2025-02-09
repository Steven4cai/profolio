import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'


const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (


     

      <div className='text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; {currentYear} Steven Cai. All rights reserved.</p>
      </div>

  )
}

export default Footer;
