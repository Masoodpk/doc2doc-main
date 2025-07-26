import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Helpsec() {
  return (


    <section className=" bg-[#511B4D]">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center py-5 md:py-20 px-4 max-w-[1440px] mx-auto">

<div className="mb-5">

  <button className="hidden md:flex justify-center text-[16px] items-center bg-[#FFFFFFF7]  h-[50px] w-[125px] px-0 px- py-2 rounded-full font-semibold">
              Contact Us
             
            </button>
</div>
 

        {/* Heading */}
     <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
  <h1 className="text-3xl md:text-[40px] font-semibold leading-tight text-white">
STILL DECIDING BETWEEN UNIVERSITIES?<br /><span className="text-[#FFFFFF80]"> LET US HELP YOU COMPARE</span>
  </h1>
</div>


        {/* Description */}
        <p className="text-[#D5DAE1] max-w-[900px] mt-6 text-[16px]">
          MBBS abroad for Indian students is more accessible than ever—find the best medical universities, talk to current Indian students, and move one step closer to becoming a doctor.
        </p>

        {/* Form Area */}
      {/* Form Area */}
<div className="mt-8 flex flex-col items-center gap-6 px-6">
  {/* Dropdowns Side by Side and Centered */}
  <div className="flex flex-col md:flex-row gap-6 w-full">
    {/* Country Select */}
    <div className="flex flex-col space-y-2 w-full">
      <Label className="text-left pb-2 text-white">Your NEET Score?</Label>
 <Select defaultValue="georgia">
  <SelectTrigger className="w-[250px]  bg-white md:w-[300px] lg:w-[400px] py-6 border  border-[#D1D1D1]">
    <SelectValue  placeholder="Select Country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="georgia">235</SelectItem>
    <SelectItem value="russia">200</SelectItem>
    <SelectItem value="philippines">180</SelectItem>
  </SelectContent>
</Select>

    </div>

    {/* Budget Select */}
    <div className="flex flex-col space-y-2 w-full">
      <Label className="text-left pb-2 text-white">What is your budget (Course Fee/year)?</Label>
      <Select  defaultValue="3lakhs">
       <SelectTrigger className="w-[250px] bg-white md:w-[300px] lg:w-[400px] py-6 border border-[#D1D1D1]">
          <SelectValue  placeholder="Select Budget" />
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

 
    </section>


  );
}

export default Helpsec;
