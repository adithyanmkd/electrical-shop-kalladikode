import Image from "next/image";
import IntroContent from "./components/IntroContent";

import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center">
      {/* cover image and intro content */}
      <div>
        <IntroContent />
      </div>
      {/* cover image and intro content ended */}
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <Categories />
      </div>
    </main>
  );
}
