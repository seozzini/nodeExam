// middleApp.js
const express = require('express');
const cors = require('cors');

const app = express();

// 모든 요청에 응답 (제한없이) -> 내일 다시 설명
app.use(cors());
