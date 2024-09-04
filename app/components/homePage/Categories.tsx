import React from "react";

const Categories = () => {
  return (
    <div className="mt-10 w-[1119px] mx-auto">
      <h1 className="text-center text-3xl mt-6 pb-5">Shop by Categories</h1>
      <div className="grid grid-cols-3 place-items-center">
        <div className="w-[357px] h-[361px]">
          <div className="w-[357px] h-[309px]">
            <img src="./images/catagoryItems/item1.png" alt="items" />
            <p className="mt-4 text-center">Fan</p>
          </div>
        </div>
        <div className="w-[357px] h-[361px]">
          <div className="w-[357px] h-[309px]">
            <img src="./images/catagoryItems/item2.png" alt="items" />
            <p className="mt-4 text-center">Lighting Solutions</p>
          </div>
        </div>
        <div className="w-[357px] h-[361px]">
          <div className="w-[357px] h-[309px]">
            <img src="./images/catagoryItems/item-3.png" alt="items" />
            <p className="mt-4 text-center">Wiring and cables</p>
          </div>
        </div>
        <div className="w-[357px] h-[361px]">
          <div className="w-[357px] h-[309px]">
            <img src="./images/catagoryItems/item4.png" alt="items" />
            <p className="mt-4 text-center">MCB & DBs</p>
          </div>
        </div>
        <div className="w-[357px] h-[361px]">
          <div className="w-[357px] h-[309px]">
            <img src="./images/catagoryItems/item5.png" alt="items" />
            <p className="mt-4 text-center">Air Modular</p>
          </div>
        </div>
        <div className="w-[357px] h-[361px]">
          <div className="w-[357px] h-[309px]">
            <img src="./images/catagoryItems/item6.png" alt="items" />
            <p className="mt-4 text-center">Accessories</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className="px-4 py-1.5 font-medium border rounded-lg hover:bg-blue-600 hover:text-white text-blue-500 border-blue-500">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Categories;
