const { write } = require('fs');
let http =require('http');
let URL = require('url');
 
let server = http.createServer((req,res)=>{
   let myUrl ='https://ostad.app/dashboard/my-courses/62f3ff74e816e76d02efc729/videos';
   let myUrlObject = URL.parse(myUrl,true);
   let myUrlHostName = myUrlObject.host;
   let myUrlPathName = myUrlObject.pathname;
   let myUrlSearchName =myUrlObject.search;
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write(myUrlPathName)
   res.end();
});
server.listen(5050)
console.log('server run is successful ');