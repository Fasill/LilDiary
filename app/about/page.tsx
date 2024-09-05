import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center justify-center p-[4rem]'>
        <div className='grid  gap-[2rem] items-center justify-center w-[80%] text-[24px]'>
          <div className='flex items-center justify-center  '> 
            <h1 className='text-[2.5rem] font-[700]'>About Us</h1>
          </div>
          <p className='text-center'>LillDiary began simply - as new parents struggling to preserve our countless photos and videos of our daughter's earliest giggles and steps. We filled up phones and hard drives faster than we could organize and back up these irreplaceable memories.</p>
          <div className='p-[2rem] rounded-md border'>
            <p>
            Rather than risk losing those fleeting baby moments, we created LillDiary - a solution designed specifically for parents to effortlessly capture their family memories in one beautiful, private, unlimited online diary.
            </p>
          </div>
          <div className='p-[2rem] rounded-md border'>
            <p>
            As LillDiary grew from a personal passion project into a startup serving millions of families, our mission remained the same - to strengthen connections across generations through saved memories. We strive to build heirlooms as enduring as your family bonds.            </p>
          </div>
        <div>
          <h1  className='text-[2rem] font-[700] text-primary'>Today, </h1>
          <p>LillDiary has become our family too - a team of parents, grandparents, aunts, and uncles passionate about helping you easily record, organize and preserve your little ones' childhoods to cherish for a lifetime. We can't wait to be part of your child's journey from the first steps to first days of school and everywhere in between!</p>
        </div>
        </div>
    </div>
  )
}

export default page