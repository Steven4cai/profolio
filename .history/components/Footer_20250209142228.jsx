import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='mt-20'>
      <div className='flex flex-col sm:flex-row items-center justify-between text-center mx-[10%]'>
        {/* Logo 部分 */}
        <Image src={assets.logo} alt='' className='w-36 bg-white rounded-full' />

        {/* 右侧信息部分 (邮件, LinkedIn, 电话) */}
        <div className='flex flex-col items-center sm:items-start mt-5 sm:mt-0 space-y-2'>

          {/* 邮件 */}
          <div className='flex items-center gap-2'>
            <Image src={isDark ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            <span className="text-gray-700 dark:text-white">stevencaijingheng@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <div className='flex items-center gap-2'>
            <AiFillLinkedin className='text-blue-700 dark:text-blue-400 text-xl' />
            <a href="https://www.linkedin.com/in/jingheng-cai-630177280/" target="_blank" rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-blue-500 transition">
              LinkedIn Profile
            </a>
          </div>

          {/* 电话 */}
          <div className='flex items-center gap-2'>
            <FaPhoneAlt className='text-green-600 text-lg' />
            <span className="text-gray-700 dark:text-white">0424 807 363</span>
          </div>

        </div>
      </div>

      {/* 底部版权信息 */}
      <div className='text-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; {currentYear} Steven Cai. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
