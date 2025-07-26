import React from "react";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";
function Page() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full text-white px-4 py-[14px] z-50 bg-transparent">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[1440px] container-custom mx-auto flex justify-between items-center">
            {/* Left: Logo */}
            <div className="bg-[#511B4D] rounded-[76px] w-[130px] md:w-[176px] md:h-[50px] flex items-center justify-center px-2 md:px-0">
              <img
                src="/icons/nav-logo.png"
                alt="Doc Logo"
                className="object-cover w-[130px] md:w-[130px] h-auto"
              />
            </div>

            {/* Right: Buttons + Menu */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-[#511B4D] text-white px-6 py-2 h-[50px] text-[16px] rounded-full font-semibold">
                Exam Portal
              </button>

              <button className="hidden md:flex text-[16px] justify-between items-center bg-[#F2B94A] text-[#511B4D] h-[50px] w-[160px] px-0 pl-5 py-2 rounded-full font-semibold">
                Contact Us
                <div className="flex items-center justify-center w-5 md:w-10 h-5 md:h-10 bg-white rounded-full shadow-sm mr-1">
                  <ArrowRight className="h-3 w-3 md:h-6 md:w-6" />
                </div>
              </button>

              {/* ShadCN Sheet Trigger with Menu Icon */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="ml-6 p-2 rounded-full bg-white">
                    <Menu className="h-8 w-8 md:h-8 md:w-8 text-[#511B4D]" />
                  </button>
                </SheetTrigger>
               
     <SheetContent className="[&_[data-state=closed]]:hidden">

      <SheetTitle></SheetTitle>

      <SheetClose asChild>
        <button
          className="absolute left-0 top-0 mt-6 ml-4 text-[#0000004D] focus:outline-none text-4xl"
          aria-label="Close"
        >
      &times;
    </button>
  </SheetClose>

  {/* Remove default close btn using hidden */}
  <style>{`.sheet-close { display: none !important; }`}</style>

  {/* Menu Items */}
<ul className="flex flex-col items-end space-y-6 mt-[70px] mr-6 text-md md:text-xl font-semibold">
  {["HOME", "ABOUT", "UNIVERSITY", "EXAM PORTAL", "ABOUT US", "CONTACT US"].map((item) => (
    <li
      key={item}
      className="text-[#511B4D] md:text-[#511B4D4D] hover:text-[#511B4D] hover:underline underline-offset-10 cursor-pointer transition-all duration-300 ease-in-out font-bold"
    >
      {item}
    </li>
  ))}
</ul>
<SheetFooter>

  <div className="text-right pr-2 ">
    <p className="text-[12px]">Join our growing family on social media!</p>
    <ul className="flex gap-6  mt-4 justify-end">
      <li><Icon icon="logos:facebook" width="26" height="26" /></li>
      <li><Icon icon="skill-icons:instagram" width="26" height="26" /></li>
      <li><Icon icon="devicon:twitter" width="26" height="26" /></li>
    </ul>
  </div>
              </SheetFooter>
</SheetContent>

            </Sheet>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Page;
