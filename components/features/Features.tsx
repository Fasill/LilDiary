import React from "react";
import Components from "../index";
import asset from "@/public/assets";

const Features = () => {
  return (
    <div className="w-[100%] flex flex-wrap items-center justify-center gap-9 pb-[5rem] p-[3rem] bg-slate-100">
      <Components.FeatCard
        imageUrl={asset.featureImg1.src}
        title="Effortless Memory Capture"
        description="Recording memories with LillDiary is simple. Our easy-to-use app and website make uploading photos, videos, and written entries a breeze. Tag memories by child, milestone, or custom category so you can quickly flip through your favorites."
      />
      <Components.FeatCard
        imageUrl={asset.featureImg2.src}
        title="Automated Milestone Tracking"
        description="Never wonder if you tracked your little one’s first step, first tooth, or other milestones. LillDiary lets you log these key moments and will automatically compile milestone memories in your child’s timeline."
      />
      <Components.FeatCard
        imageUrl={asset.featureImg6.src}
        title="Unlimited Storage"
        description="Run out of room on your phone capturing photos and videos? No problem. LillDiary offers unlimited full resolution photo and video uploads and storage, safely secured with 256-bit encryption."
      />
      <Components.FeatCard
        imageUrl={asset.pimg2.src}
        title="Customizable Templates"
        description="Whether you want to record funny conversations, creative journal style entries showing your child’s artistic talents, or more - our templates make it easy. Choose from a variety of backgrounds, layouts, fonts, and color schemes to showcase your family's special memories."
      />
      <Components.FeatCard
        imageUrl={asset.pimg3.src}
        title="Built-In Collaboration"
        description="Invite grandparents, relatives or friends to add their own photos and stories to your child’s diary. LillDiary makes sharing simple with customizable access controls, ensuring entries remain private until you decide to share more publicly."
      />
      <Components.FeatCard
        imageUrl={asset.pimg1.src}
        title="Downloadable & Printable"
        description="While LillDiary preserves your digital memories safely in the cloud, we make it easy for you to download or print pages from your child’s diary. Many parents love converting entries into printed photo books or scrapbooks as keepsake heirlooms to pass down."
      />
    </div>
  );
};

export default Features;
