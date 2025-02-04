// src\app\contact\page.tsx

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Bandage</h1>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <Link
              href="/product-page"
              className="text-gray-500 hover:text-gray-700"
            >
              Product
            </Link>
            <Link href="/pricing" className="text-gray-500 hover:text-gray-700">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-700">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="link">Login</Button>
          </Link>
          <Button>Become a member</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-primary font-bold">CONTACT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#252B42]">
              Get in touch today!
            </h2>
            <p className="text-gray-600">
              We know how large objects will act, but things on a small scale
            </p>
            <div className="space-y-4">
              <p className="font-bold">Phone : +451 215 215</p>
              <p className="font-bold">Fax : +451 215 215</p>
            </div>
            <div className="flex gap-4">
              <Twitter className="w-6 h-6 text-gray-600" />
              <Facebook className="w-6 h-6 text-gray-600" />
              <Instagram className="w-6 h-6 text-gray-600" />
              <Linkedin className="w-6 h-6 text-gray-600" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 transform scale-125" />

            <Image
              src="/shopping.png"
              alt="Shopping Family"
              width={500}
              height={500}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-sm font-bold mb-4">VISIT OUR OFFICE</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-16 max-w-2xl mx-auto">
          We help small businesses with big ideas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Phone className="w-20 h-20 text-primary" />,
              emails: ["georgia.young@example.com", "georgia.young@ple.com"],
              label: "Get Support",
            },
            {
              icon: <MapPin className="w-20 h-20 text-primary" />,
              emails: ["georgia.young@example.com", "georgia.young@ple.com"],
              label: "Get Support",
              dark: true,
            },
            {
              icon: <Mail className="w-20 h-20 text-primary" />,
              emails: ["georgia.young@example.com", "georgia.young@ple.com"],
              label: "Get Support",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className={`text-center ${item.dark ? "bg-[#252B42] text-white" : ""}`}
            >
              <CardContent className="pt-8 px-4 pb-4 space-y-4">
                {item.icon}
                {item.emails.map((email, j) => (
                  <p
                    key={j}
                    className={item.dark ? "text-white" : "text-gray-600"}
                  >
                    {email}
                  </p>
                ))}
                <p className="font-bold">{item.label}</p>
                <Button variant={item.dark ? "secondary" : "outline"}>
                  Submit Request
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-sm font-bold mb-4">WE WANT TO MEET YOU</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] mb-8">
          Lets Talk
        </h2>
        <Link href='/productListing'>
        <Button size="lg">Try it free now</Button>
        </Link>
      </section>
    </div>
  );
}




