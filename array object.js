// 배열 array
// 여러개의 데이터를 변수에 저장
console.log('[배열]');

var member = ['sangju', 'san100', 'ooolll300'];
console.log(member);
console.log(member[0]);

function get_members(){
    return ['sangju', 'san100', 'ooolll300'];
}
members = get_members();
console.log(members[0].toUpperCase() + '\n');

for (var i = 0; i < members.length; i++){ // 배열에 담겨있는 데이터들의 갯수를 알수 있음
    console.log(members[i].toUpperCase());
}

// 배열의 조작
// 추가
var li = ['a', 'b', 'c', 'd'];
li.push('f'); // 배열 추가
console.log(li);
li = li.concat(['f', 'g']); // 배열 추가
console.log(li);
li.unshift('z'); // 배열의 시작 지점에 추가
console.log(li);
li.splice(2, 3, 'o', 's'); // 데이터 삭제 후 추가, 첫번째 인자: 삭제가 시작되는 지점, 두번째 인자: 시작되는 지점 부터 삭제되는 갯수, 세번째 인자: 추가되는 배열
console.log(li);

// 제거
li.shift(); // 첫번째 요소 삭제
console.log(li);
li.pop(); // 마지막 요소 삭제
console.log(li);
li.sort(); // 알파벳 순서대로 정렬
console.log(li);
li.reverse(); // 알파벳 역순으로 정렬
console.log(li);

console.log('\n[객체]');

// 객체 object
// 배열이랑 유사한 역할
// 인덱스(순서)의 구분이 없음, key로 지정 할수 있음
var grades = {
    'sangju' : 35,
    'sans100' : 30,
    'ooolll300' : 34
}
console.log(grades['sangju'] + '=' + grades.sangju);

// 반복문을 이용한 객체
for (var key in grades) {
    console.log('key : '+ key + ', value : ' + grades[key]); //grades[key] key값의 value 를 불러옴
}
console.log('\n');

// 객체 지향
// 객체는 객체를 담을수 있고, 함수도 담을 수 있다.
var grade = {
    'list': {'sangjuu': 35, 'sann100': 30, 'ooll300': 34},
    'show': function () {
        for(var name in this.list) { // 'this' 함수가 속해있는 객체를 가리키는 약속된 변수
            console.log(name + ':' + this.list[name]);
        }
    }
}
grade.show();

// https://www.opentutorials.org/course/743/6578 아주 어렵군