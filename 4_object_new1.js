// 객체 name은 속성, introduce는 메소드
var person = {} // 빈객체 생성
person.name = 'egoing'; // 값을 담는 방법
person.introduce = function() {
    return 'My name is ' + this.name;
}
console.log(person.introduce());

// 객체를 보기 좋게 묶어 줌
var person2 = {
    'name' : 'sangju',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}
var person3 = {
    'name' : 'sanghu',
    'introduce' : function() {
        return 'My name is ' + this.name;
    }
}
// introduce 가 중복됨, 생성자/new 를 이용해서 해결

console.log(person2.introduce());
