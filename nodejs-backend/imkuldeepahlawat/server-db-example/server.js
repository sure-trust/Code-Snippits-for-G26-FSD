import 'dotenv/config'
import express from 'express';
import './db.js'

import Product from './models/product.js';



const app = express()
app.get('/',(req,res)=>{
    console.log('route', req.baseUrl)
    res.sendStatus(200)
})
app.get('/add_product',async (req,res)=>{

    const new_product = new Product({name:"Apple",stock:'not avalable'})
    await new_product.save()
  
    res.sendStatus(200)
})



export default app
