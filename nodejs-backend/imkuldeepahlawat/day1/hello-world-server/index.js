// http
const http = require('http')






const server = http.createServer((req, res) => {
    // request
    // response
    console.log('hello  from server')
    console.log('url', req.url)



    // switch(req.url){
    //     case'/user':{
    //         res.write(JSON.stringify({
    //             data:'Hello from server, im a happy server user api'
    //         }))
    //     }
    //     break
    //     case'/class':{
    //         res.write(JSON.stringify({
    //             data:'Hello from server, im a happy server class api '
    //         }))
    //     }
    //     break
    //     case'/kuldeep':{
    //         res.write(JSON.stringify({
    //             data:'Hello from server, im a happy server kuldeep'
    //         }))
    //     }
    //     break
    //     default:{
    //         res.write(JSON.stringify({
    //             data:'Hello from server, im a happy server'
    //         }))
    //     }


    // }

    if (req.url === '/kuldeep') {

        res.write(JSON.stringify({
            data: 'Hello from server, im a happy server kuldeep api in if statement'
        }))

    }
    if (req.url === '/kuldeephtml') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
       
        res.write(
            '<h1>Hello From Server </h1><h2>Hello From Server </h2><h3>Hello From Server </h3> <h4>Hello From Server </h4> <h5>Hello From Server </h5><h6>Hello From Server </h6>'
        )

    }






    res.end()


    // user
    // class
    // kuldeep
    // /
})


server.listen(3001, () => {
    console.log('listen.... on', 3001)
})