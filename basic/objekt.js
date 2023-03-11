"use strict";
let Inhaber_1 = {
    vorname: "Maria",
    nachname: "Müller",
    geschlecht: "divers",
    alter: 44
};
let konto_1 = {
    iban: "DE5937493575993",
    bic: "WEDER",
    inhaber: Inhaber_1,
    kontostand: 3500,
    aktive: true
};
console.log(konto_1.aktive);
const kontodetails = function (konto) { 
    console.log(`${konto.inhaber.vorname} hat ${konto.kontostand} € auf dem Konto ${konto.iban}`);
 };
 kontodetails(konto_1);


 for(let pair of Object.entries(Inhaber_1)) {
    console.log(pair);
 }
 
 for(let properties of Object.keys(Inhaber_1)) {
    console.log(properties);
 }
 
