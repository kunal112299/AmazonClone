import React from "react";
import logo from "../../assets/Logo.svg";
import location from "../../assets/Location.svg";
import cart from '../../assets/Cart.svg'
import Search from "./Search";
import dropdown from "../../assets/dropdown.svg";
import TitleBar from "./TitleBar";
function Navbar() {
  return (
    <>
      <div className="bg-[#0F1111] flex items-center gap-10 w-[100%] h-[80px] px-[20px]">
        <div className="flex gap-12 ">
          <img src={logo} alt="" className="w-[129px] h-[60px] scale-150" />
          <div className="flex items-center justify-center w-[210px]">
            <img src={location} alt="" width="20px" />
            <div className="flex-col text-white text-[18px] ">
              <p className="whitespace-nowrap">Delivering to Roorkee 201014</p>
              <p className="font-bold">Update Location</p>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <Search />
        </div>
        <div className="flex gap-6">
          <div className="text-white leading-none ">
            <p className="text-sm">Hello, sign in</p>
            <p className="flex justify-center items-center font-semibold">
              Accounts & Lists{" "}
              <img src={dropdown} alt="" srcset="" className="w-[30px]" />
            </p>
          </div>
          <div className="flex flex-col text-white ">
            <p>Return</p>
            <p className="font-bold whitespace-nowrap">& Orders</p>
          </div>
        </div>
        <div className="flex gap-6 text-white justify-start items-end text-2xl relative">
        <img src={cart} alt="" srcset=""  className="w-[60px]"/>
        <span className="absolute top-[2px] left-[30px] text-orange-400">0</span>
        <span>cart</span>
        </div>
      </div>
      <TitleBar/>
    </>
  );
}

export default Navbar;
