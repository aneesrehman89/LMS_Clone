import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
dotenv.config({})

import dbconnection from './database/db.js';
import RouteUser from './routes/user.route.js'

dbconnection()

const PORT = 8000;

// default middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

// end-point
app.use('/api/v1/user', RouteUser)

app.listen(PORT , ()=>{
    console.log(`Server is listening at Port ${PORT}`);
})

