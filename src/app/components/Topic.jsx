
import Link from 'next/link'
import React from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi' 
import RemoveBtn from './RemoveBtn'

const getTopics = async ()=>{
  try {
    const res = await fetch("http://localhost:3000/api/topics",{
      cache:"no-store"
    })

    if(!res.ok){
     throw new Error("fails to load")
    }
   const data = await res.json()

    return data
  } catch (error) {
    console.log(error)
  }
 }


 const handleDelete = async({id})=>{
    try {
   
    const res =  await fetch(`http://localhost:3000/api/topics/${id}`,{
      method:"DELETE"
    })

    if(!res.ok){
      alert("Fails to delete topic")
      return
    }

   
      
    } catch (error) {
      console.log(error)
    }
 }
 
 const Topic = async () => {

 const posts = await getTopics()

  return (
    <>
    {
      posts?.map((t)=>(
    
    <div key={t._id} className='flex justify-between p-4 my-3 gap-5 border '>
        <div>
           <h2 className='font-bold text-xl '>{t.title}</h2>
           <div>{t.description}</div>
        </div>
        <div className='flex gap-2 '>
           {/* <span className='text-red-500' onClick={()=>handleDelete(t._id)} ><HiOutlineTrash size={24}/> </span> */}
           <RemoveBtn id={t._id}/>
           <Link href={`/editTopic/${t._id}`}> <HiPencilAlt size={24}/></Link>
        </div>
    </div>
    ))
   }
   </>
  )
}

export default Topic