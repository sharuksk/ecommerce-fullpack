import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/", (req, res) => {
    res.send("API is working ");
  });

const frontendDist = path.join(__dirname, "../frontend/dist")
const adminDist = path.join(__dirname, "../admin/dist")
const isProduction = process.env.NODE_ENV === "production"

if (isProduction && fs.existsSync(frontendDist)) {
  app.use('/app', express.static(frontendDist))
  app.get(['/app', '/app/*'], (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'))
  })
}

if (isProduction && fs.existsSync(adminDist)) {
  app.use('/admin', express.static(adminDist))
  app.get(['/admin', '/admin/*'], (req, res) => {
    res.sendFile(path.join(adminDist, 'index.html'))
  })
}
  
app.listen(port,()=>console.log('Server started on PORT:'+port));

