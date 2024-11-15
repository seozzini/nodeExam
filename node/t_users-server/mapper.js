//t_users-server -> mapper.js

//MySQL연결
const mysql = require('mysql');
const sql = require('./sql.js');

//커넥션 풀 생성
const pool = mysql.createPool({
  host: `localhost`,
  port: `3306`,
  user: `dev01`,
  password: `1234`,
  database: `dev`,
  connectionLimit: 10,   
})

//쿼리문 실행할 함수형태의 객체
const query = (alias, values)=>{
  return new Promise((resolve,reject)=>{
    let excuteSql = sql[alias];
    console.log(excuteSql);

    pool.query(excuteSql, values, (err, results)=>{
      if(err){
        console.log(err);
        reject({err});
      }else{
        resolve(results);
      }
    });
  });
};

module.exports = {query}; //왜 {}로 감싸나요?