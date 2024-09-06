

import asset from '@/public/assets';
import { Button } from '@nextui-org/button'
import Image from 'next/image';
import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Home = () => {

  return (
    <div className="relative h-[100lvh] mt-[4.7rem]">
    <div className="h-full w-full absolute z-0 bg-[url('/assets/features/img4.jpg')] bg-cover bg-[center_3px] bg-no-repeat -scale-x-100"></div>
    <div className="flex items-center justify-between h-full sm:p-[5rem] max-sm:p-[2rem]">
      <div className='z-[999]  flex flex-col items-center justify-between h-full w-[100%]'>
        <div className='flex  flex-col items-center justify-center self-start gap-[1rem]  w-[100%]'>
          <h1 className='text-[3rem]  font-bold max-md:text-[1.5rem] text-center text-white bg-[#817c7c8c] p-[10px] pl-[30px] pr-[30px] rounded-md' >
            Capture Your Family&apos;s Precious Memories with LillDiary
          </h1>
          <p className='text-black text-[1.5rem] w-[80%] text-center max-lg:hidden'>
          We help parents create online diaries to capture their child&lsquo;s precious milestones.                   </p>
    
        </div>
        <div  className='flex items-center justify-end w-[100%]'>
          <div className=' flex flex-col items-center justify-center gap-[2rem] max-md:hidden'>
            <Image src={asset.iphone} alt='home' width={350} height={100} />
            <div className=' self-end flex gap-[2rem] '>
              <Button className='text-white2 text-[1.3rem] bg-[rgb(14,14,14)]'><FaApple/><p>App Stores</p></Button>
              <Button className='text-white2 text-[1.3rem] bg-[rgb(14,14,14)]'><FaGooglePlay/><p>Google Play</p></Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home