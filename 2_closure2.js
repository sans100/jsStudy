// 클로저
// 클로저의 독특함
// 외부함수가 종료된 이 후에도 내부함수를 통해서 접근할 수 있다.

function outter() {
    var title = 'coding everybody';
    return function() {
        console.log(title); // 내부함수를 리턴값으로 반환하면서 외부함수를 종료
    }
}
var inner = outter(); // 종료된 외부함수를 변수 inner 에 담고,
inner(); // 호출하면 외부함수가 종료되었지만 지역변수 title 에 접근 할 수 있다. 어렵다.