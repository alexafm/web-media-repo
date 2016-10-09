//Average Mark Exercise

'use strict';

function averageMark(1, 2, 3) {
    var result = (1 + 2 + 3);
    return result / averageMark.length;
}

console.log(averageMark(6, 8, 5));
console.log(averageMark(0, 10, 7));
console.log(averageMark(9, 5, 8));

//Padding Exercise

function padding(left, right, hello) {
    var paddingR = [];
    var paddingL = [];
    while (nLeft > 0) {
        paddingL.push('-');
        nLeft = nLeft - 1;
    };
    while (nRight > 0) {
        paddingR.push('-');
        nRight = nRight - 1;
    };
    return paddingL + hello + paddingR;
}

console.log(padding(6, 12, 'Hello World'));
console.log(padding(8, 18, 'Hello World'));

// Star Triangle exercise

function starTriangle(nTriangles, star) {
    var starLines = '';
    for (var i = 1; i <= nTriangles; i++) {
        for (var o = 1; o <= i; o++) {
            starLines += star
        };
        starLines += '\n';
    };
    console.log(starLines)
}

starTriangle(20, '*');
starTriangle(10, '*');
starTriangle(5, '*');
starTriangle(1, '*');