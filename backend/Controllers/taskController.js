const taskModel = require("../Models/taskModel")

const getTask = async(req, res) => {
    const task = await taskModel.find()
    res.json(task)
}

const createTask = async(req, res) => {
    const {title, description} = req.body
    const task = new taskModel({title, description})
    await task.save()
    res.status(201).json(task)
}

const updateTask = async(req, res) => {
    const {id} = req.params
    const updatedUser = await taskModel.findByIdAndUpdate(id, req.body, {new:true})
    res.json(updatedUser)
}

const deleteTask = async(req, res) => {
    const {id} = req.params
    await taskModel.findByIdAndDelete(id)
    res.json({message: "Task Deleted"})
}

module.exports = {
    getTask,
    createTask,
    updateTask,
    deleteTask
}