// src\app\pricing\page.tsx

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Bandage</h1>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/product-page"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Product
              </Link>
              <Link
                href="/team"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="link">Login</Button>
            </Link>
            <Button>Become a member →</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="container">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 uppercase">PRICING</p>
              <h2 className="text-4xl font-bold">Simple Pricing</h2>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-gray-500 max-w-2xl mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics Newtonian mechanics
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-center mb-8">
              <Tabs defaultValue="monthly" className="w-full max-w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">
                    Yearly
                    <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                      Save 25%
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">FREE</CardTitle>
                  <p className="text-sm text-gray-500">
                    Organize across all apps by hand
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-6">
                    0{" "}
                    <span className="text-sm font-normal text-gray-500">
                      $ Per Month
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Unlimited product updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Standard Plan */}
              <Card className="bg-[#252B42]">
                <CardHeader>
                  <CardTitle className="text-xl">STANDARD</CardTitle>
                  <p className="text-sm-bold text-white-600">
                    Organize across all apps by hand
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-6">
                    9.99{" "}
                    <span className="text-sm font-normal text-white-500">
                      $ Per Month
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Unlimited product updates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Unlimited product updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">PREMIUM</CardTitle>
                  <p className="text-sm text-gray-500">
                    Organize across all apps by hand
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-6">
                    19.99{" "}
                    <span className="text-sm font-normal text-gray-500">
                      $ Per Month
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>Unlimited product updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Big Companies Are Here</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
              <Image
                src="/trust1.png"
                alt="Hooli"
                width={50}
                height={50}
                className="w-full object-cover"
              />
              <Image
                src="/trust2.png"
                alt="lyft"
                width={50}
                height={50}
                className="w-full object-cover"
              />

              <Image
                src="/vector.png"
                alt="leaf"
                width={50}
                height={50}
                className="w-full object-cover"
              />

              <Image
                src="/vector1.png"
                alt="stripe"
                width={50}
                height={50}
                className="w-full object-cover"
              />
              <Image
                src="/trust3.png"
                alt="aws"
                width={50}
                height={50}
                className="w-full object-cover"
              />
              <Image
                src="/trust4.png"
                alt="image"
                width={50}
                height={50}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 mx-auto">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
              <p className="text-gray-500">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics
              </p>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  the quick fox jumps over the lazy dog
                </AccordionTrigger>
                <AccordionContent>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-8">
              <p className="text-gray-500">
                Have not got your answer? Contact our support
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start your 14 days free trial
            </h2>
            <p className="text-gray-500 mb-8">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </p>
            <Button size="lg">Try it free now</Button>
            <div className="flex justify-center gap-6 mt-8">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="#55ACCE" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="#395185" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="#0A66C2" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}