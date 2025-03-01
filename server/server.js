import express from 'express'
import authRoute from './routes/authRoute.js'
import cookieParser from 'cookie-parser'
import productRoute from './routes/product.js'
import userRoute from './routes/user.js'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'

const app = express()
const port = process.env.PORT || 5000;
// define the absolute path
const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: process.env.CLIENT_URL , credentials:true}))
// serve static files from vite's build folder
app.use(express.static(path.join(__dirname, 'client','my-react-app', 'dist')))
app.use('/api/auth', authRoute )
app.use('/api/products',productRoute)

app.use('/api/user',userRoute)
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('mongodb connectd successfully')
   
}).catch((err)=>{
    console.log(err)
})

app.get('/api', async(req , res)=>{
    try {
        res.status(200).json({message:"the backend has been connected"})
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
        
    }
})
// catch-all route : Redirect all frontend request to 'index.html
app.get('*', (req , res)=>{
    res.sendFile(path.join(__dirname, 'client','my-react-app', 'dist', 'index.html'))
})
app.listen(port, ()=>{
    console.log(`the server is listening on port ${port}`)

})  
   
