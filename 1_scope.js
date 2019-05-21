// 유효범위 스코프
// https://www.opentutorials.org/course/743/6495

// 전역변수와 지역변수
var vscope = 'global'; // 전역변수, 전역에 있는 변수
function fscope() {
    var vscope = 'local'; // 지역변수, 함수 안에 정의한 변수, 함수 안에서만 접근 가능
    // vscope = 'local' // var 가 없으면 전역변수의 값을 수정해주는 꼴이다. var 가 있으면 새로이 정의하는 꼴이다.
    console.log(vscope);
}
fscope(); // 'local'
console.log(vscope + '\n'); // 'global


// 전역변수의 사용
(function(){
    var MYAPP = {} // 전역변수를 함수로 묶음으로 함수 내 지역변수로 바뀜
    MYAPP.calculator = {
        'left' : null,
        'right' : null
    }
    MYAPP.coordinate = {
        'left' : null,
        'right' : null
    }
    MYAPP.calculator.left = 10;
    MYAPP.calculator.right = 20;
    function sum() {
        return MYAPP.calculator.left + MYAPP.calculator.right;
    }
    console.log(sum());
}())

// 정적 유효범위
// i 변수를 불러오는 건 함수가 사용될 때가 아니라 정의 될때 불러옴
var i = 5;

function a(){
    var i = 10;
    b(); // 함수를 사용
}
function b(){ // 함수를 정의
    console.log(i);
}
a();