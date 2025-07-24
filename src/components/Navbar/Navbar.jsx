import React from "react";

function Page() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full text-white py-[14px] z-50">
        <div className="w-full container-custom mx-auto px-[10px] md:px-[64px] flex justify-between items-center">
          <div className="text-xl font-bold bg-[#511B4D] rounded-[76px] w-[176px]">
            <img
              src="/icons/nav-logo.png"
              alt="Doc Logo"
              className="object-cover"
            />
          </div>
          <a href="tel:9207400300">
            {/* <Button /> */}
          </a>  
        </div>
      </nav>
    </>
  );
}

export default Page;
