// router/user_router.js
const express = require('express');
const router = express.Router();
const userService = require('../service/user_service.js');

//전체조회

//에러 발생 이유 숨길 때 사용
router.get('/users', async (req, res) => {
  userService
    .findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      res.status(500).send('Fail Process');
    });
});

/*
//기존코드
//사용자에게 에러를 그대로 오픈하는 스타일
router.get('/users', async (req, res) => {
  let userList = await userService.findAll();
  res.send(userList);
});
*/

//단건조회
router.get('/users/:no', async (req, res) => {
  let userNo = req.params.no;
  let info = await userService.findByUserNo(userNo);
  res.send(info);
});

//라우팅 = 사용자의 요청(URL+METHOD) + Service + view

//등록
router.post('/users', async (req, res) => {
  let userInfo = req.body;
  let result = await userService.createNewUser(userInfo);
  res.send(result);
});

//수정
router.put('/users/:no', async (req, res) => {
  let no = req.params.no;
  let info = req.body;
  let result = await userService.updateUserInfo(no, info);
  res.send(result);
});

//삭제
router.delete('/users/:no', async (req, res) => {
  userNo = req.params.no;
  info = await userService.delUserInfo(userNo);
  res.send(info);
});

module.exports = router;
