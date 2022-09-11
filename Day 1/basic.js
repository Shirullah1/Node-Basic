let http =require('http');
 
let server = http.createServer((req,res)=>{
    res.end('hello world')
});
server.listen(5050)
console.log('server run is successful ');