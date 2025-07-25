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

function Page() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full text-white py-[14px] z-50 ">
        <div className="w-full container-custom mx-auto px-[10px] md:px-[64px] flex justify-between items-center">
          {/* Left: Logo */}
          <div className="bg-[#511B4D] rounded-[76px] w-[176px] h-[50px] flex items-center justify-center">
            <img
              src="/icons/nav-logo.png"
              alt="Doc Logo"
              className="object-contain w-[130px] h-auto"
            />
          </div>

          {/* Right: Buttons + Menu */}
          <div className="flex items-center space-x-4">
            <button className="bg-[#511B4D] text-white px-6 py-2 h-[50px] text-[16px] rounded-full font-semibold">
              Exam Portal
            </button>

            <button className="flex text-[16px] justify-between items-center bg-[#F2B94A] text-[#511B4D] h-[50px] w-[160px] px-0 pl-5 py-2 rounded-full font-semibold">
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
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here.
                  </SheetDescription>
                </SheetHeader>

                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-name">Name</Label>
                    <Input id="sheet-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-username">Username</Label>
                    <Input id="sheet-username" defaultValue="@peduarte" />
                  </div>
                </div>

                <SheetFooter className="mt-6">
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Page;
