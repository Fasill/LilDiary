import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const Page = () => {
  return (
    <div className="p-8 md:p-[5rem] h-[50vh] flex items-center justify-center">
      <div className="text-center md:text-left ">
        <FaQuoteLeft size={40} className="text-secondary mx-auto md:mx-0" />
        <p className="text-lg md:text-[2rem] mt-4 whitespace-pre-line">
        As parents ourselves, we know how quickly little ones grow up. That&apos;s why we launched LillDiary - to provide families with a safe, private, and beautifully designed space. You can use LillDiary to save photos, videos, written memories, and more in one organized online album.
        </p>
      </div>
    </div>
  );
};

export default Page;