

import { Button } from '@nextui-org/button'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Home = () => {

  return (
    <div className="relative h-[100lvh]">
    <div className="myHome h-full w-full absolute z-0"></div>
    <div className="flex items-center justify-between h-full p-[5rem]">
      <div className='z-[999] flex flex-col items-evenly justify-evenly h-full'>
        <div className='flex  flex-col items-start gap-[1rem]'>
          <h1 className='text-[4rem] text-white2 font-bold'>
            Capture Your Family&apos;s Precious Memories with LillDiary
          </h1>
          <p className='text-white2 text-[1.5rem] w-[90%] '>
            Welcome to LillDiary! We help parents to create an online diary for collecting precious memories and milestones of their little ones, from birth through the years.
          </p>
          <Button as={Link} color="primary" href="#" variant="flat" className="text-2xl font-sans learn-more-button ">
            Learn More
            <FaArrowRight className="arrow-icon" />
          </Button>
        </div>
        <div>{" "}</div>
      </div>
      <div className='w-[80%] z-[999]  h-[100%] flex flex-col justify-between items-end'>
        <div>{""}</div>
        <p className='z-[999]  text-[1.4rem] w-[65%] text-white'>&quot; With LillDiary, you&apos;ll never miss another laugh, first step, or family adventure. Save it all in one place to revisit for years to come. &quot;</p>
      </div>
    </div>
  </div>
  )
}

export default Home