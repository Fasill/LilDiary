

import { Button } from '@nextui-org/button'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Home = () => {

  return (
    <div className="relative h-[100lvh]">
    <div className="myHome h-full w-full absolute z-0"></div>
    <div className="flex items-center justify-between h-full p-[5rem]">
      <div className='z-[999]  flex flex-col items-center justify-between h-full w-[100%]'>
        <div className='flex  flex-col items-center justify-center self-start gap-[1rem]  w-[100%]'>
          <h1 className='text-[3rem] text-black font-bold max-md:text-[2rem] text-center'>
            Capture Your Family&apos;s Precious Memories with LillDiary
          </h1>
          <p className='text-black text-[1.5rem] w-[80%] text-center '>
          We help parents create online diaries to capture their child's precious milestones."                    </p>
          {/* <Button as={Link} color="primary" href="#" variant="flat" className="text-2xl font-sans learn-more-button ">
            Learn More
            <FaArrowRight className="arrow-icon" />
          </Button> */}
        </div>
        <div  className='flex items-center justify-end w-[100%]'>
          <div className=' self-end flex gap-[2rem] '>
            <Button className='text-white2 text-[1.3rem] bg-[rgb(14,14,14)]'><FaApple/><p>App Stores</p></Button>
            <Button className='text-white2 text-[1.3rem] bg-[rgb(14,14,14)]'><FaGooglePlay/><p>Google Play</p></Button>

          </div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Home