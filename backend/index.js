const express = require("express")
const app = express()
require("dotenv").config()
require("./Models/db")
const cors = require("cors")
const taskRouter = require("./Routes/taskRouter")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is home route")
})

app.use("/api/task", taskRouter )

PORT = process.env.PORT || 4000
app.listen(PORT, ()=> {
    console.log(`Server is listening on PORT: ${PORT}`)
})