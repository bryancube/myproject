const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('안녕, 세상!\n');
}).listen(80, () =>{
    console.log('80번 포트에서 서버 실행');
});