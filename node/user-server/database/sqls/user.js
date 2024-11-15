// Table : t_users

// 전체조회
const userList = `SELECT user_no
                        , user_id
                        , user_pwd
                        , user_name
                        , user_gender
                        , user_age
                        , join_date
                  From t_users
                  ORDER BY user_no`;
// 단건조회
const userInfo = `SELECT user_no
                        , user_id
                        , user_pwd
                        , user_name
                        , user_gender
                        , user_age
                        , join_date
                  From t_users
                  WHERE user_no = ?`;

// 등록
const userInsert = `INSERT INTO t_users
                    SET ?`; //컬럼에 not null 관련값 안받으면 Error남

//수정
const userUpdate = `UPDATE t_users
                    SET ?
                    WHERE user_no = ?`;

//삭제 (거의 PK 조건으로 삭제 / 여러건 삭제 우려)
const userDelete = `DELETE FROM t_users
                    WHERE user_no = ?`;

module.exports = {
  userList,
  userInfo,
  userInsert,
  userUpdate,
  userDelete,
};

/*
{
userList : ``,
userInfo : ``,
userInser: ``,
userUpdate: ``,
userDelete: ``
}
대괄호는 배열, 중괄호안에서 나열하는 것과 다름
*/
