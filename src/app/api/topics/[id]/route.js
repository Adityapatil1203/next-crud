import connectDB from "@/app/libs/mongodb";
import Topic from "@/app/models/topic";
import { NextResponse } from "next/server";

export const PUT = async(request,{params})=>{
    const {id} = params;
    const {newTitle:title,newDescription:description} =await request.json()
    await connectDB()
    const updatePost = await Topic.findByIdAndUpdate(id,{title,description})
    return NextResponse.json(updatePost,{status:200})
}

export const GET = async(request,{params})=>{
  const {id} = params;
  await connectDB()
  const post = await Topic.findById(id)
  return NextResponse.json(post)
}