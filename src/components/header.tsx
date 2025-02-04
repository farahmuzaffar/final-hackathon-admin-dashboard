"use client";

import Link from "next/link";
import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Input } from "./ui/input";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(""); 

  return (
    <>
      {/* Top Header */}
      <div className="w-full bg-[#252B42] px-4 sm:px-6 md:px-20 py-2">
        <div className="text-white flex flex-wrap items-center gap-4 justify-between max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <p className="text-sm">(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <p className="text-sm">michelle.rivera@example.com</p>
          </div>
          <span className="font-bold text-sm text-center hidden lg:block">
            Follow Us and get a chance to win 80% off
          </span>
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            <p className="hidden sm:block text-sm">Follow Us :</p>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[#252B42]">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/productListing">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/team">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/pricing">Pages</Link>
              </li>
              <li>
                <Link href="/grid-cards">Our Products</Link>
              </li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 overflow-hidden">
            <button className="flex items-center gap-2 bg-[#23A6F0] px-1 py-2 rounded hover:bg-gray-200 transition">
              <User size={20} />
              <span className="bg-gray-100 font-bold text-black px-2 py-1 rounded">
                Login/Register
              </span>
              <UserButton />
            </button>

            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="Search"
                className="w-[180px] bg-[#F5F5F5] border-none rounded-full pl-10"
                value={searchValue} // Use searchValue here
                onChange={(e) => setSearchValue(e.target.value)} 
              />
              <Search className="w-5 h-5 absolute left-3 text-gray-400" />
            </div>
            <Link
              href="/grid-cards"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Cart"
            >
              <ShoppingCart size={20} />
            </Link>
            <Link
              href="/wishlist"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              aria-label="View Wishlist"
            >
              <Heart size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 z-50 p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/productListing">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pricing">Pages</Link>
            </li>
            <li>
              <Link href="/grid-cards">Our Products</Link>
            </li>
          </ul>
          <UserButton />
        </div>
      )}
    </>
  );
}