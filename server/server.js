import express from 'express';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import productRoute from './routes/product.js';
import userRoute from './routes/user.js';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve()
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

console.log(__dirname)
if(process.env.NODE_ENV === 'production'){
    const root = path.join('client', 'my-react-app', 'dist')
    app.use(express.static(root))
    app.get('*', (req, res)=>{
        res.sendFile('index.html', root)
    })

}
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/user', userRoute);

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/api', (req, res) => {
  res.status(200).json({ message: "The backend has been connected" });
});

// Catch-all route for frontend

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
