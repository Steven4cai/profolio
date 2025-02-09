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

     

      <div className='text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; {currentYear} Steven Cai. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
