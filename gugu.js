/*console.log('구구단 시작');
var danMax = 9;

for(var i=1; i<=danMax; i++) {
    for (var j=1; j<=danMax; j++) {
        //console.log(i+' X '+j+' = '+i*j);
        console.log(`${i}\tX\t${j}\t=\t${i*j}`);
    }
    if (i < danMax) {
        console.log('');
    }
}
console.log('구구단 끝');

/*
1x1=1     2x1=2      3x1=3
1x2=2     2x2=4      3x2=6
1x3=3     2x3=6      3x3=9
1x4=4     2x4=8      3x4=12
1x5=5     2x5=10     3x5=15
1x6=6     2x6=12     3x6=18
1x7=7     2x7=14     3x7=21
1x8=8     2x8=16     3x8=24
*/


console.log('응용 구구단 시작');
var lineMax = 3;
var danMax = lineMax * 3;
var printGugu = '';
for(var i = 1; i <= danMax; i = i + lineMax) {
    for(var j = 1; j <= danMax; j++) {
        for(var k = 0; k < lineMax; k++) {
            printGugu += `${(i+k)}\tX\t${j}\t=\t${(i+k)*j}`;
            if (k < lineMax - 1) {
                printGugu += `\t\t\t`;
            } else {
                printGugu += '\n';
            }
        }
    }
    if(i < danMax-2) {
        //console.log('');
        printGugu += '\n';
    }
}
console.log(printGugu);
console.log('응용 구구단 끝');

var test = '';
for (var i = 0; i < 3; i++) {
    test += 2 * i;
}
console.log(test);

