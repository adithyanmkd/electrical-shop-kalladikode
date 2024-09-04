import Image from "next/image";
import FilterBar from "../components/productPage/FilterBar";
import Products from "../components/productPage/Products";

export default function Home() {
  return (
    <div className="px-[140px] mt-6">
      <div>
        <h1 className="text-xl font-semibold">All Products</h1>
        <p className="font-light text-gray-400">89 Products</p>
      </div>
      <FilterBar />
      <div>
        <Products />
      </div>
    </div>
  );
}
