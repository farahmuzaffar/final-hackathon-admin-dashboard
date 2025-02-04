// src\app\layout.tsx
"use client"
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger effect on route change

  const isStudio = pathname.startsWith("/studio");
  const isHome = pathname.startsWith("/sign-in");
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");
  const studioAndHome = !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Toaster richColors />
           <div className="min-h-screen">
                <AdminHeader />
                <div className="flex">
                  <AdminSidebar />
                  <main className="flex-1 p-8 bg-muted/40">{children}</main>
                </div>
            </div>
        
        </body>
      </html>
    </ClerkProvider>
  );
}
