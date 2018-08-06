var http = require("http");
var fs = require("fs");

var  server = http.createServer(function(req,res){

  fs.readFile('./index.html', 'utf-8',function(err, data){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
  })

}).listen(3000);
