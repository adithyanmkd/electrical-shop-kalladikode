import React from "react";

const IntroContent = () => {
  return (
    // <!-- intro content and image -->
    <div>
      <div className="h-[820px] w-full relative mt-3">
        <img
          className="w-full h-[820px] opacity-95"
          src="./images/banner/top-image.png"
          alt="top-images"
        />
        <div className="absolute top-[170px] mx-28 max-w-[497px]">
          <h1 className="text-7xl font-semibold text-white leading-none">
            Welcome to Grand Electrical Supply Store
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We offer high-quality electrical products and excellent customer
            service for professionals, DIY enthusiasts, and anyone needing
            electrical supplies
          </p>
        </div>
      </div>
    </div>
    // <!-- intro content and image ended -->
  );
};

export default IntroContent;
