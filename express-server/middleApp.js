// middleApp.js
const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

// 모든 요청에 응답 (제한없이)
//app.use(cors());

// 지정한 요청에 대해서만 응답
const corsOptions = {
  origin: 'http://192.168.0.21:5500', //내 IP+vscode포트
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// application/x-www-form-urlencoded(통신의 기본 컨텐트타입)
//제이슨처럼 전용 파서 등록
app.use(express.urlencoded({ extended: false }));

app.post('/info', (req, res) => {
  res.send(`keyword: ${req.body.search}`);
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

//세션
let sessionSetting = session({
  secret: 'secret key', // 암호화 키 ->원래 외부파일형태로 관리
  resave: false, // 세션 저장 여부 true 빈번한 강제저장으로 자원소모 (우리는 로그인 정보만 간단히)
  saveUninitialized: true, //로그인유무와 상관없이
  cookie: {
    httpOnly: true, //js기반 쿠키 접근막기
    secure: false,
    maxAge: 60000, //유효기간
  },
});

app.use(sessionSetting);

// 로그인
app.post('/login', (req, res) => {
  const { id, pwd } = req.body; // 현 Body의 상태 -> {id:'Hong', pwd:'1234'};
  req.session.user = id; //user와 pwd는 세션에 저장하는 내가정한 이름임둥..
  req.session.pwd = pwd;
  req.session.save(function (err) {
    //세션은 일반변수와 달라서 save로 저장 요청해야함
    if (err) throw err;
    res.redirect('/'); //리다이렉트: 우리 서버 내부에 등록된 라우팅 호출
  });
});

app.get('/', (req, res) => {
  res.send(req.session);
});

// 로그아웃
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
