let fs =require('fs')
let http =require('http');
 
let server = http.createServer(function(req,res){
    if(req.url==='/'){
        fs.readFile('home.html',function(error,data){
         res.writeHead(300,{'Content-Type':'text/html'})
         res.write(data)
         res.end()
        })
    }
});
server.listen(5000)
console.log('server run is successful')