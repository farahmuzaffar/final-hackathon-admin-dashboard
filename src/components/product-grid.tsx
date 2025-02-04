// src\components\product-grid.tsx


import { Product } from "@/components/constant/product"
import { ProductCard } from "@/components/product-card"

const products: Product[] = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card1.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card2.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card3.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card4.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card5.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card6.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card7.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/card8.jpg",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
]

export function ProductGrid() {
  return (
    <div className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Products</h2>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">BESTSELLER PRODUCTS</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

