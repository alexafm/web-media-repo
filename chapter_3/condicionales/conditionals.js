//Sign Number exercise

'use strict'

function signNumb(a) {
    var sign = '';
    if (a < 0) {
        return int = '-';
    } else {
        return int = '+';
    }
}

console.log(signNumb(-4));
console.log(signNumb(5));
console.log(signNumb(-10));
console.log(signNumb(6));

//Little sort exercise


function littleSort(a, b, c) {
    if (a <= b) {
        if (c <= a) {
            return (c + a + b);
        } else if (c <= b) {
            return (a + c + b);
        } else {
            return (a + b + c);
        }
    } else {
        b < a
        if (c <= b) {
            return (c + b + a);
        } else if (c <= a) {
            return (c + b + a);
        } else {
            return (b + c + a);
        }
    }

}

console.log(littleSort(10, 5, 1));
console.log(littleSort(0, 2, 1));
console.log(littleSort(-10, 4, 300));
console.log(littleSort(6, 0, 200));

//Minimun Number exercise


function minNumber(a, b, c, d, e) {
    if (a > b) {
        return a;
    }
    if (b > c) {
        return a;
    }
    if (c > d) {
        return a;
    }
    if (d > e) {
        return a;
    }
}

var result = minNumber(5, 9, 0, -4, 20);

console.log(result);