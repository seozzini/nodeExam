// app.js 프로젝트의 시작점 application
//파일 읽고쓰려면 추가
const fs = require('fs');
// 서버 생성
const express = require('express'); //익스프레스 기반 모듈 부르기
const server = express();

const userRouter = require('./router/user.js');
const exp = require('constants');
server.use('/user', userRouter); //대표경로 부여 (권한걸기쉬움)

server.use('/img', express.static('./images'));

//에러처리
server.use(function (err, req, res, next) {
  res.status(500).JSON({ statusCode: res.statusCode, errMessage: err.message });
}); //500코드 강제부여

server.get('/error', (req, res, next) => {
  next(new Error('Process Fail! Check Data!'));
});

// 미들웨어 등록(Express기반의 보조기능: 제이슨 파싱기능)
server.use(express.json());

// DB 설정 (파일 다 읽고 작업: Sync 동기식), 나중에 app.js가 늘어나면 파일 분리해야함.
const jsonFile = fs.readFileSync('data.json');
const jsonData = JSON.parse(jsonFile); //parse: 제이슨->객체로 변환

const query = (crud, target, where) => {
  //target이 등록할때 insert하는 data // (crud, target, where):텍스트,객체,객체

  let result = null;
  let emps = jsonData;
  switch (crud) {
    // 조회
    case 'SELECT':
      result =
        where == null
          ? emps
          : emps.filter((emp) => {
              return findEmp(emp, where);
            });
      break;

    // 등록
    case 'INSERT':
      emps.push(target);
      break;

    // 수정
    case 'UPDATE':
      emps.forEach((emp) => {
        if (findEmp(emp, where)) {
          for (let field in target) {
            // for...in 객체 순환
            emp[field] = target[field];
          }
        }
      });
      break;

    // 삭제
    case 'DELETE':
      let selected = null;
      emps.forEach((emp, idx) => {
        if (findEmp(emp, where)) {
          selected = idx; //인덱스번호만 들고와서 splice로 잘라버림 for문 안에서 삭제는 별로다..
        }
      });

      emps.splice(selected, 1);
      break;
  }

  return result;
};

function findEmp(emp, where) {
  let fieldNum = 0; // 총 검색조건 갯수
  let selected = 0; // true인 검색조건 갯수

  for (let field in where) {
    fieldNum++;
    if (emp[field] == where[field]) {
      selected++;
    }
  }
  return fieldNum == selected;
}
// 서버 실행(서버사용 포트결정/일반적으로 3000아니면 5000)
server.listen(3000, () => {
  console.log('Server Start'); //콜백함수로 서버 정상 실행시 어떤 작업을 하고자 하는지 나열
  console.log('http://localhost:3000');
});

// 루트경로 (누구나 접근가능 get method로)
server.get('/', (req, res) => {
  //res.send('Server Connect!'); //send시 끝남. 통신 끊어짐
  res.sendFile('./index.html', { root: __dirname });
});

// 전체조회 : GET , emps
server.get('/emps', (req, res) => {
  //res.send(jsonData);
  res.send(query('SELECT'));
});

//사용자가 보내준 항목
/*
  req.params => pathvariable
  req.body   => JSON
  req.query  => QueryString
*/

// 단건조회 : GET , emps/:id => pathvariable방식(경로에붙는변수)
server.get('/emps/:id', (req, res) => {
  //res.send('Emp Info');

  res.send(query('SELECT', null, { id: req.params.id }));
});

// 등록 : POST , emps
server.post('/emps', (req, res) => {
  //res.send('Emp Insert');
  console.log(req.body);
  res.send(query('INSERT', req.body)); //insert라 where절 필요X
});

// 수정 : PUT , emps/:id
server.put('/emps/:id', (req, res) => {
  //res.send('Emp Update');
  res.send(query('UPDATE', req.body, { id: req.params.id }));
});

// 삭제 : DELETE , emps/:id
server.delete('/emps/:id', (req, res) => {
  //res.send('Emp Delete');
  res.send(query('DELETE', null, { id: req.params.id }));
});

//http://localhose:3000/emps 전체조회
//http://localhose:3000/emps/10 단건조회
