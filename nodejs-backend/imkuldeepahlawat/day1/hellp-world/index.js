// http
const http = require('http')
console.log('hello from kuldeep')

const server = http.createServer((req, res) => {
    console.log("Hello from server")



    // res.write(
    //     JSON.stringify(

    //         {
    //             name: 'kuldeep',
    //             work: 'dont  have'
    //         }
    //     )

    // )
    // res.writeHead(200, { "Content-Type": "text/html" })
    res.write(`<h1>Hello from server</h1> <h2>Hello from server</h2>`);
    res.end()



})

server.listen('3001', () => {
    console.log('listening on 3001')
})



