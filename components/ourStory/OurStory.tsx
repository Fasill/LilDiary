'use client'
import React from 'react';
import Image from 'next/image';
import { Card } from '@nextui-org/react';
import asset from '@/public/assets';

const OurStory = () => {
  return (
    <div className="bg-slate-100 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
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
              Meanwhile, my wife filled notebook after notebook with handwritten accounts of playdates, conversations, and observations on our daughter's growth. Our extended families and friends demanded regular photo and story updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
