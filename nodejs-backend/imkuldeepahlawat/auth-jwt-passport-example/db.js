import mongoose from 'mongoose'
import server from './server.js'
const MONGODBURL = process.env.MONGODBURL
const port = process.env.PORT || 4000

mongoose.connect(MONGODBURL).then(()=>{
    console.log('mongodb is connected')
    server.listen(port,()=>{
    console.log('server is listening to',port)
})
}).catch((e)=>{
    console.error(e)
})


