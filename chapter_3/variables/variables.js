//Money Exchange Exercise 

'use strict'

var MXN = 600;
var USD = 19.50;
var EUR = 21.70;

var convertUsd = MXN / USD;
var convertEur = MXN / EUR;

console.log(':: Money Exchange ::');
console.log(convertUsd);
console.log(convertEur);

//Sales with discounts Exercise 


var dressCost = 500;
var socksCost = 100;

var discountDress = 0.1;
var discountSocks = 0.5;

//recordatoria para sacar el descuento producto = producto - (producto * discount);

var realDress = dressCost - (dressCost * discountDress);
var realSocks = socksCost - (socksCost * discountSocks);

console.log('Final price is' + realDress);
console.log('Final price is' + realSocks);


