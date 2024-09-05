"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import assets from "@/public/assets";

const Loading = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Image src={assets.logo.src} width={350} height={350} alt="Loading..." />
    </div>
  );
};

export default Loading;
