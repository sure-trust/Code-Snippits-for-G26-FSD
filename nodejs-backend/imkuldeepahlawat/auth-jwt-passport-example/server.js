import 'dotenv/config'
import express from 'express';
import './db.js'
import User from './models/user.js'
import Product from './models/product.js';
import userRouter from'./routes/userRoutes.js'




const app = express()

app.use(express.json())


app.get('/',(req,res)=>{
    console.log('route', req.baseUrl)
    res.sendStatus(200)
})
app.get('/add_product',async (req,res)=>{

    const new_product = new Product({name:"Apple",stock:'not avalable'})
    await new_product.save()
  
    res.sendStatus(200)
})
// app.post('/register',async (req,res)=>{


//     const newUser = new User(req.body);
//     await newUser.save()
  
//     res.sendStatus(200)
// })
app.use('/user',userRouter)



export default app
