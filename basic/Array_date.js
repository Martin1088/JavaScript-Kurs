//@ts-check
"use strict";
let test_map = new Map();
test_map.set("Continent", "Europa");
console.log(test_map.has("Continent"));
// date

let d = new Date();
console.log(d);
console.log(Date.now());
// new Date(year, month - index [...[]
let e = new Date(2005,5);
console.log(e);
e.setFullYear(1988);
console.log(e);
console.log(d.toLocaleString());
let o = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
};
let f = new Date();
console.log(f.toLocaleString("de_DE", o));