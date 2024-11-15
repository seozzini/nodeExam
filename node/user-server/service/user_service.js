//service/user_service.js (기능부->함수등록:함수표현식)
const mysql = require('../database/mapper.js');

//전체조회
const findAll = async () => {
  let list = await mysql.query('userList');
  return list;
};

//단건조회
const findByUserNo = async (userNo) => {
  let list = await mysql.query('userInfo', userNo);
  let info = list[0]; //배열로 받기에 1건 반환처리 (19:12 들어보기 왜 배열로 오는지)
  return info;
};

//등록
const createNewUser = async (userInfo) => {
  //userInfo는 객체로 가정하고 진행 (인자:사용자가 넘겨준 등록대상을 객체로 받는다)
  let result = await mysql.query('userInsert', userInfo);
  if (result.insertId > 0) {
    return { user_no: result.insertId };
  } else {
    return {}; //실패시 빈객체 반환
  }
};

//수정
const updateUserInfo = async (userNo, updateInfo) => {
  //배열이 아니라 두개의 값으로 받는것도 가능
  let data = [updateInfo, userNo];
  let result = await mysql.query('userUpdate', data);
  let returnData = {};
  if (result.changedRows == 1) {
    returnData.target = { user_no: userNo };
    returnData.result = true;
  } else {
    returnData.result = false;
  }
  return returnData;
};

//삭제
const delUserInfo = async (userNo) => {
  let result = await mysql.query('userDelete', userNo);
  if (result.affectedRows == 1 && result.changedRows == 0) {
    return { result: 'success', user_no: userNo };
  } else {
    return { result: 'fail' };
  }
};

module.exports = {
  findAll,
  findByUserNo,
  createNewUser,
  updateUserInfo,
  delUserInfo,
};
