const app = require('./src/app')
const dotenv = require('dotenv')
const connectDB = require('./src/db/db')
require("dotenv").config();

connectDB()

const PORT = process.env.PORT || 3023

app.listen(PORT, () => {
    console.log(`Server is now live at http://localhost:${PORT}`)
})