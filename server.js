const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')

const userRouter = require('./router/userRouter')
const transectionRouter = require('./router/transectionRouter')



const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./passport')(passport)


app.use('/api/users',userRouter)
app.use('/api/transactions',transectionRouter)

if (process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
app.get('/', (req, res) => {

    res.json({
        message: 'Welcome To Our Application'
    })
})



const PORT = process.env.PORT || 4000


app.listen(PORT, () => {
    
    console.log(`SERVER is RUNNING ON PORT ${PORT}`)
    mongoose.connect('mongodb+srv://AYMON:AYMON@cluster0.gq9xpkk.mongodb.net/MONEY-PROJECT?retryWrites=true&w=majority',{useNewUrlParser:true}, ()=>{
       
    console.log('database connected')
    })
    
})