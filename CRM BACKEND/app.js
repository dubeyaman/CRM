const express=require('express')
const app=express()
const authRoutes=require('./routes/authroutes')
const userRoutes=require('./routes/userRoutes')
const ticketRoutes=require('./routes/ticketRoutes')
const bodyparser=require('body-parser')
const cors= require('cors')
const {user, sequelize} = require('./models/index')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())

const port=8080

authRoutes(app)
userRoutes(app)
ticketRoutes(app)

app.listen(port,async()=>{
    await sequelize.sync()
    console.log(`server is succesfully running on ${port}`)
})

