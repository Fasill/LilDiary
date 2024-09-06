"use client";
import React, { useState, useEffect } from "react";
import Component from "@/components";
import assets from "@/public/assets";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <>
      <div>
        <div id="home">
          <Component.Home />
        </div>
        <div id="features">
          <Component.AsParents />
          <Component.Features />
          <Component.Startcreating />
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
      </div>
    </>
  );
};

export default Page;
