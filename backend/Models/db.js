const mongoose = require("mongoose")

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL)
.then(() => {
    console.log("MONGO_DB Connected...")
}).catch((err) => {
    console.log("MONGO_DB Connection Error:",err)
})