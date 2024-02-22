"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const EditTopicForm = ({id,title,description}) => {

 const [newTitle,setNewTitle] = useState(title)
 const [newDescription,setNewDescription] = useState(description)
 const router = useRouter()

const handleSubmit = async(e)=>{

  e.preventDefault()
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({newTitle,newDescription})
    })

    if(!res.ok){
      throw new Error("fail to edit")
    }

    const data  = await res.json()
  

    router.refresh()
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}

  return (
    <form  onSubmit={handleSubmit} className='flex flex-col gap-3'>

    <input className='border border-slate-500 px-8 py-2 '
     value={newTitle}
     onChange={(e)=> setNewTitle(e.target.value) }
    type="text" placeholder='Tite..' />
    <input className='border border-slate-500 px-8 py-2 '
     value={newDescription}
     onChange={(e)=> setNewDescription(e.target.value) }
     type="text" placeholder='Description..' />
    <button className='font-bold bg-green-600 p-2 w-fit' type='submit'>Update Topic </button>
   </form>
  )
}

export default EditTopicForm