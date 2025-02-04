// src\components\neural-banner.tsx

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function NeuralBanner() {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[500px] w-full">
          <Image
            src="/neural.jpg"
            alt="Lifestyle photo showing people in plaid clothing"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-lg"
            
          />
        </div>
        <div className="space-y-6 px-4 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            SUMMER 2020
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Part of the Neural Universe
          </h1>
          <p className="text-xl text-gray-600">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-wrap gap-4">
            
            <Link href="/grid-cards">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              BUY NOW
            </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-emerald-500 border-emerald-500 hover:bg-emerald-50"
            >
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

