// Node.js 상에서 Express로 서버를 만들기 위한 기본 셋팅
// express 객체에 설치한 express 라이브러리를 첨부
const express = require('express');

// express 라이브러리를 사용할 객체를 생성
const app = express();

// express 객체로 서버를 여는 listen();
// 인자는 서버를 띄울 포트 번호, 띄운 후 실행할 코드
app.listen(8080, function(){
    console.log('listening on 8080')
});

// GET 요청을 받는 코드: 접속하면 메시지 띄워주기
// 누군가가 /pet 으로 방문을 하면
// pet 과 관련된 안내문을 띄워줌
// send() 함수를 이용
// 인자는 요청할 경로, 응답할 때 실행할 함수
app.get('/pet', function(req, res){
    res.send('펫 용품 쇼핑할 수 있는 페이지입니다.')
});

// GET 요청을 받는 코드: html 파일 보내기
// '/' 는 홈임 (localhost:8080)
// 누군가가 홈에 방문하면 html 파일을 보내서 띄워줌
// sendFile() 함수를 이용
// 인자는 파일 경로 (__dirname 은 현재 index.js 가 위치한 절대 경로를 반환)
app.get('/test', function(req, res){
    res.sendFile(__dirname + '/server.htm')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html')
});

app.get('/bootstrap', function(req, res){
    res.sendFile(__dirname + '/bootstrap.html')
});
