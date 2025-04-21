import React from 'react'
import axios from "axios"

const TaskList = ({tasks, fetchTasks}) => {
    const toggleComplete = async (task) => {
        await axios.put(`http://localhost:4000/api/task/${task._id}`, {completed: !task.completed});
        fetchTasks();
    }
    const deletTask = async(id) => {
        await axios.delete(`http://localhost:4000/api/task/${id}`)
        fetchTasks()
    }

  return (
    <ul>
        {tasks.map(task =>(
            <li key={task._id} className='flex justify-between items-center p-2 border-b'>
                <span
                onClick={() => toggleComplete(task)}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-500": ""}`}
                >
                    {task.title}
                </span>
                <button onClick={()=>deletTask(task._id)} className='text-red-500'>Delete</button>
            </li>
        ))}
      
    </ul>
  )
}

export default TaskList
