'use client'
import React from 'react';
import Image from 'next/image';
import { Card } from '@nextui-org/react';
import asset from '@/public/assets';
import FeatCard from '@/components/cards/FeatCard';

const OurStoryPage = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 md:px-[6rem]">
      <div className="container mx-auto flex flex-col gap-[4rem]">
        
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Our Story</h1>
          <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-600">
            LillDiary emerged from our desire as parents to preserve precious memories without the hassle of scattered photos, privacy concerns, or storage limits.
          </p>
        </div>

        {/* Story Image + Text Section 1 */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="md:w-1/2">
            <Card className="shadow-lg w-[500px]">
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

        {/* Story Image + Text Section 2 */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center justify-center">
          <div className="md:w-1/2">
            <Card className="shadow-lg w-[500px]">
              <Image
                alt="familyPic"
                className="object-cover rounded-lg"
                height={400}
                src={asset.ourStoryImg2}
                width={500}
              />
            </Card>
          </div>
          <div className="md:w-1/2">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Meanwhile, my wife filled notebook after notebook with handwritten accounts of playdates, conversations, and observations on our daughter's growth. Our extended families and friends demanded regular updates.
            </p>
          </div>
        </div>

        {/* Realization Section */}
        <div className="text-center mt-12">
          <h2 className="text-[2.5rem] font-bold text-primary">We Realized</h2>
          <p className="text-2xl text-gray-700 leading-relaxed mt-4">
            Technology could make preserving and sharing memories easier instead of overwhelming. So LillDiary was born out of our need for a better family diary.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
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

        {/* Final Thoughts Section */}
        <div className="text-2xl text-gray-700 leading-relaxed mt-12">
          <p>
            We built LillDiary mobile app first, optimizing for one-handed memory capture while chasing busy toddlers. The web dashboard came next for organizing, sharing access, and designing polished diary layouts.
          </p>
        </div>

        {/* Launch & Expansion Section */}
        <div className="bg-white shadow-lg p-8 rounded-lg border mt-8">
          <p className="text-2xl text-gray-700 leading-relaxed">
            We officially launched LillDiary in 2024, and it quickly gained traction through word-of-mouth as users shared their experiences of capturing their baby's milestones with friends and family.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-lg border mt-8">
          <p className="text-2xl text-gray-700 leading-relaxed">
            Today, LillDiary assists families worldwide, recording childhoods to cherish now and for decades to come. We feel honored and motivated every day to further improve our capabilities.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-lg border mt-8">
          <p className="text-2xl text-gray-700 leading-relaxed">
            While LillDiary has grown into far more than we envisioned, our underlying goal remains the same – strengthen family bonds by preserving your most precious memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
