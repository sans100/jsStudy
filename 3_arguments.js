// argument 인자
// 유사 배열
function sum() { // 매개변수가 없는경우 약속된 객체의 랭스(arguments.length)를 이용해서 인자의 갯수 체크
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++){
        console.log(i + ' : ' + arguments[i]);
        _sum += arguments[i];
    }
    return _sum;
}
console.log(sum(1,2,3,4));

// 어려움