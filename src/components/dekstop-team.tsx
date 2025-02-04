// src\app\team\page.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { TeamMemberCard } from "@/components/team-member-card";
import Link from "next/link";

export default function Page() {
  const teamMembers = [
    {
      image: "/team1.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/team2.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/team3.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/team4.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/team5.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/team6.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/team7.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/team8.jpg",
      name: "Username",
      profession: "Profession",
    },
    {
      image: "/media.png",
      name: "Username",
      profession: "Profession",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
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
          <Button variant="link">Login</Button>
          <Link href="/">
            <Button>Become a member</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold md:text-6xl">
              Innovation tailored for you
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm text-muted-foreground">Home</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm">Team</span>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/blog1.png"
                alt="Fashion"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/blog2.png"
                alt="Fashion"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/blog3.png"
                alt="Fashion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">
              Start your 14 days free trial
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </p>
            <Button size="lg" className="mt-4">
              Try it free now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

