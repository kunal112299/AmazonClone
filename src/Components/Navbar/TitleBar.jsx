import React, { useState } from "react";
import hamburger from "../../assets/Hamburger.svg";
import dropdown from "../../assets/dropdown.svg";
import profile from "../../assets/profile.svg";
import right from "../../assets/right.svg";

function TitleBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="bg-[#131921] flex px-6 py-1 text-white gap-6">
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          <div className="h-8 w-8">
            <img src={hamburger} alt="Open menu" />
          </div>
          <p className="text-xl">All</p>
        </span>
        <span className="flex items-center gap-2">
          <p>Fresh</p>
          <img src={dropdown} alt="Dropdown" className="h-2.5" />
        </span>
        <span>
          <p>MX Player</p>
        </span>
        <span>
          <p>Sell</p>
        </span>
        <span>
          <p>Best Seller</p>
        </span>
        <span>
          <p>Today's Deal</p>
        </span>
        <span>
          <p>Mobiles</p>
        </span>
        <span>
          <p>Electronics</p>
        </span>
        <span>
          <p>Home & Kitchen</p>
        </span>
        <span>
          <p>Customer Service</p>
        </span>
        <span className="flex items-center gap-2">
          <p>Prime</p>
          <img src={dropdown} alt="Dropdown" className="h-2.5" />
        </span>
        <span>
          <p>Amazon Pay</p>
        </span>
        <span>
          <p>New Releases</p>
        </span>
        <span>
          <p>Fashion</p>
        </span>
        <span>
          <p>Cars & MotorBikes</p>
        </span>
        <span>
          <p>Computers</p>
        </span>
        <span>
          <p>Sports, Fitness & Outdoors</p>
        </span>
        <span>
          <p>Books</p>
        </span>
      </div>

      {/* Sidebar and Overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black opacity-70"
            onClick={toggleSidebar}
          ></div>
          <div className="fixed top-0 left-0 h-full w-[405px] bg-white z-50">
            {/* Sidebar content */}
            <div className="p-0">
              <div className="w-full bg-slate-800 flex items-center px-10 gap-4 py-3">
                <img src={profile} alt="" width={"30px"} />
                <p className="font-bold text-xl text-white">Hello, sign in</p>
              </div>
              <div className="overflow-y-auto h-screen">
                <div className="px-10 py-6 flex flex-col gap-[22px]">
                  <p className="font-bold text-xl tracking-wide">Trending</p>
                  <p>Best Sellers</p>
                  <p>New Releases</p>
                  <p>Movers and Shakers</p>
                </div>
                <hr className="pt-3" />
                <div className="px-10 py-3 flex flex-col gap-[22px]">
                  <p className="font-bold text-xl tracking-wide">
                    Digital Content and Devices
                  </p>
                  <p>Amazon miniTv-FREE Entertainment</p>
                  <p className="flex whitespace-nowrap justify-between">
                    Echo & Alexa{" "}
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointers" />
                  </p>
                  <p className="flex whitespace-nowrap justify-between">
                    Fire Tv{" "}
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                  <p className="flex whitespace-nowrap justify-between">
                    Kindle E-Readers & eBooks{" "}
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                  <p className="flex whitespace-nowrap justify-between">
                    Audible Audiobooks{" "}
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                  <p className="flex whitespace-nowrap justify-between">
                    Amazon Prime Video{" "}
                    <img src={right} alt="" className=" w-[30px] h-[30px]cursor-pointer" />
                  </p>
                  <p className="flex whitespace-nowrap justify-between">
                    Amazon Prime Music{" "}
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                </div>
                <hr className="pt-3" />
                <div className="px-10 py-3 flex flex-col gap-[22px]">
                  <p className="font-bold text-xl tracking-wide">
                    Shop by categories
                  </p>
                  <p>Mobile, Computers</p>
                  <p className="flex whitespace-nowrap justify-between">
                    Tv, Appliances, Electronics
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                  <p className="flex whitespace-nowrap justify-between">
                    Men's Fashion
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                  <p className="flex whitespace-nowrap justify-between">
                    Woman's Fashion
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                  <p className="flex gap-6">
                    See all 
                    <img src={right} alt="" srcset="" className="w-[30px] h-[30px] rotate-90 cursor-pointer"/>
                  </p>
                  <div id="Categories">
                    <hr className="pt-3" />   
                    <div className="py-3 flex flex-col gap-[22px]">
                    <p className="flex whitespace-nowrap justify-between">
                    Woman's Fashion
                    <img src={right} alt="" className=" w-[30px] h-[30px] cursor-pointer" />
                  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TitleBar;
