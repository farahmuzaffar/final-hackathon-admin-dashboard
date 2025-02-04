// src\components\grid-cards.tsx

import React from 'react'
import { ProductCard } from './product-card';
interface Product {
    id: number;
    title: string;
    department: string;
    originalPrice: number;
    salePrice: number;
    imageUrl: string;
    colors: string[];
  }
  const products: Product[] = [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit1.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit2.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit3 (2).png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit4.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit5.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit6.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit7.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit8.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 9,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit9.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 10,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit10.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 11,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit11.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
    {
      id: 12,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      imageUrl: "/edit12.png",
      colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
    },
  ];
  
function GridCards() {
  return (
    <>
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
    </>
  )
}

export default  GridCards