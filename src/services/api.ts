// "use server";

// import { client } from "@/sanity/lib/client";

// async function uploadImageToSanity(imageUrl: string) {
//   try {
//     const response = await fetch(imageUrl);
//     if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
//     const blob = await response.blob();
   
    

//     const asset = await client.assets.upload("image", blob);
//     return asset;
//   } catch (error) {
//     console.error("Image upload failed:", error);
//     throw error;
//   }
// }

// export async function fetchData() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
    
    
//     if (!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`);
//    const products = await response.json();

//   // Upload images concurrently
//     const uploadPromises = products.map(async (product:any) => {
//       const imageAsset = await uploadImageToSanity(product.image);

//       const sanityProduct= {
//         _id:product.id,
//         _type: 'product',
//         title: product.title,
//         price: product.price,
//         productImage: {
//           _type: 'image',
//           asset: {
//             _ref: imageAsset._Id,
//           },
//         },
//         tags: product.tags,
//         discountPercentage: product.discountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
//         description: product.description,
//         isNew: product.isNew,
//       };
//       await client.createOrReplace(sanityProduct);
//     });

//     await Promise.all(uploadPromises);
//   } catch (error) {
//     console.error("Data fetching failed:", error);
//     throw error;
//   }
// }


"use server";

import { client } from "@/sanity/lib/client";


interface Product {
  id: string; 
  title: string;
  price: number;
  image: string;
  tags?: string[]; 
  discountPercentage?: number;
  description: string;
  isNew?: boolean;
}

async function uploadImageToSanity(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    const blob = await response.blob();

    // Upload image to Sanity
    const asset = await client.assets.upload("image", blob);
    return asset;
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
}

export async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) throw new Error(`Failed to fetch products: ${response.statusText}`);
    const products: Product[] = await response.json();

    // Upload images concurrently
    const uploadPromises = products.map(async (product) => {
      const imageAsset = await uploadImageToSanity(product.image);

      const sanityProduct = {
        _id: product.id,
        _type: "product",
        title: product.title,
        price: product.price,
        productImage: {
          _type: "image",
          asset: {
            _ref: imageAsset._id, // Corrected key for asset reference
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage,
        description: product.description,
        isNew: product.isNew,
      };

      await client.createOrReplace(sanityProduct);
    });

    await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Data fetching failed:", error);
    throw error;
  }
}
