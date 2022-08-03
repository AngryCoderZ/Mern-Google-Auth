const express = require('express')
const cors = require('cors')
require('./db/conn')

const authRoutes = require('./routes/user')

const app = express()
app.use(cors())
app.use(express.json())
app.use(authRoutes)

app.listen(8000,()=>{
    console.log('api running on port 8000')
})