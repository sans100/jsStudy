// argument 인자
function sum() {
    var i, _sum = 0;
    for(i = 0; i < arguments.length; i++){
        console.log(i + ' : ' + arguments[i] + '<br>');
        _sum += arguments[i];
    }
    return _sum;
}
console.log(sum(1,2,3,4));

// 어려움