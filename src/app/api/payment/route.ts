// import { NextRequest, NextResponse } from "next/server";

// interface bodyData{
//     name:string;
//     price:number;
// }

// export const POST = async (request: NextRequest) => {
//     try{
// const data:bodyData = await request.json();
// return NextResponse.json({msg:data},{
//     status:200})
//     }catch(error:any){
// return NextResponse.json({error:error.message},{
//     status:500})

// }}