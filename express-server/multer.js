const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); //파일저장 디렉토리에 사용자가 보내준 파일 밀어넣음
  },
  filename: function (req, file, cb) {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString(
      'utf8'
    ); //한글 이름 깨졌을때 추가하삼
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/profile', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req, res) => {
  for (let file of req.files) {
    console.log(file);
  }
});

app.listen(5000, () => {
  console.log('Server Start!!');
});
