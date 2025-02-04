// src\components\product-card.tsx

import Image from "next/image"
import { Product } from "@/components/constant/product"


interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.imageUrl}
          alt="image"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.department}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-gray-900">${product.salePrice.toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
        </div>
        <div className="flex gap-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="h-4 w-4 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

