"use client";

import * as React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const cards = [
  {
    img: "/university.png",
    name: "Caucasus University in Tbilisi",
    flag: "/georgia.png",
    country: "Georgia",
    worldRank: 7324,
    accommodation: "₹15,000 /month",
    indianStudents: "500 (approx.)",
    courseFee: "₹5 Lakhs /year",
    courseDuration: "6 years",
    food: "₹8,000 /month"
  },
  {
    img: "/university.png",
    name: "Bogomolets National Medical University",
    flag: "/georgia.png",
    country: "Ukraine",
    worldRank: 6201,
    accommodation: "₹12,000 /month",
    indianStudents: "1200 (approx.)",
    courseFee: "₹4.5 Lakhs /year",
    courseDuration: "6 years",
    food: "₹7,500 /month"
  },
  {
    img: "/university.png",
    name: "AMA School of Medicine",
    flag: "/georgia.png",
    country: "Philippines",
    worldRank: 8450,
    accommodation: "₹10,000 /month",
    indianStudents: "800 (approx.)",
    courseFee: "₹3.8 Lakhs /year",
    courseDuration: "5.5 years",
    food: "₹9,000 /month"
  },
  {
    img: "/university.png",
    name: "Tbilisi State Medical University",
    flag: "/georgia.png",
    country: "Georgia",
    worldRank: 5582,
    accommodation: "₹14,000 /month",
    indianStudents: "1000 (approx.)",
    courseFee: "₹4.2 Lakhs /year",
    courseDuration: "6 years",
    food: "₹7,000 /month"
  },
  {
    img: "/university.png",
    name: "University of Perpetual Help",
    flag: "/georgia.png",
    country: "Philippines",
    worldRank: 7903,
    accommodation: "₹11,000 /month",
    indianStudents: "950 (approx.)",
    courseFee: "₹3.6 Lakhs /year",
    courseDuration: "5.8 years",
    food: "₹8,200 /month"
  },
  {
    img: "/university.png",
    name: "Osh State University",
    flag: "/georgia.png",
    country: "Kyrgyzstan",
    worldRank: 8823,
    accommodation: "₹9,000 /month",
    indianStudents: "600 (approx.)",
    courseFee: "₹2.5 Lakhs /year",
    courseDuration: "6 years",
    food: "₹6,500 /month"
  },
  {
    img: "/university.png",
    name: "Dnipro Medical Institute",
    flag: "/georgia.png",
    country: "Ukraine",
    worldRank: 6650,
    accommodation: "₹13,000 /month",
    indianStudents: "400 (approx.)",
    courseFee: "₹4.8 Lakhs /year",
    courseDuration: "6 years",
    food: "₹7,800 /month"
  },
  {
    img: "/university.png",
    name: "Batumi Shota Rustaveli State University",
    flag: "/georgia.png",
    country: "Georgia",
    worldRank: 7055,
    accommodation: "₹12,500 /month",
    indianStudents: "550 (approx.)",
    courseFee: "₹4.3 Lakhs /year",
    courseDuration: "6 years",
    food: "₹8,500 /month"
  }
];

export default function UniversityCarousel() {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-10 relative">
      <Carousel
        opts={{ 
          align: "center", 
          loop: true,
          skipSnaps: false
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {cards.map((card, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-[190px] object-cover rounded-md"
                />
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#511B4D] line-clamp-2">
                      {card.name}
                    </h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={card.flag} alt="flag" className="h-[20px] w-[30px] object-cover" />
                    <p className="text-[12px] text-gray-500 mt-1">{card.country}</p>
                  </div>
                </div>
                
                <div className="p-4 grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#939393] text-xs">WorldRank:</span>
                      <span className="font-medium text-xs">{card.worldRank}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#939393] text-xs">Indian Students:</span>
                      <span className="font-medium text-xs">{card.indianStudents}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#939393] text-xs">Duration</span>
                      <span className="font-medium text-xs">{card.courseDuration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#939393] text-xs">Accommodation:</span>
                      <span className="font-medium text-xs">{card.accommodation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#939393] text-xs">Course Fee:</span>
                      <span className="font-medium text-xs">{card.courseFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#939393] text-xs">Food:</span>
                      <span className="font-medium text-xs">{card.food}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Grouped navigation buttons - vertical stack without gap */}
        <div className="absolute right-4 top-115 -translate-y-1/2 flex gap-2">
          <CarouselPrevious className="relative static h-10 w-10 rounded-full border-0 shadow-sm bg-white hover:bg-gray-50" />
          <CarouselNext className="relative static h-10 w-10 rounded-full border-0 shadow-sm bg-white hover:bg-gray-50" />
        </div>
      </Carousel>
    </div>
  );
}