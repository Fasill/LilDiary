'use client'
import React from 'react'
import asset from '@/public/assets';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { FaApple, FaGooglePlay,FaFacebookSquare } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from 'next/link';

declare module 'react-scroll';

const Footer = () => {
  return (
    <div className='bg-[#212121] flex items-center justify-center py-12 px-4'>
      <div className='flex flex-col items-center justify-center gap-[2rem] w-full max-w-[1200px]'>
        {/* Logo */}
        <Image src={asset.logo.src} alt='logo' width={150} height={80} className='w-auto h-auto' />

        {/* Main Heading */}
        <h1 className='text-white2 text-[24px] md:text-[30px] font-[700] text-center'>
          Start your FREE album with LilDiary now!
        </h1>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row gap-[1.5rem]'>
          <Button className='text-white2 text-[1rem] md:text-[1.3rem] bg-[rgb(14,14,14)] p-[1rem] md:p-[2rem] border'>
            <FaApple size={50} className='mr-2' />
            <div className='flex flex-col items-start'>
              <p className='text-[10px] md:text-[12px] m-0'>Download on the</p>
              <p className='m-0'>App Store</p>
            </div>
          </Button>
          <Button className='text-white2 text-[1rem] md:text-[1.3rem] bg-[rgb(14,14,14)] p-[1rem] md:p-[2rem] border'>
            <FaGooglePlay size={50} className='mr-2' />
            <div className='flex flex-col items-start'>
              <p className='text-[10px] md:text-[12px] m-0'>GET IT ON</p>
              <p className='m-0'>Google Play</p>
            </div>
          </Button>
        </div>

        <ul className='text-[12px] md:text-[13.2px] text-white2 font-[700] flex flex-col md:flex-row gap-[1.5rem] md:gap-[2rem] items-center max-sm:hidden'>
          {['Home', 'About us', 'Our Story', 'Privacy Policy', 'Terms & Conditions' ,'Contact Us' ].map((section,index) => (
            <li key={index} className='cursor-pointer'>
           
                {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className='text-white2 flex gap-[1.5rem] md:gap-[2rem]'>
          <Link href="/"><FaInstagram className='text-[25px] md:text-[30px]'/></Link>
          <Link href="/"><FaTwitter className='text-[25px] md:text-[30px]' /></Link>
          <Link href="/"><FaFacebookSquare className='text-[25px] md:text-[30px]' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;
