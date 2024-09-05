'use client'
import React from 'react'
import asset from '@/public/assets';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

// Add the following line at the top of your file:
declare module 'react-scroll';
// import Link from "next/link";
// import NextLink from "next/link"; 
const Footer = () => {
  return (
    <div className='h-[70lvh] bg-[#212121] flex items-center justify-center p'>
      <div className=' flex flex-col items-center justify-center gap-[2rem] w-[80%] h-[80%]'>
        <Image src={asset.logo.src} alt='logo' width={200} height={100} />
        <h1 className='text-white2 text-[30px] font-[700]'>Start your FREE album with LilDiary now!</h1>
        <div className='  flex gap-[2rem] '>
              <Button className='text-white2 text-[1.3rem] bg-[rgb(14,14,14)] p-[2rem] border'><FaApple  size={60}/><div className='flex flex-col items-start'><p className='text-[12px] m-0'>Download on the</p><p className='m-0'>App Stores</p></div></Button>
              <Button className='text-white2 text-[1.3rem] bg-[rgb(14,14,14)] p-[2rem] border'><FaGooglePlay size={60}/><div className='flex flex-col items-start'><p className='text-[12px] m-0'>GET IT ON</p><p className='m-0'>Google Play</p></div></Button>

            </div>
            <ul className='text-[13.2px] text-white2 font-[700] flex gap-[2rem]'>
              <li className='cursor-pointer'>
              <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70} 
           >
                Home
                </ScrollLink>
                </li>
              <li className='cursor-pointer'>
              <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Our Features
          </ScrollLink></li>
              <li className='cursor-pointer'><ScrollLink
            to="whyUs"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Why Us
          </ScrollLink></li>
              <li className='cursor-pointer'><ScrollLink
            to="aboutUs"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            About Us
          </ScrollLink></li>
              <li className='cursor-pointer'>          <ScrollLink
            to="ourStory"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Our Story
          </ScrollLink></li>
            </ul>
            <div className='text-white2 flex gap-[2rem]'>
              <Link href="/"><FaInstagram size={30}/></Link>
              <Link href="/"><FaTwitter size={30}/></Link>
              <Link href="/"><FaFacebookSquare size={30}/></Link>

              
            </div>
      </div>
    </div>
  )
}

export default Footer