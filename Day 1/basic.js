var http =require('http');
 
http.createServer((req,res)=>{
    res.end('hello world')
});
server.listen(5050)
console.log('server run is succesfull');