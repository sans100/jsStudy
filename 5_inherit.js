// 상속
function Person(name) {
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function() {
    return 'my name is '+ this.name;
}
function Programmer(name) {
    this.name = name;
}

Programmer.prototype = new Person();
var p1 = new Programmer('sangju');
console.log(p1.introduce());

// 어렵다. 다시 볼 필요가 있다