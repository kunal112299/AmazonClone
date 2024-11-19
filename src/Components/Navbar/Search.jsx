import React from "react";
import searchIcon from "../../assets/search.svg";

function Search() {
  return (
    <div className="flex items-center max-w-[1080px] mx-auto border border-none rounded-md overflow-hidden shadow-sm focus-within:ring  w-[100%] m-[10px] h-[50px]">
      {/* Category Dropdown */}
      <select
        name="category"
        id="category"
        className="bg-gray-100 text-gray-700 text-sm px-3 py-2 border-r border-gray-300 focus:outline-none h-[100%]"
        aria-label="Select category"
      >
        <option value="All">All</option>
        <option value="Alexa skills">Alexa skills</option>
        <option value="Amazon Devices">Amazon Devices</option>
        <option value="Amazon fresh">Amazon Fresh</option>
        <option value="Amazon Fresh meat">Amazon Fresh Meat</option>
        <option value="Amazon Pharmacy">Amazon Pharmacy</option>
        <option value="Appliances">Appliances</option>
        <option value="Apps & Games">Apps & Games</option>
        <option value="Audible Audiobook">Audible Audiobook</option>
        <option value="Baby">Baby</option>
        <option value="Beauty">Beauty</option>
        <option value="Books">Books</option>
        <option value="Cars & MotorBike">Cars & MotorBike</option>
        <option value="Clothing & Accessories">Clothing & Accessories</option>
        <option value="Collectibles">Collectibles</option>
      </select>

      {/* Search Input */}
      <form action="" className="flex-grow h-[100%]">
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none h-[100%]"
          aria-label="Search input"
        />
      </form>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-orange-400 hover:bg-orange-500 px-4 py-2 flex justify-center items-center focus:outline-none h-[100%]"
        aria-label="Search"
      >
        <img src={searchIcon} alt="Search" width="20px" height="20px" />
      </button>
    </div>
  );
}

export default Search;
