// 클로저
// https://www.opentutorials.org/course/743/6544
// 내부함수 외부함수
function outter() { // 외부함수
    var title = 'coding everybody';
    function inner() { // 내부함수
        return title;
    }
    return inner();
}
console.log(outter());