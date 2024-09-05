import React from 'react';
import Components from "../index";
import asset from "@/public/assets";

const Features = () => {
  return (
    <div className='w-[100%] flex flex-wrap items-center justify-center gap-8 pb-[5rem] p-[3rem] bg-slate-100'>
      <Components.FeatCard 
        imageUrl={asset.featureImg1.src} 
        title='Effortless Memory Capture' 
        description='Our easy-to-use app and website make uploading photos, videos, and written entries a breeze.'
      />
      <Components.FeatCard 
        imageUrl={asset.featureImg2.src} 
        title='Automated Milestone Tracking' 
        description='Never wonder if you tracked your little one&lsquo;s first step, first tooth, or other milestones.'
      />
      <Components.FeatCard 
        imageUrl={asset.featureImg6.src} 
        title='Unlimited Storage' 
        description='LillDiary offers unlimited full resolution photo and video uploads and storage, safely secured with 256-bit encryption.'
      />
    </div>
  );
}

export default Features;
