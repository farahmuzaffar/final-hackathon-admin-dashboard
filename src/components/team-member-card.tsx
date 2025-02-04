// src\components\team-member-card.tsx

import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

type TeamMemberProps = {
  image: string;
  name: string;
  profession: string;
};

export function TeamMemberCard({ image, name, profession }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-xs p-4 rounded-lg shadow-lg bg-white">
      {/* Profile Image */}
      <div className="relative h-48 w-48 overflow-hidden rounded-full">
        <Image
          src={image}
          alt="image"
          fill
          className="object-cover"
        />
      </div>

      {/* Name and Profession */}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{profession}</p>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <Link href="#" className="text-blue-600 hover:text-blue-800">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="#" className="text-pink-600 hover:text-pink-800">
          <Instagram className="h-5 w-5" />
        </Link>
        <Link href="#" className="text-sky-500 hover:text-sky-700">
          <Twitter className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
