const http = require('http')

http.createServer((req,res) => {
    let flip = (Math.floor(Math.random()*2))
    if (flip === 0){
        answer = 'Heads'
    }else answer = 'Tails'
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(answer))
    res.end()

}).listen(8888)