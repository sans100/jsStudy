// 조건문

var a = 3;
var b = 3;

// if
console.log('if 문');
if (a > b) {
    console.log('a가 크다');
} else if (b > a) {
    console.log('b가 크다');
} else {
    console.log('a와 b가 같다');
}

// switch
console.log('switch 문');
switch (true) {
    case a > b:
        console.log('a가 크다');
        break;
    case b > a:
        console.log('b가 크다');
        break;
    default:
        console.log('a와 b가 같다');
        break;
}

// 반복문
// for
console.log('for');
for (var i = 0; i < 10; i++) {
    console.log('for: ' + i);
}

// while
console.log('while');
var i = 0;
while (i < 10) {
    console.log('while: ' + i);
    i++;
}

// do while
console.log('do while');
i = 10;
do {
    console.log('do:' + i);
    i++;
} while (i < 10);
