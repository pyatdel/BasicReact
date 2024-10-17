import express from 'express';
import serveIndex from 'serve-index';

const serverPort = 272;

const app = express(); // 이 한줄로 그냥 웹서버 생성 ok

app.use('/',express.static("./public"),serveIndex('./public',{icons:true}));

app.listen(serverPort,()=>{
    console.log(`server is running on ${serverPort}`);
});