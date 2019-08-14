// object 메뉴얼

// Object.keys()
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));

// Object.prototype.toString()
var o = {}
console.log(o.toString());


// object 확장

Object.prototype.contain = function (needle) {
    for(var name in this){
        if(this[name] === needle) {
            return true;
        }
    }
    return false;
} // object의 포함된 메서드를 추가
// 권장되는 방법은 아님
var o = {'name': 'sangju', 'city': 'seoul'}
console.log(o.contain('sangju'));
var a = ['sangju', 'sanghu', 'junghun'];
console.log(a.contain('sanghu'));

//겁나 어렵다