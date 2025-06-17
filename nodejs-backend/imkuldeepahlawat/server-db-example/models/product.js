import mongoose from "mongoose";

const productSchema = new  mongoose.Schema({
    name:{type:String,required:true},
    stock:{type:String,required:true}
})


const Product = mongoose.model('KuldeepProduct',productSchema)


export default Product
