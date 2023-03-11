"use strict";
let number = [12, 22, 34, 44,74, 48, 61, 11, 50];
let under_fifteen = number.filter(function(e) {
        if(e <= 50) {
            return true;
        } else {
            return false;
        }
});
console.log(under_fifteen);
let number_s = [1, 20, 2000, 1000000, 50];
let number_sort = number_s.sort(function(a, b){
    return b - a;
});
console.log(number_sort);
let fruits = ["Banana", "Apple", "Pineapple", "Rashverry", "Strowberry"];
let fruits_sort = fruits.sort();
console.log(fruits_sort);

