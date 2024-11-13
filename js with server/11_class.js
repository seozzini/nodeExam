// 11_class.js

// 생성자 함수
function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.getInfo = () => {
    return `${this.name},${this.age},${this.city}`;
  };
}

let hong = new User('hong', 30, 'Daegu');
console.log(hong.getInfo());

let kim = new User('Kim', 25, 'Jeju');
console.log(kim.getInfo());

// class
class Emp {
  constructor(id, name, dept) {
    //해당 클래스가 가지는 필드 등록(언더바: private 암묵적 룰)
    this._id = id;
    this._name = name;
    this._dept = dept; //부서정보
  }

  get id() {
    return this._id;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    //접근자 프로퍼티
    return this._name;
  }

  setDept(dept) {
    this._dept = dept;
  }

  getDept() {
    return this._dept;
  }
}

let kang = new Emp(100, 'Kang', 'Sales');
kang.id = 200; //변경이 안되는 이유는 get뿐 set이 없어서 실제값 변경이 안됨
kang.name = 'King'; //실제 변경이 됨
kang.setDept('Marketing');
console.log(kang);
