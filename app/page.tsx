import Image from "next/image";
import IntroContent from "./components/homePage/IntroContent";

import Footer from "./components/main/Footer";
import FeaturedProducts from "./components/homePage/FeaturedProducts";
import Categories from "./components/homePage/Categories";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      <div>
        <IntroContent />
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <Categories />
      </div>
    </main>
  );
}
