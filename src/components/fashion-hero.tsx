
import Link from "next/link"
import Image from "next/image"


export default async function FashionHero() {


  return (
    <div className="relative min-h-screen bg-[#23A6F0] overflow-hidden">

      <div className="container mx-auto px-4 py-12 md:py-24">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       
      
          <div className="space-y-6 md:space-y-8">
         
            <h2 className="text-white font-bold text-xl tracking-wider">
              SUMMER 2020
            </h2>
            <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight">
              NEW COLLECTION
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-md">
              We know how large objects will act, but things on a small scale.
            </p>
            <Link href='/productListing'>
            <button className="bg-[#2DC071] hover:bg-[#2ab367] text-white font-bold py-4 px-8 mt-2 rounded-md transition-colors">
              SHOP NOW
            </button>
            </Link>
           
          </div>
          <div className="relative md:block bg-[#23A6F0]">
            <Image
              src='/carousel 1.png'
              alt="Summer Collection Model"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

