// app.js

const express = require('express');
const app = express();
const mysql = require('./mapper.js');

//content-type : application/json (REST Server에 적합)
//미들웨어 등록: 없으면 사용자가 넘겨주는 데이터를 처리못함
app.use(express.json());

app.listen(3000, () => {
  console.log('Server start');
  console.log('http://localhost:3000');
});

//전체조회 (customers: 접근자원, 현재 테이블 1개뿐)
app.get('/customers', async (req, res) => {
  let list = await mysql.query('customerList');
  res.send(list);
});

//단건조회
app.get('/customers/:id', async (req, res) => {
  let selected = req.params.id;
  let info = (await mysql.query('customerInfo', selected))[0]; //await로 결과받고 첫번째값만 돌려준다. 배열 깨뜨려야함
  res.send(info);
});

//등록
app.post('/customers', async (req, res) => {
  let newObj = req.body;
  console.log(newObj);
  let info = await mysql.query('customerInsert', newObj);
  res.send(info);
});

//수정
app.put('/customers/:id', (req, res) => {});

//삭제
app.delete('/customers/:id', async (req, res) => {
  let selected = req.params.id;
  let info = await mysql.query('customerDelete', selected);
  res.send(info);
});
