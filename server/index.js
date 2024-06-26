import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

import connectionRoute from "./routes/connectionRoute.js"

dotenv.config()
const app = express()

// Middleware to parse JSON from frontend's request
app.use(cors());
app.use(express.json());

app.use('/', connectionRoute)

const PORT = process.env.PORT || 8080

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1) // Exit with a non-zero status code to indicate an error
    }
}

connectDB()

app.listen(
    PORT,
    console.log(`Successfully connect to port ${PORT}`)
)