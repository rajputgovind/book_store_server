import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { createConnection } from './src/configs/DbConfig.js'
import bookRouter from './src/routers/BookRouter.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use(bookRouter)


app.listen(8000,()=>{
    console.log(`server is listning on port 8000`)
    createConnection()
})