import React from "react";

const Footer = () => {
  return (
    <footer className="px-[140px] mt-10 w-full py-10 bg-black text-white">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <h4 className="text-lg">Grand Electricals</h4>
          <p className="mt-3 text-gray-300">
            More than just a game{" "}
            <span className="block"> It's a lifestyle</span>
          </p>
        </div>
        <div>
          <ul className="text-gray-300 space-y-4">
            <li className="text-white mb-8">Page</li>
            <li>Home</li>
            <li>Product</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className="text-gray-300 space-y-4">
            <li className="text-white mb-8">Info</li>
            <li>Shipping Policy</li>
            <li>Return & Refund</li>
            <li>Support</li>
            <li>FAQx</li>
          </ul>
        </div>
        <div>
          <ul className="text-gray-300 space-y-4">
            <li className="text-white mb-8">Office</li>
            <li className="leading-relaxed">
              Palakkad - Kozhikode Hwy, Kalladikode, Karimba South, Kerala
              678596
            </li>
            <li>8848911255</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
