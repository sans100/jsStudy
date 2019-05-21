// function
/*
function 함수명 ( [인자...[,인자]] ) {
    코드
    return 반환값
}
*/
// 재사용성, 유지보수가 용이함, 가독성

function test() { // 기명 함수
    console.log('test');
}
test();

var b = function test1() { // 기명 함수
    console.log('b');
};
b();

var a = function() { // 익명 함수
    console.log('a');
};
a();

var cc = (function() {
    console.log('즉시 실행 함수');
    var aa = 1;
    var bb = 2;
    return aa + bb;
})();
console.log(cc);

function sum() {
    var sumAll = 0;
    for (var i = 0; i < arguments.length; i++) {
        sumAll = sumAll + arguments[i];
    }
    return sumAll;
}
var sumA = sum(1, 2, 3, 4, 5, 6);
var sumB = sum(1, 4, 5, 6, 7, 8, 901);
console.log(sumA);
console.log(sumB);


var step = (function() {
    var stepCount = 0;
    return function() {
        console.log(stepCount);
        stepCount++;
    };
})();


step();
step();
step();
step();

String.prototype.replaceAll = function(from, to) {
    return this.split(from).join(to);
};

console.log('123123a123a'.replaceAll('1', 'c'));
console.log('123123a123a'.replaceAll('2', 'a'));

var tttttt = [1, 2, 3];
Array.prototype.inArray = function(check) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === check) {
            return true;
        }
    }
    return false;
}

var checkingArray = [ "8", "9", "10", 10 ];
console.log(checkingArray.inArray(5 + 5));