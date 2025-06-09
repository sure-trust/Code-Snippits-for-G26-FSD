import express from 'express'
import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import "../config/passport.js";
import passport from "passport";

const router = express.Router()


router.get('/', (req, res) => {
    res.sendStatus(200)
})
router.post('/register', async (req, res) => {


    const newUser = new User(req.body);
    await newUser.save()

    res.sendStatus(200)
})

router.post('/login', async (req, res) => {


    const { username, password } = req.body
    console.log(username, password)

    const user = await User.findOne({ username })


    if (user) {
        // compare password
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch){

            const token = jwt.sign({
                username: user.username,
                sureturst:'education'
            }, 'kuldeep', { expiresIn: '1h' });
    
            res.json({
                message: 'Verified User',
                token
            })
        }else{
            res.sendStatus(417)
        }


    } else {
        res.sendStatus(417)
    }






})

router.get('/profile',passport.authenticate("jwt", { session: false }),(req,res)=>{
res.sendStatus(200)
})


export default router