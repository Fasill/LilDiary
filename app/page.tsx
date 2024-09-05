'use client'
import React from 'react';
import Component from '@/components';

const Page: React.FC = () => {
  return (
    <div>
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
      <div id="contact">
        <Component.Contact />
      </div>
      <div id="footer">
        <Component.Footer/>
      </div>
    </div>
  );
};

export default Page;
