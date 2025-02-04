// src\app\about\page.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Play } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Bandage</h1>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm">
                Home
              </Link>
              <Link href="/product-page" className="text-sm">
                Product
              </Link>
              <Link href="/pricing" className="text-sm">
                Pricing
              </Link>
              <Link href="/contact" className="text-sm">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href='/login'>
            <Button variant="link">Login</Button>
            </Link>
            <Button>Become a member →</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium">ABOUT COMPANY</p>
            <h2 className="text-4xl md:text-5xl font-bold">ABOUT US</h2>
            <p className="text-muted-foreground">
              We know how large objects will act, but things on a small scale
            </p>
            <Button className="bg-[#26A6F0]">Get Quote Now</Button>
          </div>
          <div className="relative">
            <div className="absolute -z-10 right-0 top-0 w-96 h-96 " />
            <Image
              src="/about1.png"
              alt="Shopping"
              width={500}
              height={600}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-7xl font-bold">15K</p>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <p className="text-7xl font-bold">150K</p>
            <p className="text-muted-foreground">Monthly Visitors</p>
          </div>
          <div>
            <p className="text-7xl font-bold">15</p>
            <p className="text-muted-foreground">Countries Worldwide</p>
          </div>
          <div>
            <p className="text-7xl font-bold">100+</p>
            <p className="text-muted-foreground">Top Partners</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
  
  <div className="relative rounded-lg overflow-hidden">
    <Image
      src="/video card.png"
      alt="Mountain landscape"
      width={200}
      height={200}
      className="w-full object-cover"
    />
    <Button
      size="icon"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16"
    >
      <Play className="w-8 h-8" />
    </Button>
  </div>
</section>

{/* Team Section */}
<section className="container mx-auto px-4 py-16">
  <div className="text-center space-y-4 mb-12">
    <h2 className="text-3xl font-bold">Meet Our Team</h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      Problems trying to resolve the conflict between the two major realms of Classical physics
    </p>
  </div>

  {/* Team Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Team Member */}
    {["team6.jpg", "media.png", "team4.jpg"].map((image, index) => (
      <div key={index} className="rounded-lg shadow-lg overflow-hidden">
        <Image
          src={`/${image}`}
          alt={`Team member ${index + 1}`}
          width={300}
          height={400}
          className="w-full object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="font-bold">Username</h3>
          <p className="text-sm text-muted-foreground">Profession</p>
          <div className="flex justify-center gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:scale-110 transition-transform" />
            <Instagram className="w-5 h-5 hover:scale-110 transition-transform" />
            <Twitter className="w-5 h-5 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Partners Section */}
      <section className="bg-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Big Companies Are Here</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-90">
            <Image 
            src="/trust1.png" 
            alt="Hooli" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
             <Image 
            src="/trust2.png" 
            alt="lyft" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
           
           <Image 
            src="/vector.png" 
            alt="leaf" 
            width={50} 
            height={50} 
            className="w-full object-cover" />

<Image 
            src="/vector1.png" 
            alt="stripe" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
            <Image 
            src="/trust3.png" 
            alt="aws" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
             <Image 
            src="/trust4.png" 
            alt="image" 
            width={50} 
            height={50} 
            className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="grid md:grid-cols-2">
        <div className="bg-primary text-primary-foreground p-12 md:p-24 flex flex-col justify-center">
          <div className="space-y-6 max-w-md">
            <p className="font-medium">WORK WITH US</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Now Lets grow Yours
            </h2>
            <p className="text-primary-foreground/80">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <Button variant="secondary">Button</Button>
          </div>
        </div>
        <div className="bg-slate-100">
          <Image
            src="/media.png"
            alt="image"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
