require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const setMiddleware=require('./middlewares/middlewares')
const setRoutes=require('./route/routes')
const app=express()
app.set('view engine','ejs')
app.set('views')
setMiddleware(app)
setRoutes(app)
var nodemailer=require('nodemailer')

app.post('/',(req,res)=>{
    console.log(req.body)

    var transporter=nodemailer.createTransport({
        host:'https://samiul-portfolio.herokuapp.com/',
        port:587,
        secure:false,
        //service:'gmail',
        auth:{
            user:process.env.email,
         pass:process.env.pass
        }
    })

    var mailOPtion={
        from:'samiuljust2018@gmail.com',
        to:'blogandportfolio@gmail.com',
        subject:'Demo Gamil',
        text:req.body.comment+" "+req.body.email
    }

    transporter.sendMail(mailOPtion,(error,info)=>{
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log('Email send'+info.response) 
            res.send('success')
        }
    })
})

const PORT=process.env.PORT||7444
const DB_USER=process.env.DB_USER
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_NAME=process.env.DB_NAME

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@mycluster.oazue.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('database connect success')
    app.listen(PORT,()=>{
        console.log('Server is running on PORT 7444')
    })
}).catch(e=>{
    return console.log(e)
})


