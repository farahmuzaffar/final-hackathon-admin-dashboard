// src\components\site-footer.tsx

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-gray-50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company Info</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Carrier</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">We are hiring</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Carrier</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">We are hiring</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Business Marketing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">User Analytics</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Live Chat</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Unlimited Support</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">IOS & Android</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Watch a Demo</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Customers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">API</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="flex space-x-2">
              <Input placeholder="Your Email" type="email" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">Save time and boost productivity</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">Made With Love By Finland All Right Reserved</p>
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
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

