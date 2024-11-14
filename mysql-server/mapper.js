// mapper.js

//MySQL 연결
const mysql = require('mysql'); //mysql 모듈
const sql = require('./sql.js'); //등록한 sql 모듈

//커넥션 풀 생성 (DB와 연결)
const pool = mysql.createPool({
  host: `localhost`, //mysql이 존재하는 IP
  port: `3306`, //mysql 포트
  user: `dev01`,
  password: `1234`,
  database: `dev`, //접속하려는 Database
  connectionLimit: 10, //선점하려는 connection 최대갯수
});

//쿼리문을 실행할 함수형태의 객체(Promise는 성공, 실패만 반환 후 종료)
//alias = customerList
const query = (alias, values) => {
  return new Promise((resolve, reject) => {
    let excuteSql = sql[alias]; //sql['customerInfo']
    console.log(excuteSql);

    pool.query(excuteSql, values, (err, results) => {
      //sql문, 값,콜백 함수로 값반환
      //실제로 실행한 결과를 반환
      if (err) {
        console.log(err);
        reject({ err });
      } else {
        resolve(results);
      }
    });
  }); //await 거는 것
};

module.exports = { query };
