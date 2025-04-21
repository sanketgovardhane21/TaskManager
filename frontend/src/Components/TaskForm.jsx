import React, { useState } from 'react'
import axios from "axios"

const TaskForm = ({fetchTasks}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.post("http://localhost:4000/api/task", {title, description})
        setTitle("")
        fetchTasks()
    }
  return (
    <form  onSubmit={handleSubmit} className='flex gap-2 mb-4'>
        <input placeholder='Enter Task..' value={title} onChange={(e)=>setTitle(e.target.value)} className='border p-2 flex-1' />
        <input placeholder='Enter Description..' value={description} onChange={(e)=>setDescription(e.target.value)} className='border p-2 flex-1' />
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Add</button>
    </form>
      
  )
}

export default TaskForm
