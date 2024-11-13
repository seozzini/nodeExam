// app.js

const express = require('express'); // 모듈을 부르고
const app = express(); // 실행시키는 인스턴스 등록

// 서버가 제공하는 서비스(라우팅 메소드)
app.get('/', (req, res) => {
  res.send('Server Connect');
});

// 실제 서버가 실행하는 것(포트번호)
app.listen(3000, () => {
  console.log('서버가 실행됩니다.');
  console.log('http://localhost:3000');
});
