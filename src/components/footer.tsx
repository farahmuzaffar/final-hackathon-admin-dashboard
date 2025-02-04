// src\components\footer.tsx

import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    
    <footer className="border-t">
      <div className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="text-xl font-bold mb-4 md:mb-0">
            Bandage
          </Link>
          <div className="flex space-x-4">
            <Link href="#" className="text-primary hover:text-primary/80">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-8">
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary">Carrier</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">We are hiring</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary">Carrier</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">We are hiring</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-3">
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary">Business Marketing</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary">User Analytic</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-primary">Live Chat</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary">Unlimited Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">IOS & Android</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Watch a Demo</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Customers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <form className="space-y-4">
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="max-w-[200px]"
                />
                <Button  className=" bg-[#23A6F0]" type="submit">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Lore imp sum dolor Amit
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center md:text-left text-muted-foreground">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

