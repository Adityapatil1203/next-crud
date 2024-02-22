"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')

  const router = useRouter()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!title || !description){
      alert("Both fields are required")
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({title,description})
      })

      if(res.ok) router.push('/')
      else throw new Error("Topic not added")

    } catch (error) {
      console.log(error)
    }
 
  }

  return (
   <form className='flex flex-col gap-3' onSubmit={handleSubmit}>

    <input className='border border-slate-500 px-8 py-2 ' value={title} type="text" placeholder='Tite..' onChange={(e)=>setTitle(e.target.value)} />
    <input className='border border-slate-500 px-8 py-2 ' value={description} type="text" placeholder='Description..' onChange={(e)=>setDescription(e.target.value)}  />
    <button className='font-bold bg-green-600 p-2 w-fit' type='submit'> Add topic </button>
   </form>
  )
}

export default page