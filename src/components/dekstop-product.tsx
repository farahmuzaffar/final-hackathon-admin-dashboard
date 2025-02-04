// src\app\product-page\page.tsx

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Product } from "@/components/constant/product";
import { ProductCard } from "@/components/product-card";
;

const products: Product[] = [
  {
    id: 1,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/fork.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 2,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/glass.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 3,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/product3.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 4,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/coffee.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 5,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/product5.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 6,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/product6.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 7,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/fork.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
  {
    id: 8,
    title: "Graphic Design",
    department: "English Department",
    originalPrice: 16.48,
    salePrice: 6.48,
    imageUrl: "/glass.png",
    colors: ["#3B82F6", "#10B981", "#F97316", "#1F2937"],
  },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedColor, setSelectedColor] = React.useState(0);

  const images = ["/carouselCaptions.png", "/fp.jpg"];
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="text-xl font-bold" href="/">
            Bandage
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link className="text-sm" href="/">
              Home
            </Link>
            <Link className="text-sm" href="/product-page">
              Shop
            </Link>
            <Link className="text-sm" href="/about">
              About
            </Link>
            <Link className="text-sm" href="/team">
              Blog
            </Link>
            <Link className="text-sm" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href='/login'>
            <Button variant="ghost">Login / Register</Button>
            </Link>
            <Link href='/grid-cards'>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 text-sm text-muted-foreground">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>&gt;</li>
            <li>
              <Link href="/productListing">Shop</Link>
            </li>
          </ol>
        </nav>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/fp.jpg"
                alt="Product image"
                className="object-cover"
                fill
                
              />
              <button
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev > 0 ? prev - 1 : images.length - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev < images.length - 1 ? prev + 1 : 0
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Floating Phone</h1>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">★★★★☆</div>
              <span className="text-sm text-muted-foreground">10 Reviews</span>
            </div>
            <div className="text-2xl font-bold">$1,189.33</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Availability :
              </span>
              <span className="text-sm text-blue-600">In Stock</span>
            </div>
            <p className="text-muted-foreground">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            <div className="space-y-2">
              <span className="text-sm font-medium">Colors</span>
              <div className="flex space-x-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`h-6 w-6 rounded-full ${
                      selectedColor === index ? "ring-2 ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href='/grid-cards'>
              <Button size="lg">Select Options</Button>
              </Link>

              <Link href='/wishlist'>
              <Button size="icon" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              </Link>

              <Link href='/cart'>
              <Button size="icon" variant="outline">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              </Link>
            </div>
          </div>
          <div>
            <Tabs defaultValue="description" className="mt-12">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="additional">
                  Additional Information
                </TabsTrigger>
                <TabsTrigger value="reviews">Reviews (0)</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/fp2.png"
                      alt="Product image"
                      className="object-cover"
                      fill
                      priority
                    />
                    <h3 className="text-xl font-bold">
                      the quick fox jumps over
                    </h3>
                    <p className="text-muted-foreground">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <p className="text-muted-foreground">
                      Met minim Mollie non desert Alamo est sit cliquey dolor do
                      met sent. RELIT official consequent door ENIM RELIT
                      Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">
                      the quick fox jumps over the lazy dog
                    </h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        the quick fox jumps over the lazy dog
                      </p>
                      <p className="text-muted-foreground">
                        the quick fox jumps over the lazy dog
                      </p>
                      <p className="text-muted-foreground">
                        the quick fox jumps over the lazy dog
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">
                        the quick fox jumps over the lazy dog
                      </h3>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          the quick fox jumps over the lazy dog
                        </p>
                        <p className="text-muted-foreground">
                          the quick fox jumps over the lazy dog
                        </p>
                        <p className="text-muted-foreground">
                          the quick fox jumps over the lazy dog
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="additional">
                Additional information content
              </TabsContent>
              <TabsContent value="reviews">Reviews content</TabsContent>
            </Tabs>
          </div>

          <div></div>
        </div>
      </main>
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">BESTSELLER PRODUCTS</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

