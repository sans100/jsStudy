// 클로저
// https://www.opentutorials.org/course/743/6544
// 내부함수 외부함수
// 특정 함수 내에서만 이용되는 함수를 사용할때 내부함수를 정의, 응집성

function outter() { // 외부함수
    var title = 'coding everybody'; // 지역 변수
    function inner() { // 내부함수
        return title; // 내부함수에서 변수가 호출될 때 외부함수에 정의된 지역변수에 접근 할 수 있음, 클로저
    }
    return inner();
}
console.log(outter());