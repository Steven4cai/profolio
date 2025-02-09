import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { FaPhoneAlt,FaMailBulk } from "react-icons/fa";
import Link from 'next/link';
import { AiFillLinkedin } from "react-icons/ai";

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-20'>

      <div className='flex justify-center gap-10 items-center text-center'>

        <div className='flex items-center gap-2'>
          <FaMailBulk className='w-6' />
          <span className="text-gray-700 dark:text-white">stevencaijingheng@gmail.com</span>
        </div>

        <Link href="https://www.linkedin.com/in/stevencai1" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center gap-2 cursor-pointer hover:text-blue-500 transition'>
            <AiFillLinkedin className='text-blue-700 dark:text-blue-400 text-xl' />
            <span className="text-gray-700 dark:text-white">LinkedIn</span>
          </div>
        </Link>

        <div className='flex items-center gap-2'>
          <FaPhoneAlt className='text-green-600 text-lg' />
          <span className="text-gray-700 dark:text-white">0424 807 363</span>
        </div>
      </div>

      <div className='text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; {currentYear} Steven Cai. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
