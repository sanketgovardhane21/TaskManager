import React, { useEffect, useState } from 'react'
import axios from "axios"
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async() => {
    const res = await axios.get("http://localhost:4000/api/task")
    setTasks(res.data)
  }

  useEffect(()=> {
    fetchTasks()
  },[])

  return (
    <div className='max-w-md mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Task Manager</h1>
      <TaskForm fetchTasks={fetchTasks}/>
      <TaskList tasks={tasks} fetchTasks={fetchTasks}/>
    </div>
  )
}

export default App
