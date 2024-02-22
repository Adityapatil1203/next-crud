
import connectDB from "@/app/libs/mongodb";
import Topic from "@/app/models/topic";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

 export const POST = async (request)=>{

   const {title,description} = await request.json();
 await connectDB()
    const topic = await Topic.create({title,description })
   
    return NextResponse.json({topic},{status:201})

 }

 export const GET = async ()=>{
  await connectDB()
  const posts = await Topic.find({})
  return NextResponse.json(posts)
 }

 export const DELETE = async(request)=>{
  const id = request.nextUrl.searchParams.get("id") 
  await connectDB() 
  await Topic.findByIdAndDelete(id) 
  return NextResponse.json({msg:'deleted post'},{status:200}) 
 }

 



