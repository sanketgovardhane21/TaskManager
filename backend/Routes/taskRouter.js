const { getTask, createTask, updateTask, deleteTask } = require("../Controllers/taskController")
const router = require("express").Router()

router.get("/", getTask)
router.post("/", createTask)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = router