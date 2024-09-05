'use client'
import React from 'react';
import Image from 'next/image';
import { Card } from '@nextui-org/react';
import asset from '@/public/assets';
import FeatCard from '@/components/cards/FeatCard';

const page = () => {
  return (
    <div className="bg-slate-100 py-20 p-2 md:p-[6rem]">
      <div className="container mx-auto px-4 md:px-8 flex flex-col gap-[3rem]">
        <div className="text-center mb-12 flex flex-col gap-[2rem]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Our Story</h1>
          <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-600">
            LillDiary emerged from our own desire as parents to preserve precious memories without the hassle of scattered photos, privacy concerns, or storage limits.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="md:w-1/2">
            <Card  className="border-none w-[500px]">
              <Image
                alt="familyPic"
                className="object-cover rounded-lg"
                height={400}
                src={asset.ourStoryImg1}
                width={500}
              />
            </Card>
          </div>
          <div className="md:w-1/2">
            <p className="text-2xl text-gray-700 leading-relaxed">
              After welcoming my first daughter, I became an amateur photographer overnight - capturing endless photos and videos of all her giggles, snuggles, and milestones. My phone overflowed with irreplaceable memories I never wanted to lose.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse  items-center justify-between mt-12">
          <div className="md:w-1/2">
          <Card  className="border-none w-[500px]">
              <Image
                alt="familyPic"
                className="object-cover rounded-lg"
                height={400}
                src={asset.ourStoryImg2}
                width={500}
              />
            </Card>
          </div>
          <div className="">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Meanwhile, my wife filled notebook after notebook with handwritten accounts of playdates, conversations, and observations on our daughter&apos;s growth. Our extended families and friends demanded regular photo and story updates.
            </p>
          </div>
        </div>
        <div>
          <h1  className='text-[2rem] font-[700] text-primary'>We Realized,</h1>
          <p className="text-2xl text-gray-700 leading-relaxed"> 
            Technology could make preserving and sharing memories easier instead of overwhelming. So LillDiary was born out of our need for a better family diary.<br/><br/>
            Building a Memory Management Solution Combining our backgrounds in I.T. and design, we left our jobs to launch LillDiary - an online diary and app purpose-built for parents to easily:
          </p>
          
        </div>
        <div className='grid grid-cols-3'>
          <FeatCard 
          imageUrl={asset.featureImg6.src} 
          title='Upload unlimited photos/videos' 
          description=''
          />
          <FeatCard 
          imageUrl={asset.storyimg2.src} 
          title='Add written journal entries' 
          description=''
          />
                    <FeatCard 
          imageUrl={asset.featureImg2.src} 
          title='Organize by child or milestone' 
          description=''
          />
                    <FeatCard 
          imageUrl={asset.featureImg3.src} 
          title='Tag family/friends to collaborate' 
          description=''
          />
                    <FeatCard 
          imageUrl={asset.storyimg.src} 
          title='Customize pages with themes & templates' 
          description=''
          />
                              <FeatCard 
          imageUrl={asset.download.src} 
          title='Download pages or full diaries' 
          description=''
          />
        </div>
        <p className="text-2xl text-gray-700 leading-relaxed">We built LillDiary mobile app first, optimizing for one-handed memory capture typing up while chasing busy toddlers. The web dashboard came next for organizing, sharing access, and designing polished diary layouts.</p>
        <div className='p-[2rem] rounded-md border'>
          <p className="text-2xl text-gray-700 leading-relaxed">
            We officially launched LillDiary in 2024, and it quickly gained traction through word-of-mouth as users shared their experiences of capturing their baby's milestones with friends and family.   
          </p>
          </div>
        <div className='p-[2rem] rounded-md border'>
          <p className="text-2xl text-gray-700 leading-relaxed">
            Today, LillDiary assists families worldwide, recording childhoods to cherish now and for decades to come. We feel honored and motivated every day to further improve our capabilities.        
          </p>
        </div>
        <div className='p-[2rem] rounded-md border'>
          <p className="text-2xl text-gray-700 leading-relaxed">
          While LillDiary has grown into far more than we envisioned, our underlying goal remains the same – strengthen family bonds by preserving your most precious memories.          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
