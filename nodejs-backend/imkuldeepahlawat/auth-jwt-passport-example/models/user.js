import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import joi from 'joi'
const userSchema = new mongoose.Schema({
   username: { type: String, required: true },
   password: { type: String, required: true },
   email: { type: String, required: true },
   contact_no: { type: String, required: true },
})


userSchema.pre('save', async function (next) {
   // do something
   // data 

   console.log(this)
   this.password = await bcrypt.hash(this.password, 5);
   next()

})



const User = mongoose.model('userlist', userSchema)
export default User