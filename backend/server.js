import path from 'path'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Initialize dot Env
dotenv.config()

// Initialize Express
const app = express()

// Initialize Mongodb
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log('MongoDB Connected and ready to go')
  } catch (error) {
    console.log('Error occured')
    process.exit(1) // Exit with Error
  }
}

// Connect MOngoDB
connectDB()

// Make the upload folder static
const __dirname = path.resolve

// Initialize the routes
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running ....')
  })
}

// Set up backend to list to port 5000
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
