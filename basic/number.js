"use strict";
console.log(Math);
// Kreis  A = pi * 2^2 
let a = Math.PI * (Math.pow(12, 2));
console.log(a);
console.log(Math.floor(a));
console.log(parseFloat(a.toFixed(3)) *3);
// Zufallszahlen 
let z = parseFloat((Math.random() * 100).toFixed(2));
console.log(z);
let min = 40;
let max = 60;
let number = Math.floor(Math.random() * (max - min +1 ) + min);
console.log(number);
// float 
