import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="mt-6 px-[140px]">
      <div className="flex">
        <h1 className="text-4xl font-medium mb-6">Featured</h1>
      </div>
      <div>
        <ul className="flex space-x-6 max-w-[1119px] overflow-y-auto">
          <li className="min-w-[262px]">
            <div>
              <img
                src="./images/featuredItems/featured-item-1.svg"
                alt="items"
              />
            </div>
            <div>
              <img className="my-2" src="./icons/rating-icon.svg" alt="" />
              <p>
                Shark - Men's cabretta white golf glove
                <span className="block mt-2">$19.00</span>
              </p>
            </div>
          </li>
          <li className="min-w-[262px]">
            <div>
              <img
                src="./images/featuredItems/featured-item-1.svg"
                alt="items"
              />
            </div>
            <div>
              <img className="my-2" src="./icons/rating-icon.svg" alt="" />
              <p>
                Shark - Men's cabretta white golf glove
                <span className="block mt-2">$19.00</span>
              </p>
            </div>
          </li>
          <li className="min-w-[262px]">
            <div>
              <img
                src="./images/featuredItems/featured-item-1.svg"
                alt="items"
              />
            </div>
            <div>
              <img className="my-2" src="./icons/rating-icon.svg" alt="" />
              <p>
                Shark - Men's cabretta white golf glove
                <span className="block mt-2">$19.00</span>
              </p>
            </div>
          </li>
          <li className="min-w-[262px]">
            <div>
              <img
                src="./images/featuredItems/featured-item-1.svg"
                alt="items"
              />
            </div>
            <div>
              <img className="my-2" src="./icons/rating-icon.svg" alt="" />
              <p>
                Shark - Men's cabretta white golf glove
                <span className="block mt-2">$19.00</span>
              </p>
            </div>
          </li>
          <li className="min-w-[262px]">
            <div>
              <img
                src="./images/featuredItems/featured-item-1.svg"
                alt="items"
              />
            </div>
            <div>
              <img className="my-2" src="./icons/rating-icon.svg" alt="" />
              <p>
                Shark - Men's cabretta white golf glove
                <span className="block mt-2">$19.00</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProducts;
