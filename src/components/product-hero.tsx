//  src\components\product-hero.tsx

import Link from "next/link";
import Image from "next/image";

export default async function ProductHero() {
  return (
    <div className="relative min-h-screen bg-[#23856D] overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-white font-bold text-xl tracking-wider">
              SUMMER 2020
            </h2>
            <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight">
              Vita Classic
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-md">
              We know how large objects will act. We know how are objects will
              act. We know.
            </p>
            <Link href="/cart">
              <button className="bg-[#2DC071] hover:bg-[#2ab367] text-white font-bold py-4 px-8 mt-2 rounded-md transition-colors">
                ADD TO CART
              </button>
            </Link>
          </div>
          <div className="relative md:block">
            <Image
              src="/vita.png"
              alt="Product Model"
              width={100}
              height={100}
              className="object cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
