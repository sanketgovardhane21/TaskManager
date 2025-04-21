const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

const taskModel = mongoose.model("taskkk", taskSchema)

module.exports = taskModel