// components/Hero.tsx
"use client";

import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
function Hero() {
  return (
    <section className=" bg-white mt-25">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center py-5 md:py-10 px-4 max-w-[1440px] mx-auto">

        {/* Heading */}
     <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
  <h1 className="text-3xl md:text-[64px] font-bold leading-tight text-[#511B4D]">
    IS BECOMING A <br/>
    DOCTOR YOUR <span className="text-[#F2B94A]">DREAM?</span>
  </h1>
  <img
    src="/icons/flight.png"
    alt="Flight"
    className="w-[170px] h-[60px] mt-20 obejct-cover"
  />
</div>


        {/* Description */}
        <p className="text-[#6B7280] max-w-[1000px] mt-6 text-[16px]">
          MBBS abroad for Indian students is more accessible than ever—find the best medical universities, talk to current Indian students, and move one step closer to becoming a doctor.
        </p>

        {/* Form Area */}
      {/* Form Area */}
<div className="mt-8 flex flex-col items-center gap-6 px-6">
  {/* Dropdowns Side by Side and Centered */}
  <div className="flex flex-col md:flex-row gap-6 w-full">
    {/* Country Select */}
    <div className="flex flex-col space-y-2 w-full">
      <Label className="text-left pb-2">Which country do you want to study?</Label>
 <Select defaultValue="georgia">
  <SelectTrigger className="w-[250px] md:w-[300px] lg:w-[400px] py-6 border border-[#D1D1D1]">
    <SelectValue placeholder="Select Country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="georgia">Georgia</SelectItem>
    <SelectItem value="russia">Russia</SelectItem>
    <SelectItem value="philippines">Philippines</SelectItem>
  </SelectContent>
</Select>

    </div>

    {/* Budget Select */}
    <div className="flex flex-col space-y-2 w-full">
      <Label className="text-left pb-2">What is your budget (Course Fee/year)?</Label>
      <Select defaultValue="3lakhs">
       <SelectTrigger className="w-[250px] md:w-[300px] lg:w-[400px] py-6 border border-[#D1D1D1]">
          <SelectValue placeholder="Select Budget" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="3lakhs">3 LAKHS</SelectItem>
          <SelectItem value="5lakhs">5 LAKHS</SelectItem>
          <SelectItem value="10lakhs">10 LAKHS</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>

  {/* Search Button Centered Below */}
  <Button className="bg-[#F2B94A] text-[#511B4D] font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:brightness-110 w-[200px] h-[50px] text-[16px]">
    Search
  </Button>
</div>


      </div>

      {/* Bottom Doctor Image Section */}
      <div className="relative mt-30">
        <div
          className="w-full h-[150px] md:h-[240px] bg-cover bg-center rounded-t-[32px]"
          style={{ backgroundImage: "url('/herobg.png')" }} // Replace with your background image
        ></div>

        {/* Doctor Image Positioned at Center */}
        <div className="absolute inset-0 flex justify-center -top-[100px] md:-top-[140px]">
<img src="/herodoctor.png" alt="Doctor" className="object-contain w-[300px] md:w-[420px] h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
