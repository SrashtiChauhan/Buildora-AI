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

//middleware
app.use(express.json())
app.use(cookieParser())
// app.use(cors({
//     origin:'https://localhost:5173',
//     credentials:true
// }))
// app.use(cors({
//   // origin: ["http://localhost:5173"],
//    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
//   credentials: true
// }));
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173"
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);


app.use('/api/auth', authRoute)
app.use('/api/website', websiteRoute)
app.use('/api/payment', paymentRoute)


app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is listening at port : ${PORT}` )
})
