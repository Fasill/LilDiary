'use client'
import asset from '@/public/assets'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Aboutus = () => {
  return (
    <div className='flex items-center justify-center h-[70lvh] px-5 md:px-[5rem] overflow-hidden'>
      <div className='container flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-[50%] flex flex-col gap-6 md:gap-10'>
          <div className='flex flex-col gap-6 md:gap-10'>
            <h1 className='text-[20px] md:text-[24px] font-bold font-sans'>
              Preserve Precious Family Moments with LillDiary
            </h1>
            <p className='text-[16px] md:text-[24px]'>
              LillDiary began simply - as new parents struggling to preserve our countless photos and videos of our daughter&apos;s earliest giggles and steps. We filled up phones and hard drives faster than we could organize and back up these irreplaceable memories.
            </p>
          </div>
          <div>
            <Button as={Link} color="secondary" href="#" variant="flat" className="text-lg md:text-xl font-sans">
              Read More ..
            </Button>
          </div>
        </div>
        <div className='mt-10 md:mt-0 md:w-[40%] flex justify-center max-md:hidden'>
          <Image 
            src={asset.iphone} 
            width={300} 
            height={500} 
            alt="phone" 
            className='w-[100%] max-w-[300px] md:max-w-[600px] mt-10 md:mt-[20rem]' 
          />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
