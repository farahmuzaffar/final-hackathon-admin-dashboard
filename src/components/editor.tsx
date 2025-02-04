// src\components\editor.tsx
import Image from "next/image";

export default function Editor() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">EDITORS PICK</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Responsive Grid Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Men's Category */}
        <div className="relative group overflow-hidden">
          <div className="relative sm:h-80 lg:h-96">
            <Image
              src="/p1.png"
              alt="Men's Fashion"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Women's Category */}
        <div className="relative group overflow-hidden">
          <div className="relative sm:h-80 lg:h-96">
            <Image
              src="/p2.png"
              alt="Women's Fashion"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Accessories & Kids Grid */}
        <div className="grid grid-rows-2 gap-4">
          {/* Accessories */}
          <div className="relative group overflow-hidden">
            <div className="relative h-48 sm:h-56 lg:h-60">
              <Image
                src="/p3.png"
                alt="Accessories"
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Kids */}
          <div className="relative group overflow-hidden">
            <div className="relative h-48 sm:h-56 lg:h-60">
              <Image
                src="/p4.png"
                alt="Kids Fashion"
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


