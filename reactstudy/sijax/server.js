import http from 'http';  // 내장된 http 모듈 가져오깅

console.log("나 서버할랭!"); // 그냥 괜히 로깅

const serverPort = 272;    // 내 맘대로 서버 포트

// 서버 생성 및 요청에 간단히 항상 같은 응답 구성
const server = http.createServer((req,res)=>{
    console.log("체킹:",req.url);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>안농 난 E7E라고해 </h1>');
    res.end('<h1>정신 연령은 중학생정도는 돼!</h1>');
});

// Listen 시작
server.listen(serverPort, ()=>{
    console.log(`Server is listening on ${serverPort}`);
});