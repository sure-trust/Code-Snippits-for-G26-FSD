
import express from 'express'
import  loginRoute from './routes/login.js'
const app = express()

const PORT = 3001


// localhost:3001/
app.use(express.json())
app.get("/", (req, res) => {
    res.write(`<h1>Hello</h1>`);
    res.end();
});
app.get("/get", (req, res) => {
    res.write(`<h1>Hello from Kuldeep </h1>`);
    res.end();
});

app.post("/post", (req, res) => {
    res.write(`<h1>Hello from post </h1>`);
    res.end();
});
app.put("/put", (req, res) => {
    res.write(`<h1>Hello from put </h1>`);
    res.end();
});
app.patch("/patch", (req, res) => {
    res.write(`<h1>Hello from patch </h1>`);
    res.end();
});
app.delete("/delete", (req, res) => {
    res.write(`<h1>Hello from Delete </h1>`);
    res.end();
});
app.use('/login',loginRoute)



app.listen(PORT,()=>{
    console.log('Listening on ', PORT)
})
























// // http
// const http = require('http')
// console.log('hello from kuldeep')




// const server = http.createServer((req, res) => {
//     console.log("Hello from server")



//     // res.write(
//     //     JSON.stringify(

//     //         {
//     //             name: 'kuldeep',
//     //             work: 'dont  have'
//     //         }
//     //     )

//     // )
//     // res.writeHead(200, { "Content-Type": "text/html" })


//     console.log(req.url)
//     // switch (req.url) {
//     //     case '/suretrust': {

//     //         res.write(`<h1>Hello from Sure Trust</h1> `);
//     //     }
//     //         break
//     //     case '/kuldeep': {

//     //         res.write(`<h1>Hello from Kuldeep</h1> `);
//     //     }
//     //         break
//     //     default: {
//     //         res.write(`<h1>Hello from server</h1>`);
//     //         res.end()
//     //     }
//     // }
    









// })

// server.listen('3001', () => {
//     console.log('listening on 3001')
// })



