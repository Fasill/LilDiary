'use client'
import React, { useState, useEffect } from 'react';
import Component from '@/components';
import assets from '@/public/assets';
import Image from 'next/image';

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false); // To handle fade-out transition

  useEffect(() => {
    // Simulate the loading of the 'Home' component or external data
    const timer = setTimeout(() => {
      setIsFadingOut(true); // Start fading out
      setTimeout(() => {
        setIsLoading(false); // Remove loading screen after fade-out
      }, 300); // Set the same duration as the fade-out animation
    }, 1000); // Simulate a 2-second loading time (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-500 ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image src={assets.logo.src} width={350} height={400} alt="Loading..." />
        </div>
      )}
      <div className={isLoading ? 'invisible' : 'fade-in'}>
        <div id="home">
          <Component.Home />
        </div>
        <div id="features">
          <Component.AsParents />
          <Component.Features />
        </div>
        <div id="whyUs">
          <Component.WhyUs />
        </div>
        <div id="aboutUs">
          <Component.Aboutus />
        </div>
        <div id="ourStory">
          <Component.OurStory />
        </div>
        <div id="testimonial">
          <Component.Testimonial />
        </div>
        <div id="contact">
          <Component.Contact />
        </div>
        <div id="footer">
          <Component.Footer />
        </div>
      </div>
    </>
  );
};

export default Page;
