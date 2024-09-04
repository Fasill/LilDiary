"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import asset from "@/public/assets/index";

const FeatureCards = ()=> {
  return (
    <div className="max-w-[1600px] gap-[2rem] grid grid-cols-12 grid-rows-2 px-8 ">
    <Card className="col-span-12 sm:col-span-4 h-[300px] group">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h4 className="text-white  text-[1.3rem] font-bold">Effortless Memory Capture</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={asset.featureImg1.src}
      />
      <CardFooter className="absolute bg-black/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between transform transition-transform duration-300  ">

            <p className="text-[#fcfcfc] text-[0.9rem]"> 
            Recording memories with LillDiary is simple. Our easy-to-use app and website make uploading photos, videos, and written entries a breeze. Tag memories by child, milestone, or custom category so you can quickly flip through your favorites.
            </p>
          
      </CardFooter>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] group">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Effortless Memory Capture</p> */}
        <h4 className="text-[#242323]   text-[1.3rem] font-bold">Automated Milestone Tracking</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={asset.featureImg2.src}
      />

      <CardFooter className="absolute bg-black/80  bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between transform transition-transform duration-300 translate-y-[100%] group-hover:translate-y-[2px]">

            <p className="text-[#fcfcfc]  text-[0.9rem]"> 
            Never wonder if you tracked your little one’s first step, first tooth, or other milestones. LillDiary lets you log these key moments and will automatically compile milestone memories in your child’s timeline.            </p>
          
      </CardFooter>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] group">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Effortless Memory Capture</p> */}
        <h4 className="text-white  text-[1.3rem] font-bold">Unlimited Photo and Video Storage</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={asset.featureImg6.src}
      />
     <CardFooter className="absolute bg-black/80  bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between transform transition-transform duration-300 translate-y-[100%] group-hover:translate-y-[2px]">

<p className="text-[#fcfcfc]  text-[0.9rem]"> 
            Run out of room on your phone capturing photos and videos? No problem. LillDiary offers unlimited full resolution photo and video uploads and storage, safely secured with 256-bit encryption. </p>
          
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 group">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Effortless Memory Capture</p> */}
        <h4 className="text-white  text-[1.3rem] font-bold">Built-In Collaboration</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        // src="https://nextui.org/images/card-example-6.jpeg"
        src={asset.featureImg7.src}

      />
     <CardFooter className="absolute bg-black/80  bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between transform transition-transform duration-300 translate-y-[100%] group-hover:translate-y-[2px]">

<p className="text-[#fcfcfc]  text-[0.9rem]"> 
            Invite grandparents, relatives or friends to add their own photos and stories to your child’s diary. LillDiary makes sharing simple with customizable access controls, ensuring entries remain private until you decide to share more publicly. </p>
          
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 group">
    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        {/* <p className="text-tiny text-white/60 uppercase font-bold">Effortless Memory Capture</p> */}
        <h4 className="text-white  text-[1.3rem] font-bold">Start Creating Your Album Today </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        // src="https://nextui.org/images/card-example-5.jpeg"
        src={asset.featureImg8.src}

      />
     <CardFooter className="absolute bg-black/80  bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between transform transition-transform duration-300 translate-y-[100%] group-hover:translate-y-[2px]">

<p className="text-[#fcfcfc]  text-[0.9rem]"> 
            At LillDiary, we strive to build lifelong connections between parents and children through saved memories. Much more than just a baby book, your child’s LillDiary grows alongside them, chronicling precious moments from every stage.
We invite you to join millions of other families already using LillDiary to effortlessly capture photos, videos, milestones and memories without fear of lost photos, privacy concerns, or storage limits.
Sign up today for your free account and start building your family’s LillDiary! Capture your children’s childhoods to cherish for a lifetime and pass on to future generations.</p>
          
      </CardFooter>
    </Card>
  </div>
  );
}
export default FeatureCards