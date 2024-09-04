import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full mt-3 bg-white">
      <div>
        <h1 className="ml-4">
          <Link href={"/"}>Grand Electrical</Link>
        </h1>
      </div>
      <div className="flex ml-auto">
        <ul className="flex space-x-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="flex text-nowrap">
            <p>
              <Link href={"/products"}>Product</Link>
            </p>
            <img
              className="ml-1 w-6"
              src="./icons/down-arrow-black.svg"
              alt="down-arrow"
            />
          </li>
          <li className="flex text-nowrap">
            <p>Our Brands</p>
            <img
              className="ml-1 w-6"
              src="./icons/down-arrow-black.svg"
              alt="down-arrow"
            />
          </li>
          <li>
            <Link href={"contact/"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto mr-8">
        <ul className="flex space-x-6">
          <li>
            <img src="./icons/search-icon.svg" alt="search icon" />
          </li>
          <li>
            <img src="./icons/profile-icon.svg" alt="profile icon" />
          </li>
          <li>
            <img src="./icons/cart-icon.svg" alt="cart icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
