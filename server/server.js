const express = require('express')
const connectDb  = require('./config/db')
const router = require('./routes/routes')
require('dotenv').config()
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// Middlewares
app.use(express.json())
app.use(helmet())
app.use(cors({
    origin : process.env.CLIENT_URL ,
    methods : ['GET' , 'POST' , 'PUT' , 'DELETE'],
    credentials : true
}))
app.use(morgan('dev')) // Logger middleware
app.use(express.urlencoded({extended : true}))
app.use(router)

app.get('/',(req,res)=>{
    res.send("Namaste Duniya")
})

connectDb()
const port = process.env.PORT || 8001


app.listen(port,()=>{
    console.log(`Server is listening at ${port}`)
})