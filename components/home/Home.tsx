"use client";
import asset from "@/public/assets";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Home: React.FC = () => {
  useEffect(() => {
    const img = new (window.Image as any)();
    img.src = "/assets/backgrounds/lastbg.jpg";
    img.onload = () => {
      const lazyBackground = document.querySelector(".lazy-background");
      if (lazyBackground instanceof HTMLElement) {
        lazyBackground.style.backgroundImage = `url('/assets/backgrounds/lastbg2.jpg')`;
      }
    };
  }, []);

  return (
    <div className="relative h-[100lvh] mt-[4.7rem]">
      <div className="h-full w-full absolute z-0 lazy-background bg-cover bg-[center_3px] bg-no-repeat"></div>
      <div className="flex items-center justify-between h-full sm:p-[5rem] max-sm:p-[2rem]">
        <div className="z-[999] flex flex-col items-center justify-between h-full w-[100%]">
          <div className="flex flex-col items-center justify-center self-start gap-[1rem] w-[100%]">
            <h1 className="text-[3rem] font-bold max-md:text-[1.5rem] text-center text-white bg-[#817c7c8c] p-[10px] pl-[30px] pr-[30px] rounded-md">
              Capture Your Family&apos;s Precious Memories with LillDiary
            </h1>
            <p className="text-black text-[1.5rem] w-[80%] text-center max-lg:hidden">
              We help parents create online diaries to capture their
              child&lsquo;s precious milestones.{" "}
            </p>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-center gap-[1rem] max-md:hidden">
              <Image src={asset.iphone} alt="home" width={400} height={100} />
              <div className="flex flex-col md:flex-row gap-[1.5rem]">
                <Button className="text-white2 text-[1rem] md:text-[1.3rem] bg-[rgb(14,14,14)] p-[1rem] md:p-[2rem] border">
                  <FaApple size={50} className="mr-2" />
                  <div className="flex flex-col items-start">
                    <p className="text-[10px] md:text-[12px] m-0">
                      Download on the
                    </p>
                    <p className="m-0">App Store</p>
                  </div>
                </Button>
                <Button className="text-white2 text-[1rem] md:text-[1.3rem] bg-[rgb(14,14,14)] p-[1rem] md:p-[2rem] border">
                  <FaGooglePlay size={50} className="mr-2" />
                  <div className="flex flex-col items-start">
                    <p className="text-[10px] md:text-[12px] m-0">GET IT ON</p>
                    <p className="m-0">Google Play</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
