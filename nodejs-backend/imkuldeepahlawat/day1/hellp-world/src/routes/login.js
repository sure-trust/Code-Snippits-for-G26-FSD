import express from 'express'
import { checkBody } from '../middlewares/loginmiddleware.js'
const router = express.Router()



router.get('/',checkBody,(req,res)=>{
    console.log('/login')
    const dt = req.body
    console.log(dt)
    res.send({
        message:"login successfull"
    })
    // res.sendStatus(200)

})
// middleware




export default router