"use server"

import { client } from "@/sanity/lib/client";
import { auth, currentUser } from "@clerk/nextjs/server"

export async function ClerkGetUser() {
   const {userId} = await auth(); 
   const user = await currentUser();

const userName = `${user?.firstName} ${user?.lastName}`
const userEmail = user?.externalAccounts[0].emailAddress
const userImage = user?.imageUrl

return{
   userName,
   userEmail,
   userId,
   userImage,
}
}

export async function sanityUserPost() {
   const user = await ClerkGetUser() 
   const userObject ={
      _type : 'user',
      _id : `user-${user.userId}`,
      name : "user.name",
      email :"user.email",
      userId : "user.userId",
      image:"user.userImage",
   }
   // const res = client.createOrReplace(userObject)
   const res = await client.createIfNotExists(userObject)
   return res

   
}