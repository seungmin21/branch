const http = require('http');

const server = http.createServer((req,res) => {
  // plain 설명
  // text/plain - 텍스트를 설명해준다.
  res.writeHead(200, {"Content-Type" : "text/plain"})
  res.write('향마루');
  res.end();
});

server.listen(3500, (err) => {
  if(!err) {
    console.error("서버 재구동 필요")
  } else {
    // 팁 콘솔에 링크를 만들어두면 링크를 클릭하기만 하면 된다.
    console.log("3500 포트에 돌아감 http://localhost:3500");
  }
});