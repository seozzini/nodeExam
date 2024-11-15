// router/user.js  계정과 관련된 기능 추가한다고 생각.

//express 호출 (별도의 공간으로 app.js와 모듈공유안됨)
const express = require('express');
const router = express.Router();

// /user + / => /user/
router.get('/', (req, res) => {
  res.send('회원 정보 조회');
});

// /user + /insert => /user/insert
router.post('/insert', (req, res) => {
  res.send('회원등록');
});

module.exports = router; //종료지점임. 이 뒤에 코드 작성하지 말기(죽은코드)
