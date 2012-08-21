// 모듈 추출
var http = require('http');

// 웹서버 생성 및 실행
http:createServer(function (request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello World .. !</h1>');
}).listen(8001, function () {
	console.log('Server running at ~');
});