s = "30.579";

// String in eine Ganzzahl umwandeln
console.log(parseInt(s, 10));
console.log(typeof parseInt(s, 10));

// String in eine Kommazahl umwandeln
console.log(parseFloat(s));
console.log(typeof parseFloat(s));

// Acht geben beim Rechnen mit Kommazahlen
let result1 = (1 / 3) * 3;
console.log(result1);

// Rundungsfehler vorprogrammiert!
let result2 = 50.35 % 6 - 2.35;
console.log(result2);

// LÖSUNG:Einfach Kommazahlen vermeiden
let result3 = 5035 % 600 - 235;
console.log(result3);