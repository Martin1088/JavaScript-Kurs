"use strict";
let animals = [
    "dog",
    "cat",
    "elefant",
    "tiger",
    "emu"
]
for(let i =0; i < animals.length; i++) {
    console.log(animals[i]);
};
animals.forEach(element => {
    console.log("Tier: " + element);
});
for(let f in animals) {
    console.log(" Test: " + f);
};


