'use strict';
//First Element exercise

function firstElements(arraySrc, nElements) {
    var arrayDest = [];
    for (var i = 0; i < nElements; i++) {

        var elem = arraySrc[i];
        arrayDest.push(elem);

    };

    return arrayDest;

}

var students = ['alexa', 'cesar', 'mosco', 'santiago', 'tsp', 'eli'];
console.log(students(1));
console.log(students(5));

//Join All exercise

function joinAll(join, symbol) {
    var resultL = '';
    for (var i = 0; i < join.length - 1; i++) {
        resultL += join[i] + symbol
    };
    resultL += join[join.length - 1];
    console.log(resultL);
}

joinAll(['red', 'green', 'white', 'black'], '+');
joinAll(['red', 'green', 'white', 'black'], '3');
joinAll(['red', 'green', 'white', 'black'], '*');

//Reverse Join All exercise

function joinReverse(join) {
    var resultA = [];
    for (var i = join.length - 1; i >= 0; i--) {
        resultA.push(join[i]);
    };
    console.log(resultArray);

}

console.log(joinReverse([8, 4, 2, 0]));