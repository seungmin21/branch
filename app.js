const http = require('http');

const server = http.createServer((req,res) => {
  // plain 설명
  // text/plain - 텍스트를 설명해준다.
  res.writeHead(200, {"Content-Type" : "text/plain"})
  res.write('향마루');
  res.end();
});

server.listen(3500, (err) => {

});