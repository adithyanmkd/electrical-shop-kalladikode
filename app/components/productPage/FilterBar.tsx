import React from "react";

const FilterBar = () => {
  return (
    <div>
      <ul className="mt-6 flex">
        <li className="px-[21px] mr-4 py-[6px] rounded-2xl bg-[#EDF5F9] text-[#5599CA]">
          All Product
        </li>
        <li className="px-[21px] mr-4 py-[6px] rounded-2xl border border-[#8B8B8B] text-[#8B88B]">
          Lighting
        </li>
        <li className="px-[21px] mr-4 py-[6px] rounded-2xl border border-[#8B8B8B] text-[#8B88B]">
          Wiring & Cables
        </li>
        <li className="px-[21px] mr-4 py-[6px] rounded-2xl border border-[#8B8B8B] text-[#8B88B]">
          MCBs & DBs
        </li>
        <li className="px-[21px] mr-4 py-[6px] rounded-2xl border border-[#8B8B8B] text-[#8B88B]">
          Accessories
        </li>
        <li className="ml-auto flex items-center space-x-2 px-2 border rounded-2xl border-[#CCCCCC]">
          <img src="./icons/sort.svg" alt="sort icon" />
          <p className="text-[#8B8B8B]">Sort By</p>
          <img src="./icons/down-arrow.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
