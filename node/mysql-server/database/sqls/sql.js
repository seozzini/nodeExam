// sql.js (sql문을 모아놓는 파일) / 백틱권장, 줄바꿈가능함

// 전체조회
const customerList = `SELECT id
        , name
        , email
        , phone
        , address
FROM customers
ORDER BY id`;

// 단건조회
const customerInfo = `SELECT id
, name
, email
, phone
, address
FROM customers
WHERE id = ?`; //id가 가져야할 숫자 단일값

// 등록
const customerInsert = `INSERT INTO customers
SET ?`; //객체타입 { 'name' = 'Hong', 'phone' = '010-1234-1234' }  or  SET name=?, phone=?

// 수정
const customerUpdate = `UPDATE customers
SET ?
WHERE id = ?`;
/* [{ 'name' = 'Hong', 'phone' = '010-1234-1234' }
                    , 1 ] -> 객체+단일값이 넘어가야함 
*/

// 삭제
const customerDelete = `DELETE FROM customers
WHERE id = ?`; //단일값

/*
//판단기준

1) 첫번째, ? 갯수
1-1) 1개 : 단일 값
1-2) 2개 이상 : 배열

2) 두번째, ? 앞에 컬럼의 유무
2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자, 날짜 등)
2-2) 컬럼이 없는 경우 객체
*/

module.exports = {
  customerList,
  customerInfo,
  customerInsert,
  customerUpdate,
  customerDelete,
};
