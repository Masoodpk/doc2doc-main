import React from "react";
import { ArrowRight } from "lucide-react";
import UniversityCarousel from "./Carousel";
function UniversitySec() {
  return (
    
    <section className="bg-[#E9E3ED] py-16 px-4 pb-[100px]  mx-auto">
      <div className="max-w-[1440px] mx-auto">
<div className="text-[16px] mb-6 px-4 py-2 text-center bg-white w-[160px] rounded-full shadow-md">
    <p>Top Universities</p>
</div>

<h2 className="text-[#999999] text-[40px] font-bold mb-4">OUR TOP <span className="text-black">10 UNIVERSITIES</span></h2>
<p className="text-[#4D5F7A] text-[16px] mb-6">Carefully selected based on global rankings, affordability, quality of education, and student satisfaction, these top 10 universities are trusted by thousands of aspiring doctors. Each offers world-class MBBS programs with international recognition and a strong track record of success.</p>

  <button className="hidden md:flex text-[16px] justify-between items-center bg-[#F2B94A] text-[#511B4D] h-[50px] w-[160px] px-0 pl-5 py-2 rounded-full font-semibold">
              Contact Us
              <div className="flex items-center justify-center w-5 md:w-10 h-5 md:h-10 bg-white rounded-full shadow-sm mr-1">
                <ArrowRight className="h-3 w-3 md:h-6 md:w-6" />
              </div>
            </button>
            <div>
    <UniversityCarousel />
</div>
</div>

  </section>
  );
}

export default UniversitySec;
