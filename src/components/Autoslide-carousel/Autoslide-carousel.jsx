import React from "react";
import Carousel from "./Carousel";
import { ArrowRight } from "lucide-react"; // Assuming you're using lucide-react

function AutoslideCarousel() {
  return (
    <section className="bg-white py-16 px-4 max-w-[1440px] mx-auto">
      <div className="max-w-[1152px] mx-auto text-center">
        {/* Top Button */}
        <div className="text-[16px] mb-8">Our Treasures</div>

        {/* Heading */}
        <h2 className="text-[20px] md:text-[28px] lg:text-[40px] font-bold leading-snug">
          <span className="text-[#999999] block">STUDENTS JUST LIKE YOU,</span>
          <span className="text-black">
            WHO HAVE STARTED THEIR <span className="text-[#F2B94A]">MBBS</span> JOURNEY
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#556987] text-[16px] mx-auto">
          They once had the same questions, concerns, and dreams—and today,
          they’re studying at top medical universities across the globe. With the
          right guidance, support, and planning, you too can take the first step
          toward becoming a doctor.
        </p>

        {/* Carousel + Button */}
        <div className="mt-10 relative">
          <Carousel />

          {/* Contact Us Button - Centered */}
          <div className="absolute top-75 inset-0 flex justify-center items-center z-20">
            <button className="hidden md:flex text-[16px] justify-between items-center bg-[#F2B94A] text-[#511B4D] h-[50px] w-[160px] px-0 pl-5 py-2 rounded-full font-semibold">
              Contact Us
              <div className="flex items-center justify-center w-5 md:w-10 h-5 md:h-10 bg-white rounded-full shadow-sm mr-1">
                <ArrowRight className="h-3 w-3 md:h-6 md:w-6" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoslideCarousel;
