// new 생성자(constructor)
// 함수에 new를 붙이면 그 리턴값 p는 객체가 된다!!!!

function Person () {}
var p1 = new Person();
p1.name = 'egoing';
p1.introduce = function () {
    return 'My name is ' + this.name;
}
console.log(p1.introduce()+"<br />");

var p2 = new Person();
p2.name = 'sangju';
p2.introduce = function () {
    return 'My name is ' + this.name;
}
console.log(p2.introduce());

// 중복을 없앴다.
function Persons (name) {
    this.name = name;
    this.introduce = function () {
        return 'My name is ' + this.name;
    }
}
p3 = new Persons('egoings');
console.log(p3.introduce()+"<br />");
p4 = new Persons('sanghu');
console.log(p4.introduce());

// new 생성자는 초기화를 할 수 있다. init, initialize