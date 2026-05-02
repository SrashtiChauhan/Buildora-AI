import express from 'express'
import 'dotenv/config'
import connectDB from './database/db.js'
import authRoute from './routes/authRoute.js'
import websiteRoute from './routes/websiteRoute.js'
import paymentRoute from './routes/paymentRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cookieParser())

// Allowed Origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173"
].filter(Boolean)

// CORS Setup (production safe)
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true
}))

// routes
app.use('/api/auth', authRoute)
app.use('/api/website', websiteRoute)
app.use('/api/payment', paymentRoute)


// root route
app.get("/", (req, res) => {
  res.send("Buildora AI Backend is Running ")
})

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  })
})

// server
app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server is listening at port : ${PORT}`)
})