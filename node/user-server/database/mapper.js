const mysql = require('mysql');
const sqlList = require('./sqls/user.js');

const connectionPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  connectionLimit: process.env.MYSQL_LIMIT,
  debug: true,
});

//소통 위해 우리 쿼리문 보내는 코드 필요
const query = (alias, values) => {
  return new Promise((resolve, reject) => {
    let executeSql = sqlList[alias];
    connectionPool.query(executeSql, values, (err, results, fields) => {
      //console.log(fields); // 내부실행결과에 대한 정보
      if (err) {
        console.log(err);
        reject({ err }); //실패할때 에러정보 , 프로세스종료
      } else {
        resolve(results); //성공결과
      }
    });
    //풀기반 DB에 전달(놀고있는 풀 알아서 배당) 1.실행쿼리+2.물음표에 들어갈 data 없으면 걍 ?로 보내버림+3.결과처리 콜백함수
  });
};

module.exports = {
  query,
};
